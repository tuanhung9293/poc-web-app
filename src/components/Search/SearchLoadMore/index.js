import React from 'react';
import PropTypes from 'prop-types';

export function SearchLoadMore({ onLoadMoreImg, loadingMore }) {
    return (
        <div className="col-12 text-center">
            <button
                className="btn btn-primary"
                onClick={onLoadMoreImg}
                disabled={loadingMore}>
                {loadingMore ?
                    <>
                        <span className="spinner-border spinner-border-sm" />
                        &nbsp;&nbsp;<span>Loading...</span>
                    </>
                    :
                    <span>Load More</span>
                }
            </button>
        </div>
    );
}

SearchLoadMore.propTypes = {
    onLoadMoreImg: PropTypes.func.isRequired,
    loadingMore: PropTypes.bool.isRequired,
}