import axios from "axios";
import { useState } from "react";

export default function Register(){
    const[username, setUsername] = useState('');            //var starts as '' empty str, when called, setusername will be called with the 
    const[password, setPassword] = useState('');            // new content as its argument. it will then set username variable to its new value using the usestate hook
    
    async function register(ev){
        ev.preventDefault();
        await axios.post('/register', {username,password});
    };

    return(
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={register}>                  
                <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="username" className="block w-full rounded-sm p-1.5 mb-3 border"/>
                <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" placeholder="password"className="block w-full rounded-sm p-1.5 mb-3 border"/>
                <button className="bg-blue-500 text-white block w-full rounded-md p-1.5">Register</button>
            </form>
        </div>
    );

}  // in the input fields, value is used to communicate with api, on change calls the setXXXXX function to update the variables
