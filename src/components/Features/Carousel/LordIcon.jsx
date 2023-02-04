import Lottie from "lottie-web"
import { defineElement } from "lord-icon-element"
defineElement(Lottie.loadAnimation);
export default function LordIcon(){
    return <lord-icon
    src="https://cdn.lordicon.com/mecwbjnp.json"
    trigger="click"
    colors="primary:#911051,secondary:#911051">
</lord-icon>
}
let style={width:"250px",
 height:"250px"}
export  function LordIconSearch(){
    return <lord-icon
    src="https://cdn.lordicon.com/rlizirgt.json"
    trigger="hover"
    colors="primary:#ffffff">
</lord-icon>
}