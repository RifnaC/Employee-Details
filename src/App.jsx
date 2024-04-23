import Login from "./Pages/Login"
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {


  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employee" element={<Home />} />
        </Routes>
      </ChakraProvider>

    </>
  )
}

export default App
