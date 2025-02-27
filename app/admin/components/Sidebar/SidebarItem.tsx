interface SidebarItemProps {
  nama: string;
  aktif?: boolean;
}

const SidebarItem = ({ nama, aktif }: SidebarItemProps) => {
  let kelas = "";
  if (aktif === true) {
    kelas = "bg-white";
  }
  return (
    <li className={`py-2 px-4 rounded-md m-1 ${kelas} cursor-pointer hover:bg-white`} >
      {nama}
    </li>
  )
}

export default SidebarItem;
