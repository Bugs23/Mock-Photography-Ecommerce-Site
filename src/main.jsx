import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
import App from './App'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </ContextProvider>,
)