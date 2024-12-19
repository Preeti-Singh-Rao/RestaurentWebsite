import { Fragment } from 'react'

import './App.css'
import Header from "./Components/Layout/Header"
import MealsSummary from './Components/Layout/Meals/MealsSummary';
import AvailableMeals from './Components/Layout/Meals/AvailableMeals';


function App() {
 
  return (
    <Fragment>
      <Header/>
      <MealsSummary/>
      <AvailableMeals/>
     
    </Fragment>
    
  )
}

export default App
