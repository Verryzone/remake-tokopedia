
interface InputProps {
      nama: string
      id: string
}

const Input =  ({nama, id} : InputProps) => {
  return (
    <>
      <div className="grid grid-cols-2 items-center my-4">
        <div>{nama}</div>
        <div>
          <input
            className="search-input-primary"
            type="text"
            name={id}
            id={id}
          />
        </div>
      </div>
    </>
  );
};

export default Input;
