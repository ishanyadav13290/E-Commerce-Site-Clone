
import { createContext, useState } from "react";

export let AuthContext = createContext()

export default function ContextProvider({children}){
    // For login
    const [state, setState] = useState(JSON.parse(localStorage.getItem("loginStatus")) || false);
    const [alertVal,setAlertVal] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false)
    const [signInSuccessfull, setSignInSuccessfull] = useState(false)
    const [cartItems,setCartItems] = useState([]);
    const [loginUserID,setLoginUserID] = useState( JSON.parse(localStorage.getItem("loginUserID")) || {} )
    let [cartLength,setCartLength] = useState(0);
    let [sortBasis,setSortBasis] = useState("Default")
    let [total, setTotal] = useState(0)
    let [searchValue, setSearchValue] = useState("")
    let [activeSearch, setActiveSearch] = useState(false)
    let [checkoutTotal, setCheckoutTotal]= useState(total);
    let [isAdmin,setIsAdmin] = useState(false);
    function Login(){
        setState(true);
        localStorage.setItem("loginStatus",JSON.stringify(true))
    }
    function LogOut(){
        setState(false)
        setIsAdmin(false)
        localStorage.setItem("loginStatus",JSON.stringify(false))
        localStorage.setItem("loginUserID",JSON.stringify({}))
    }
    return <AuthContext.Provider value={{isAdmin,setIsAdmin,checkoutTotal, setCheckoutTotal,activeSearch, setActiveSearch,searchValue, setSearchValue,signInSuccessfull, setSignInSuccessfull,wrongPassword, setWrongPassword,wrongEmail, setWrongEmail,state,Login, LogOut,alertVal,setAlertVal, userCreated,setUserCreated,userExists, setUserExists,cartItems,setCartItems,loginUserID,setLoginUserID,cartLength,setCartLength,sortBasis,setSortBasis, total, setTotal}}>{children}</AuthContext.Provider>
}