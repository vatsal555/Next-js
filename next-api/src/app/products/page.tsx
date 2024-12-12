export const getProduct = async () => {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

export default async function Page() {
  const products = await getProduct();
  // console.log(products);

  return (
    <div>
      <h1>Products List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Color</th>
            <th>Company</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
