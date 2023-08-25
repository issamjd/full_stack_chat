import axios from "axios"
import Register from "./Register"

function App() {

  axios.defaults.baseURL = 'http://localhost:4040';       // set origin url
  axios.defaults.withCredentials = true;                  // used to be able to set cookies from api

  return (
    <Register/>
  )
}

export default App
