import { createContext, useReducer } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainComponent from './components/MainComponent'
import { initialObjectProducts, reducerProducts } from './reducers/reducerState/reducerProducts'

export const MyContext = createContext()

function App() {

  let [productsState, productsDispatch] = useReducer(reducerProducts, initialObjectProducts)

  return (
    <MyContext.Provider value={{productsState, productsDispatch}}>
     <Header/>
     <MainComponent/>
     <Footer/>
    </MyContext.Provider>
  )
}

export default App
