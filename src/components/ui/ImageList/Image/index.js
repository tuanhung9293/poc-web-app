import React from 'react';
import styles from './Image.module.scss';
import { FavoriteSvg } from '../../svg/FavoriteSvg';
import PropTypes from 'prop-types';

export function Image({ id, url, isFavorited, onToggleFavorite }) {
    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 col-12 ${styles.thumb}`}>
            <img alt="" style={{ backgroundImage: `url(${url}` }} />
            <div className={`${styles.favorite} ${isFavorited ? styles.isFavorited : ''}`}
                onClick={() => onToggleFavorite(id)}
            >
                <FavoriteSvg />
            </div>
        </div>
    );
}

Image.propTypes = {
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorited: PropTypes.bool.isRequired,
    onToggleFavorite: PropTypes.func.isRequired
};
