import React from 'react';
import classes from "./Logo.module.css"
import sol from './climate.png'
const Logo = () => (
    // <div className={classes.sky}>
    //     <div className={classes.circle}/>
    //     <div className={classes.cloud1} />
    //     <div className={classes.cloud2} />
    //     <div className={classes.cloud3} />
    // </div>
  
    <img src={sol} alt="Alguma coisa" className={classes.clima}/>

    
    
)
export default Logo;