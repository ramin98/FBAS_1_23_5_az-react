function AdminItem({
  customer_name,
  customer_number,
  customer_address,
  customer_bag,
}) {
  return (
    <li>
      <p>{customer_name}</p>
      <p>{customer_number}</p>
      <p>{customer_address}</p>
      <ul>
        {customer_bag.map((item) => {
          return (
            <li key={item.id}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <img src={item.url} alt={item.product_name} />
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default AdminItem;
