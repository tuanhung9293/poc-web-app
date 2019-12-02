import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function Header({ pathName, favoritedCount }) {
    const favouritesNavText = `Favourites${favoritedCount > 0 ? ` (${favoritedCount})` : ''}`;

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.box}>
                    <div className={styles.title}>Galler<b>easy</b></div>
                    <NavItem
                        to="/"
                        name="Search"
                        pathName={pathName}
                    />
                    <NavItem
                        to="/favourites"
                        name={favouritesNavText}
                        pathName={pathName}
                    />
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    pathName: PropTypes.string.isRequired,
    favoritedCount: PropTypes.number.isRequired,
}

function NavItem({ to, name, pathName }) {
    const isActive = pathName === to;
    return (
        <div className={`${styles.navItem} ${isActive ? styles.isActive : ''}`}>
            <Link to={to}>{name}</Link>
        </div>
    )
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pathName: PropTypes.string.isRequired,
}