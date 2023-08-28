import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});           //create a context object 

export function UserContextProvider({children}){
    const [username, setUsername] = useState(null); 
    const [id, setId] = useState(null); 
    useEffect(()=>{
        axios.get('/profile').then(response =>{
            setId(response.data.userId);
            setUsername(response.data.username);
        });
    }, [])
    return(
        <UserContext.Provider value={{username, setUsername, id, setId}}>
            {children}
        </UserContext.Provider>
    );                          // components in the usercontext provider can access the values given in this case username and id
}                               // use state is used to initialize them to null and the set functios to change the values later
