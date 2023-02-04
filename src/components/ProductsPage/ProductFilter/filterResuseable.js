import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./filter.module.css"


export default function FilterReusable(props) {
    let [heig, btnHeight] = useState(40)
    function handleBtnClick() {
        if (heig == 300) {
            btnHeight(40)
        }
        else if (heig == 40) {
            btnHeight(300)
        }
    }
    return (
        <div className={styles.FFilter} style={{ height: `${heig}px` }}>
            <Button bg={"white"} _hover={{background:"white"}} onClick={handleBtnClick} position="absolute" w="100%" top="0">{props.name}</Button>
            {props.children}
        </div>
    )
}