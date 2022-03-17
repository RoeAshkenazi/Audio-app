import React from 'react';
import styles from "../styles/Switch.module.css";

const Switch = ( {isTog, onTog } ) =>{
    return (
    <label className={styles.switch}>
        <input type="checkbox" checked={isTog} onChange={onTog}/>
        <span className={styles.slider} />
        <div></div>
    </label>
    );
};

export default Switch;