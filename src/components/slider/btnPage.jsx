import React from "react";
import styles from "./slider.module.css"


function BtnPage(props)  {
    return (
        <a href ="#" className={styles.btn}>{props.child}</a>
    )
}

export default BtnPage