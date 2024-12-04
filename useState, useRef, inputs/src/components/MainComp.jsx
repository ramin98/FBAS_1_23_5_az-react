import { services } from "../../public/data/data"
import AddForm from "./AddForm"
import LoginForm from "./LoginForm"
import Services from "./Services/Services"
import { useState } from "react"

function MainComp() {
  let [servicesArray, setServices] = useState(services)

    return (
      <main>
        <LoginForm/>
        <AddForm servicesArray={servicesArray} setServices={setServices}/>
        <Services setServices={setServices} servicesArray={servicesArray}/>
      </main>
    )
  }
  
  export default MainComp
  
  