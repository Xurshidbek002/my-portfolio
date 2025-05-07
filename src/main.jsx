import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ToastContainer
      position="top-center" // <-- toast ekran o‘rtasida chiqadi
      autoClose={3000} // 3 sekunddan keyin yopiladi
      hideProgressBar={false} // progress chiziq chiqishi
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" // 'light' yoki 'dark' tema
    />
    <App />
  </StrictMode>,
)
