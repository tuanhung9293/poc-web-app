import React from 'react';
import styles from './ImageList.module.scss';
import { Image } from './Image';
import PropTypes from 'prop-types';

export function ImageList({ imgList, onToggleFavorite }) {
    return (
        <div className={`${styles.wrapper} container`}>
            <div className="row">
                {imgList.length > 0 ?
                    (imgList.map((item, index) =>
                        <Image
                            key={index}
                            id={item.id}
                            url={item.url}
                            isFavorited={item.isFavorited}
                            onToggleFavorite={onToggleFavorite}
                        />
                    ))
                    :
                    <i className={styles.noShow}>No images to show</i>
                }
            </div>
        </div>
    );
}

ImageList.propTypes = {
    imgList: PropTypes.arrayOf(PropTypes.any).isRequired,
    onToggleFavorite: PropTypes.func.isRequired,
}
