function EditForm({flag, id, setServices, servicesArray }) {
    console.log(id)
    function handleForm(ev) {
       ev.preventDefault()
       let formData = Object.fromEntries([...new FormData(ev.target)])

       let newArr = [...servicesArray]
       let elementIndex = newArr.findIndex((item) => item.id === id);

       newArr[elementIndex].serviceName = formData.serviceName
       newArr[elementIndex].serviceDescription = formData.serviceDescription
       setServices(newArr)
    }
  
    return (
      <section className={flag ? '' : 'hide'}>
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
  
  export default EditForm;
  