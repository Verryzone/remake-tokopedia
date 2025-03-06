"use client"
import { useState } from "react";
import { motion } from "framer-motion"

export default function ModalAddProduct() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="button-primary" onClick={() => setIsOpen(true)}>Add Product</button>

      {isOpen && (
            <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
            >
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
                  <div className="bg-white p-5 rounded shadow-lg">
                        <h2 className="text-lg font-bold">Modal Title</h2>
                        <p>Ini modal di Next.js</p>
                        <button
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => setIsOpen(false)}
                        >
                        Tutup Modal
                        </button>
                  </div>
                  </div>
            </motion.div>
      )}
    </>
  );
}
