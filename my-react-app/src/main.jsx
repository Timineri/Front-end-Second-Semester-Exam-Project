import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import Repodetails from './components/Repodetails'
import Error from './components/Error'
import AppOutlet from './components/AppOutlet'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/Repodetails" element={<AppOutlet />}>
        <Route path=":id" element={<Repodetails />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

    <App />
    <RouterProvider router={router} />
    
    </ChakraProvider>
  </React.StrictMode>
)