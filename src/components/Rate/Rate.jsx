import React from "react";
import styles from './styles.module.css';
import { useState } from "react";
import goldStar from './img/star-gold.svg'
import blackStar from './img/star.svg'





export const Rate = ({ value }) => {
    return (
        <div className={styles.root}>
            {value.toFixed(1)}
            <div className={value>0 ? styles.active : null}><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
            <div className={value>1 ? styles.active : null}><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
            <div className={value>2 ? styles.active : null}><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
            <div className={value>3 ? styles.active : null}><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
            <div className={value>4 ? styles.active : null}><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>

            {/* {value}
            <img src={goldStar} alt="goldStar" className={styles.icon} />
            <img src={goldStar} alt="goldStar" className={styles.icon} />
            <img src={blackStar} alt="goldStar" className={styles.icon} /> */}
        </div>
    )
}

































{/* <div className="wrapper">
<div className={styles.active}><img src={blackStar} alt="blackStar" className={styles.icon}/> </div>
<div><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
<div><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
<div><img src={blackStar} alt="blackStar" className={styles.icon} /> </div>
<div><img src={blackStar} alt="blackStar" className={styles.icon} /> </div> */}
// </div>
{/* {value}
<img src={goldStar} alt="goldStar" className={styles.icon}/> 
<img src={goldStar} alt="goldStar" className={styles.icon}/> 
<img src={blackStar} alt="goldStar" className={styles.icon}/>  */}