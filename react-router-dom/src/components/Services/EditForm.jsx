function EditForm({
  flag,
  id,
  setServices,
  servicesArray,
  serviceNameValue,
  serviceDescriptionValue,
}) {
  console.log(id);

  function handleForm(ev) {
    ev.preventDefault();
    let formData = Object.fromEntries([...new FormData(ev.target)]);

    let newArr = [...servicesArray];
    let elementIndex = newArr.findIndex((item) => item.id === id);

    newArr[elementIndex].serviceName = formData.serviceName;
    newArr[elementIndex].serviceDescription = formData.serviceDescription;
    setServices(newArr);
  }

  return (
    <section className={flag ? "" : "hide"}>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="serviceName" name="serviceName" defaultValue={serviceNameValue.current}/>
        <input
          type="text"
          placeholder="serviceDescription"
          name="serviceDescription"
          defaultValue={serviceDescriptionValue.current}
        />
        <button>ADD</button>
      </form>
    </section>
  );
}

export default EditForm;
