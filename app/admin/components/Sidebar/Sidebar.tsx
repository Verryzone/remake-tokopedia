"use client"

import SidebarItem from "./SidebarItem"
import DropDownItem from "./DropDownItem"


let itemsDropdown = [
  {nama: 'Products'},
  {nama: 'Category'},
  {nama: 'Brand'},
]

const Sidebar = () => {
  return (
    <div className="bg-gray-100 rounded-b-md h-screen">
      <ul className="p-1">
        <SidebarItem nama="Dashboard" aktif={true} />
        <DropDownItem nama="Master Data" items={itemsDropdown} />
        <SidebarItem nama="Settings" aktif={false} />
      </ul>
    </div>
  )
}

export default Sidebar