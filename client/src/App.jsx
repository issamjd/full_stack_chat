import axios from "axios"
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {

  axios.defaults.baseURL = 'http://localhost:4040';       // set origin url
  axios.defaults.withCredentials = true;                  // used to be able to set cookies from api

  return (
    <UserContextProvider> 
      <Routes/>
    </UserContextProvider>
  )
}  // user context provider wraps register, so register can access the context in it

export default App
