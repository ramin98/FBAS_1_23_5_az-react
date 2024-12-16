import { useContext, useRef } from "react";
import { MyContext } from "../../../App";
import { addProductFetch } from "../../../reducers/reducerFetchs/adminFetchs";

function AddForm() {
  let { adminDispatch } = useContext(MyContext);
  let url = useRef(null)

  function handleAddForm(ev) {
    ev.preventDefault();
    // let formData = Object.fromEntries([...new FormData(ev.target)]);
    let formData = new FormData()
    let product = Object.fromEntries([...new FormData(ev.target)]);
    let file = url.current.files[0]

    delete product.url
    formData.append('data', JSON.stringify(product))
    formData.append('file', file)
    console.log([...formData])
     addProductFetch(formData)
    // adminDispatch({ type: "ADD FORM", payload:  formData});
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
