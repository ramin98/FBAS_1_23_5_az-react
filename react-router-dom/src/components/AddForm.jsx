function AddForm({ setServices, servicesArray }) {

  function handleForm(ev) {
     ev.preventDefault()
     let formData = Object.fromEntries([...new FormData(ev.target)])

     let newArr = [...servicesArray]
     newArr.push(formData)
     setServices(newArr)
  }

  return (
    <section>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="serviceName" name="serviceName" />
        <input
          type="text"
          placeholder="serviceDescription"
          name="serviceDescription"
        />
        <button>ADD</button>
      </form>
    </section>
  );
}

export default AddForm;
