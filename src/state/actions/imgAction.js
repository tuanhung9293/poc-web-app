import axios from 'axios';
import { FETCH_IMG, LOAD_MORE_IMG, TOGGLE_FAVORITE } from './actionTypes';

const defaultParams = {
    api_key: 'l1d1WPc0YyIRaQPmQV4PM3RHrths9HbS',
    limit: 8,
    lang: 'en',
};

export const fetchImg = (query) => (dispatch) => {
    dispatch({
        type: FETCH_IMG.PENDING,
    });

    axios({
        method: 'get',
        url: `https://api.giphy.com/v1/gifs/search`,
        params: {
            q: query,
            offset: 0,
            ...defaultParams
        }
    })
        .then((res) => {
            dispatch({
                type: FETCH_IMG.SUCCESS,
                payload: {
                    imgs: res.data.data.map((item) => {
                        return {
                            url: item.images.downsized.url,
                            id: item.id,
                            isFavorited: false,
                        }
                    }),
                    meta: {
                        q: query,
                        offset: 0,
                    }
                },
            });
        })
        .catch(() => {
            dispatch({
                type: FETCH_IMG.ERROR,
            });
        });
};

export const loadMoreImg = () => (dispatch, getState) => {
    dispatch({
        type: LOAD_MORE_IMG.PENDING,
    });

    const q = getState().imgReducer.meta.q;
    const offset = getState().imgReducer.meta.offset + 8;

    axios({
        method: 'get',
        url: `https://api.giphy.com/v1/gifs/search`,
        params: {
            ...defaultParams,
            q,
            offset,
        }
    })
        .then((res) => {
            dispatch({
                type: LOAD_MORE_IMG.SUCCESS,
                payload: {
                    moreImgs: res.data.data.map((item) => {
                        return {
                            url: item.images.downsized.url,
                            id: item.id,
                            isFavorited: false,
                        }
                    }),
                    meta: { q, offset }
                },
            });
        })
        .catch(() => {
            dispatch({
                type: LOAD_MORE_IMG.ERROR,
            });
        });
};


export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: { id }
    };
};


