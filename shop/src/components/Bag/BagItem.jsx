function BagItem({
    product_name,
    product_description,
    product_price,
    url,
    id,
  }) {
  return (
    <li>
      <p>{product_name}</p>
      <p>{product_description}</p>
      <p>{product_price}</p>
      <img src={url} alt={product_name} />
    </li>
  );
}

export default BagItem;
