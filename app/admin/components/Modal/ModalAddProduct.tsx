"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Input from "../Form/Input";
import InputFile from "../Form/InputFile";

export default function ModalAddProduct() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="button-primary hover:bg-green-800 hover:scale-105" onClick={() => setIsOpen(true)}>
        Add Product
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
            <form action="" encType="multipart/formdata" >
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-sm" onClick={() => setIsOpen(false)} >
                        <div className="bg-white p-5 rounded shadow-lg w-[60%] h-auto inset-2" onClick={(e) => e.stopPropagation()} >
                              <div className="relative w-full">
                                    <div className="flex justify-center">
                                          <h2 className="text-xl font-bold pb-2">Add</h2>
                                    </div>
                                    <div className="absolute right-0 top-0 hover:cursor-pointer hover:scale-110" onClick={() => setIsOpen(false)}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    </div>
                              </div>
                              <hr />
                              <div className="grid grid-cols-2 mt-4">
                                    <div>
                                          <Input nama="Name" id="name"/>
                                          <Input nama="Price" id="price"/>
                                          <Input nama="Stock" id="stok"/>
                                    </div>
                                    <div className="grid grid-cols-1 mx-8">
                                          <div className="flex justify-center">
                                                <div className="border-b border rounded-lg overflow-hidden">
                                                      <img src="/sepatu1.png" className="size-48" alt="" />
                                                </div>
                                          </div>
                                          <div className="flex justify-center">
                                                <small className="italic">sepatu baru saya.png</small>
                                          </div>
                                          <div className="relative inline-block mt-8">
                                                <input type="file" name="image" id="image" className="file:text-sm file:absolute file:right-0 file:bg-blue-500 file:text-white file:border-0 file:py-1 file:px-3 file:rounded-lg file:shadow-lg file:shadow-blue-700/30 file:cursor-pointer file:hover:scale-105 text-gray-600"/>
                                          </div>
                                    </div>
                              </div>
                              <div className="flex justify-center mt-8" onClick={() => setIsOpen(false)}>
                                    <button type="submit" className="button-primary hover:bg-green-800 hover:font-bold hover:scale-105 pr-8">
                                          Save
                                    </button>
                              </div>
                        </div>
                  </div>
            </form>
        </motion.div>
      )}
    </>
  );
}
