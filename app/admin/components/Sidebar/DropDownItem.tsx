import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface DropDownItemProps {
      nama: string
      items: Array<{nama: string, kelas?: string}>
    }
    
const DropDownItem = ({nama, items}: DropDownItemProps) => {
  const router = useRouter();
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)

  function toLowerCase(nama: string) {
    return nama.toLowerCase().replace(/\s+/g, '-');
  }

  return (
    <>
      <li className="py-2 px-4 rounded-md m-1 bg-gray-100 hover:bg-white" onClick={() => setShow(!show)}>
        <div className="flex justify-between items-center cursor-pointer">
          <div>{nama}</div>
          <div>
            <motion.div
              initial={{rotate: 0}}
              animate={{ rotate: show ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </motion.div>
          </div>
        </div>
      </li>
      <motion.div
        initial={{height: 0, opacity: 0}}
        animate={{ opacity: show ? 1 : 0, height: show ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="ml-4 overflow-hidden"
      >
        <div className={`${show ? 'block' : 'hidden'}`}>
          {items?.map((item) => (
            <li onClick={() => router.push(`/admin/${toLowerCase(item.nama)}`)} className={`py-2 px-4 rounded-md m-1 bg-gray-100 hover:bg-white cursor-pointer`}>{item.nama}</li>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default DropDownItem
    