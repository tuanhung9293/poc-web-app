import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.box}>
                    <div>Gallereasy POC web app</div>
                    <div>2359 Media</div>
                </div>
            </div>
        </footer>
    )
}
