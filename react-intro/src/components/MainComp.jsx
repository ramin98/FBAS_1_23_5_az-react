import { services } from "../../public/data/data"
import AddForm from "./AddForm"
import Services from "./Services/Services"
import { useState } from "react"

function MainComp() {
  let [servicesArray, setServices] = useState(services)

    return (
      <main>
        <AddForm servicesArray={servicesArray} setServices={setServices}/>
        <Services servicesArray={servicesArray}/>
      </main>
    )
  }
  
  export default MainComp
  
  