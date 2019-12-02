import { FETCH_IMG, LOAD_MORE_IMG, TOGGLE_FAVORITE } from '../actions/actionTypes';

const initialState = {
    imgs: [],
    loadingSearch: false,
    loadingMore: false,
    meta: {
        q: '',
        limit: 0,
        offset: 0,
    }
};

export const imgReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_IMG.PENDING:
            return {
                ...state,
                loadingSearch: true,
            };

        case FETCH_IMG.SUCCESS:
            return {
                ...state,
                imgs: payload.imgs,
                meta: payload.meta,
                loadingSearch: false,
            };

        case FETCH_IMG.ERROR:
            return {
                ...state,
                loadingSeach: false,
            };

        case LOAD_MORE_IMG.PENDING:
            return {
                ...state,
                loadingMore: true,
            };

        case LOAD_MORE_IMG.SUCCESS:
            return {
                ...state,
                imgs: [...state.imgs, ...payload.moreImgs],
                meta: payload.meta,
                loadingMore: false,
            };

        case LOAD_MORE_IMG.ERROR:
            return {
                ...state,
                loadingMore: false,
            };

        case TOGGLE_FAVORITE:
            const index = state.imgs.findIndex(item => item.id === payload.id);
            const isFavorited = state.imgs[index].isFavorited;

            return {
                ...state,
                imgs: [
                    ...state.imgs.slice(0, index),
                    {
                        ...state.imgs[index],
                        isFavorited: !isFavorited,
                    },
                    ...state.imgs.slice(index + 1)
                ]
            }

        default:
            return state;
    }
};
