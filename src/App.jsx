import React from 'react'
import { RouterProvider } from 'react-router'
import router from "./routes"
import BasketProvider from './features/customer/components/context/BasketProvider';
import AuthProvider from './features/customer/components/context/AuthContext';
import ThemeProvider from './features/customer/components/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BasketProvider>
          <RouterProvider router={router} />
        </BasketProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App