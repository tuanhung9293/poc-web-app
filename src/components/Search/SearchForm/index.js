import React, { useState } from 'react';
import styles from './SearchForm.module.scss';
import PropTypes from 'prop-types';

export function SearchForm({ loadingSearch, fetchImg }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        fetchImg(value);
        event.preventDefault();
    }

    return (
        <div className={`${styles.wrapper} container`} >
            <div className="row">
                <div className="col-12 text-center">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="Start searching for images!"
                            value={value}
                            onChange={handleChange}
                            disabled={loadingSearch}
                        />
                        {loadingSearch &&
                            <div className={`${styles.searchSpinner} spinner-border`}>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

SearchForm.propTypes = {
    loadingSearch: PropTypes.bool.isRequired,
    fetchImg: PropTypes.func.isRequired,
}