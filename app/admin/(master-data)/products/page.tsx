import React from "react";
import DialogAdd from "../../components/Sidebar/DialogAdd";

const Products = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold">Products</h1>
          <div>
            {/* <button className="button-primary">Add Product</button> */}
            <DialogAdd />
          </div>
        </div>
        <hr className="mb-4" />
        <div className="border border-gray-200 p-4 rounded-lg shadow-md">
          <div className="">
            <div className="flex items-center mb-10">
              <div className="pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                className="search-input-primary"
                type="text"
                name="cari"
                id="cari"
              />
            </div>
            <div>
              <table className="table-primary">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                  </tr>
                  <tr>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                  </tr>
                  <tr>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                    <td>gambar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Products;
