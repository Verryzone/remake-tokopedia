export default function Home() {
  return (
    <> 
      <div className="my-4 ml-4">
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-300 bg-opacity-80">
              <tr>
                <th className="p-3">Header</th>
                <th className="p-3">Header</th>
                <th className="p-3">Header</th>
                <th className="p-3">Header</th>
                <th className="p-3">Header</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b">
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
                <td className="p-2">Dummy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
