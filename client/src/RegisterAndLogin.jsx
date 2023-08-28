import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Register(){
    const[username, setUsername] = useState('');            //var starts as '' empty str, when called, setusername will be called with the 
    const[password, setPassword] = useState('');            // new content as its argument. it will then set username variable to its new value using the usestate hook
    const[isLoginOrRegister, setIsLoginOrRegister] = useState('register');
    const {setUsername:setLoggedInUsername, setId} = useContext(UserContext);  // get the setusername and setid fns from the created usercontext

    async function handleSubmit(ev){
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        ev.preventDefault();
        const {data} = await axios.post(url, {username,password});
        setLoggedInUsername(username);      // call the set functions to update the values in the context file
        setId(data.id);
    };

    return(
        <div className="bg-blue-50 h-screen flex items-center flex-col justify-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>                  
                <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="username" className="block w-full rounded-sm p-1.5 mb-3 border"/>
                <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" placeholder="password"className="block w-full rounded-sm p-1.5 mb-3 border"/>
                <button className="bg-blue-500 text-white block w-full rounded-md p-1.5">{isLoginOrRegister === 'register' ? 'Register':'Login' }</button>
            </form>

        <div className="text-center mt-2">
            {isLoginOrRegister === 'register' &&(
                <div> 
                    Already a member? <button onClick={()=>setIsLoginOrRegister('login')}>Login Here</button>
                </div>
            )}
            {isLoginOrRegister === 'login' &&(
                <div> 
                    Don't have an account? <button onClick={()=>setIsLoginOrRegister('register')}>Register Here</button>
                </div>
            )}
        </div>
        
        </div>
    );

}  // in the input fields, value is used to communicate with api, on change calls the setXXXXX function to update the variables
