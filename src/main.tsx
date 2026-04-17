import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'


const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <LandingPage />,
        index: true
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(

    <StrictMode>
      <RouterProvider router={router} />

    </StrictMode>

)
