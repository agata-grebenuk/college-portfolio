import React from 'react';
import styles from "./work.module.css"

function Image({image, title})  {
    return (
    <>
        <img className={styles.img} src={image} alt={title}></img>
    </>
    )
}

export default Image;