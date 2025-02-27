const SidebarItem = (nama:string, kelas?:string) => {
  return (
    <li className={`py-2 px-4 rounded-md m-1 ${kelas}`}>{nama}</li>
  )
}

const Sidebar = () => {
  return (
    <div className="bg-gray-100 rounded-b-md h-screen">
      <ul className="p-1">
        {SidebarItem('Dashboard', 'bg-white')}
        {SidebarItem('Dashboard')}
        {SidebarItem('Dashboard')}
        {SidebarItem('Dashboard')}
        {SidebarItem('Dashboard')}
        {SidebarItem('Dashboard')}
      </ul>
    </div>
  )
}

export default Sidebar