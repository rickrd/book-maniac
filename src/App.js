import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.scss'
import { createStore } from 'redux'
import reducers from './components/redux/reducers'
import Home from './components/pages/Home'

const store = createStore(reducers)

const App = () => {
  return (
    <div className="App">
      <Home store={store}></Home>
    </div>
  )
}

export default App
