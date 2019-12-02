import React from 'react';
import styles from './Content.module.scss';
import PropTypes from 'prop-types';

export function Content({ children }) {
    return (
        <section className={styles.wrapper}>
            {children}
        </section>
    )
}

Content.propTypes = {
    children: PropTypes.any.isRequired,
}