import React from "react";
import styles from "./slider.module.css";
import BtnPage from "./btnPage.jsx";

function Slider(props)  {
    return (
        <div className={styles.page_number}>
            <BtnPage child="1"/>
            <span className={styles.ellipsis}> ... </span>
            <BtnPage child="18"/>
            <BtnPage child="19"/>
            <BtnPage child="20"/>
            <span className={styles.ellipsis}> ... </span>
            <BtnPage child="47"/>
        </div>
    )
}

export default Slider