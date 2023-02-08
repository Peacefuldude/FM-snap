import React from 'react'

// Stylse
import styles from './FullPage.module.css'

// Components
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';

const FullPage = () => {

    return ( 
        <div className={styles.fullpage_container}>
            <main>
                <section className={styles.Navbar_section}>
                    <  Navbar  />
                </section>
                <section className={styles.Landing_section}>
                    <  Landing  />
                </section>
            </main>
        </div>
     );
}
 
export default FullPage;