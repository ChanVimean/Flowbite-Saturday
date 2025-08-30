import useApi from "../hook/useApi";

const Ict = () => {
  const { data } = useApi();

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <h2>{item.category}</h2>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ict;
