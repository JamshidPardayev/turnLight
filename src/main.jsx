import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import NewPage from './NewPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/newPage" element={<NewPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)