import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { OnePiceApp } from './OnePiceApp'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <OnePiceApp className='onepice-app'/>
    </BrowserRouter>
  </React.StrictMode>,
)
