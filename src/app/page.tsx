import Brands from '@/components/Brands'
import Cards from '@/components/Cards'
import Phone from '@/components/Phone'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'

const fetchData = () =>
  fetch(
    'https://opensheet.elk.sh/1SKKEFQiYRQ-ZVCRIE00r-kw77todBaAY2MSWE9W6VIY/list',
    {
      next: { revalidate: 1800 },
    }
  ).then((res) => res.json())

export default async function Home() {
  const data = await fetchData()
  const filteredData = data.filter(
    (item: any) =>
      item.blackFriday === 'TRUE' &&
      (item.warehouse === 'Novokuznetskaya' ||
        item.warehouse === 'Novokuznetskaya - consig') &&
      item.status === 'В продаже'
  )
  const mostFavData = filteredData.filter(
    (item: any) => item.mostFav === 'TRUE'
  )
  const bigSaleData = filteredData.filter(
    (item: any) => item.bigSale === 'TRUE'
  )
  const brands = ['Adidas', 'Jordan', 'Nike', 'New Balance', 'UGG', 'Yeezy']
  return (
    <>
      <Header />
      <main className='wrapper  mt-5 xl:mt-[50px] scroll-smooth bg-white'>
        <div>
          <Brands />
          <Cards name={'Most popular'} data={mostFavData} cols={3} />
          <Cards name={'Big sale'} data={bigSaleData} cols={3} />
          {brands.map((brandName, index) => {
            const brandData = filteredData.filter((item: any) =>
              item.type.includes(brandName)
            )
            const cols = index % 2 === 0 ? 3 : 4
            return (
              <Cards
                key={index}
                name={brandName}
                data={brandData}
                cols={cols}
              />
            )
          })}
        </div>
      </main>
      <Footer />
      <Phone />
    </>
  )
}
