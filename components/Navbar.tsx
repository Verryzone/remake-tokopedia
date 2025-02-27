import Link from "next/link"

const NavItem = (href:string, nama:string) => {
    return (
        <Link className="text-slate-600 flex items-center justify-center pb-1 transition-all hover:font-bold" href={'/'+href}>
            {nama}
        </Link>
    )
}

const Navbar = () => {
  return (
    <nav className="py-6 px-6 flex items-center justify-between z-30 relative">
        <Link className="font-bold text-2xl lg:text-3xl text-gray-800" href={'/'}>
            As<span className="text-green-700">Travio.</span>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex ">
            <input className="border border-gray-400 h-10 rounded-full text-xs w-56" placeholder="    Search . . ." type="text" />
            {NavItem('', 'Dashboard')}
            {NavItem('product', 'Product')}
            {/* {NavItem('contact', 'Contact Us')} */}
            {/* {NavItem('product', 'Cart')} */}
        </ul>
        <div className="flex items-center justify-center">
            <button className="bg-gray-800 border rounded-full text-white py-[0.4rem] px-5 text-sm lg:py-2 lg:px-4 mx-1 transition-all hover:bg-green-700 font-bold hover:shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                </svg>
            </button>
            <button className="bg-gray-800 border rounded-full text-white py-[0.4rem] px-5 text-sm lg:py-2 lg:px-8 transition-all hover:bg-green-700 font-bold hover:shadow-md">Login</button>
        </div>
    </nav>
  )
}

export default Navbar