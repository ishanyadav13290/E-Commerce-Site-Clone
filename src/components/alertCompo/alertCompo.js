import {
    Alert,
    AlertIcon,
    AlertTitle
  } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext/context'


export default function AlertCompo() {
    let {alertVal} = useContext(AuthContext)
    return (
        <Alert transition={"1s"} w={["80%","25%"]} position={"fixed"} top={["100px","10px"]} left={["50%","37.5%"]} opacity={alertVal==true?"100%":"0%"}  status='error'>
            <AlertIcon />
            <AlertTitle>Login Username or Password does not Match</AlertTitle>
        </Alert>
    )
}
// display={alertVal==true?"flex":"none"}

export function CustomAlert({msgs,status}){
    let {userCreated} = useContext(AuthContext)
    return <Alert transition={"1s"} w={["80%","60%","25%"]} position={"fixed"} top={["100px","50pxs","10px"]} left={["10%","37.5%"]} zIndex={"10"}  opacity={userCreated==true?"100%":"0%"}  status="success">
    <AlertIcon />
    <AlertTitle>{msgs}</AlertTitle>
</Alert>
}

export function UserExistsAlert(){
    let {userExists} = useContext(AuthContext)
    return <Alert transition={"1s"} w={["80%","60%","25%"]} position={"fixed"} top={["100px","50pxs","10px"]} left={["10%","37.5%"]} zIndex={"10"}  opacity={userExists==true?"100%":"0%"}  status="warning">
    <AlertIcon />
    <AlertTitle>User Already Exists! Please Login!</AlertTitle>
</Alert>
}

export function WrongEmail(){
    let {wrongEmail} = useContext(AuthContext)
    return <Alert transition={"1s"} w={["80%","60%","25%"]} position={"fixed"} top={["100px","50pxs","10px"]} left={["10%","37.5%"]} zIndex={"10"}  opacity={wrongEmail==true?"100%":"0%"}  status="warning">
    <AlertIcon />
    <AlertTitle>Please Enter a Valid Email ID!</AlertTitle>
</Alert>
    
}

export function WrongPassword(){
    let {wrongPassword} = useContext(AuthContext)
    return <Alert transition={"1s"} w={["80%","60%","25%"]} position={"fixed"} top={["100px","50pxs","10px"]} left={["10%","37.5%"]} zIndex={"10"}  opacity={wrongPassword==true?"100%":"0%"}  status="warning">
    <AlertIcon />
    <AlertTitle>Password must contain atleast one Lowercase, Uppercase and one Special Character!</AlertTitle>
</Alert>
    
}

export function SignInSuccessfull(){
    let {signInSuccessfull} = useContext(AuthContext)
    return <Alert transition={"1s"} w={["80%","60%","25%"]} position={"fixed"} top={["100px","50pxs","10px"]} left={["10%","37.5%"]} zIndex={"10"}  opacity={signInSuccessfull==true?"100%":"0%"}  status="success">
    <AlertIcon />
    <AlertTitle>Logged In Successfully!</AlertTitle>
</Alert>
}