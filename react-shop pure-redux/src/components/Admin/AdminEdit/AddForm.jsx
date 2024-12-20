import {  useRef } from "react";
import { useDispatch } from "react-redux";
import { addProductFetch } from "../../../store/reducers/reducerFetchs/adminFetchs";

function AddForm() {
  let dispatch  = useDispatch()
  let url = useRef(null);

  function handleAddForm(ev) {
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
  
      addProductFetch(formData, productObject, dispatch);
      };
  
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <form onSubmit={handleAddForm} encType="multipart/form-data">
        <input type="text" placeholder="product_name" name="product_name" />
        <input
          type="text"
          placeholder="product_description"
          name="product_description"
        />
        <input type="text" placeholder="product_price" name="product_price" />
        <label>
          PRODUCT PHOTO
          <input ref={url} type="file" name="url" />
        </label>

        <button>ADD</button>
      </form>
    </div>
  );
}

export default AddForm;
