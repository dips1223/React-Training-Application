import React from 'react';
import styles from './Home.module.scss'; 

const Home= () => { 
   return ( 
    <div className={styles.container}> 
        <h1 className={styles.title}>Hello, Home and CSS Modules!</h1> 
        <button className={styles.button}>Home</button>       
    </div> 
   ); 
}; 
export default Home; 
