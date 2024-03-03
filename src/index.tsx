import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {RegisterServices} from './startup/RegisterServices'
import {RegistryNames} from './startup/RegistryNames'
import {GetService} from './lib/ServiceLocator'
import {IMainViewModel} from './viewmodels/Main/types'

//console.log('Rendering index...')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

RegisterServices()
// At the composite root here so Service Locator use is not an anti pattern.
const mainVm = GetService<IMainViewModel>(RegistryNames.IMainViewModel)

root.render(
  <React.StrictMode>
    <App vm={mainVm} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
