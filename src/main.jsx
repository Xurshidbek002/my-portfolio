import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" // Asosiy o'zgarish - dark theme
      style={{ bottom: '0' }}
      toastStyle={{
        fontSize: '14px',
        borderRadius: '8px',
        padding: '12px 20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        backgroundColor: '#000000', // Qora fon uchun qo'shimcha
        color: '#ffffff', // Oq matn uchun
      }}
      progressStyle={{
        background: 'rgba(255, 255, 255, 0.3)', // Progress bar uchun
      }}
    />
    <App />
  </StrictMode>
)
