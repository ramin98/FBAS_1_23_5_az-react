import { useContext, useRef } from "react";
import { MyContext } from "../../../App";
import { addProductFetch, editProductFetch } from "../../../reducers/reducerFetchs/adminFetchs";

function EditForm({product}) {
  let { editAdminDispatch } = useContext(MyContext);
  let url = useRef(null);

  function handleEditForm(ev) {
    ev.preventDefault();
    // let formData = Object.fromEntries([...new FormData(ev.target)]);

    let formData = new FormData();
    let productData = new FormData(ev.target);

    let productObject = {
      product_name: productData.get("product_name"),
      product_description: productData.get("product_description"),
      product_price: productData.get("product_price"),
    };

    let file = url.current.files[0];

    if (!file) {
      alert("Please select a file!");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      productObject.url = e.target.result;

      formData.append("data", JSON.stringify(productObject));
      formData.append("file", file);
      editAdminDispatch({type:'EDIT', payload: {productObject, id: product.id}})

      editProductFetch(formData, product.id);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div>
      <form onSubmit={handleEditForm} encType="multipart/form-data">
        <input
          defaultValue={product.product_name}
          type="text"
          placeholder="product_name"
          name="product_name"
        />
        <input
          type="text"
          placeholder="product_description"
          name="product_description"
          defaultValue={product.product_description}
        />
        <input
          defaultValue={product.product_price}
          type="text"
          placeholder="product_price"
          name="product_price"
        />
        <label>
          PRODUCT PHOTO
          <input ref={url} type="file" name="url" />
        </label>

        <button>EDIT</button>
      </form>
    </div>
  );
}

export default EditForm;
