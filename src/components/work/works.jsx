import React from 'react';

import styles from "./works.module.css"
import Image from "./work";


function Works({works})  {
    return (
        <div className={styles.container}>
            <div className={styles.works}>
                {
                    works.map((work) => 
                        <Image key={work.id} title={work.title} image={work.image} />
                    )
                }
            </div>
        </div>
    );
}

export default Works;
