import React from "react";
import styles from "./button.module.css"

function Btn(props)  {
    return (
        <button className={styles.btn}>{props.child}</button>
    )
}

export default Btn
