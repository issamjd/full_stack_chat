import { useContext } from "react";
import Register from "./RegisterAndLogin";
import { UserContext } from "./UserContext";

export default function Routes(){
    const{username, id} = useContext(UserContext);          // get username from usercontext context using the use context fn

    if (username){
        console.log("adfa");
        return 'logged in'+ username;
    }
    return (
        <Register/>
    )
}