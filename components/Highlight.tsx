import Image from "next/image"
import Link from "next/link"

const ImageItem = (src:string, nama:string, harga:string) => {
  return (
    <Link href={''}> 
      <div className="rounded-lg overflow-hidden shadow-sm transition-all hover:cursor-pointer sm:hover:scale-110 hover:shadow-lg sm:hover:translate-x-6">
        <div className="overflow-hidden md:w-[200px] md:h-[200px] w-[180px] h-[180px] border-b border-gray-100">
          <Image src={'/'+src} alt="" width={300} height={300}/>
        </div>
        <div className="block bg-white">
          <div className="mx-2 py-2">
            <h1 className="">{nama}</h1>
            <h3 className="font-bold">Rp{harga}</h3>
            <p><span className="bg-green-400 bg-opacity-40 px-2 text-xs rounded-md">Dicount 5%</span></p>
            <p><span className="text-xs">✔️Center Jakarta</span></p>
            <p><span className="text-xs">⭐4.7 | 4k++ Sells</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Highlight = () => {
  return (
    <section className='w-full mb-8 lg:pt-10 border rounded-md'>
      <div className="">
        <h1 className="text-xl font-bold m-5 md:m-0 md:mb-10 text-center">Hot Product</h1>
      </div>
      <div className="flex justify-around items-center gap-2 md:px-5 md:gap-5 flex-wrap pb-10">
        {ImageItem('tas3.png', 'Vintage Messenger', '899.000')}
        {ImageItem('sepatu1.png', 'AirMax Sporty', '750.000')}
        {ImageItem('tas2.jpg', 'Elegant Tote', '1.200.000')}
        {ImageItem('sepatu2.jpg', 'Classic Leather', '950.000')}
        {ImageItem('tas3.png', 'Casual Sling Bag', '1.050.000')}
        {ImageItem('sepatu1.png', 'Streetwear Vibe', '670.000')}
        {ImageItem('sepatu2.jpg', 'Elegance Slip-On', '825.000')}
        {ImageItem('tas2.jpg', 'Modern Satchel', '680.000')}
        {ImageItem('sepatu2.jpg', 'ProFit Trainer', '1.450.000')}
        {ImageItem('tas3.png', 'Luxury Handbag', '980.000')}
        {ImageItem('tas2.jpg', 'Daily Crossbody', '650.000')}
        {ImageItem('sepatu1.png', 'Comfy Walk', '1.350.000')}
        {ImageItem('tas3.png', 'Vintage Messenger', '899.000')}
        {ImageItem('sepatu1.png', 'AirMax Sporty', '750.000')}
        {ImageItem('tas2.jpg', 'Elegant Tote', '1.200.000')}
        {ImageItem('sepatu2.jpg', 'Classic Leather', '950.000')}
        {ImageItem('tas3.png', 'Casual Sling Bag', '1.050.000')}
        {ImageItem('sepatu1.png', 'Streetwear Vibe', '670.000')}
        {ImageItem('sepatu2.jpg', 'Elegance Slip-On', '825.000')}
        {ImageItem('tas2.jpg', 'Modern Satchel', '680.000')}
        {ImageItem('sepatu2.jpg', 'ProFit Trainer', '1.450.000')}
        {ImageItem('tas3.png', 'Luxury Handbag', '980.000')}
        {ImageItem('tas2.jpg', 'Daily Crossbody', '650.000')}
        {ImageItem('sepatu1.png', 'Comfy Walk', '1.350.000')}
        {ImageItem('tas3.png', 'Vintage Messenger', '899.000')}
        {ImageItem('sepatu1.png', 'AirMax Sporty', '750.000')}
        {ImageItem('tas2.jpg', 'Elegant Tote', '1.200.000')}
        {ImageItem('sepatu2.jpg', 'Classic Leather', '950.000')}
        {ImageItem('tas3.png', 'Casual Sling Bag', '1.050.000')}
        {ImageItem('sepatu1.png', 'Streetwear Vibe', '670.000')}
        {ImageItem('sepatu2.jpg', 'Elegance Slip-On', '825.000')}
        {ImageItem('tas2.jpg', 'Modern Satchel', '680.000')}
        {ImageItem('sepatu2.jpg', 'ProFit Trainer', '1.450.000')}
        {ImageItem('tas3.png', 'Luxury Handbag', '980.000')}
        {ImageItem('tas2.jpg', 'Daily Crossbody', '650.000')}
        {ImageItem('sepatu1.png', 'Comfy Walk', '1.350.000')}

      </div>
    </section>
  )
}

export default Highlight