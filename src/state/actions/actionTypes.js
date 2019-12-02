function apiActionType(type) {
    return {
        PENDING: `${type}_PENDING`,
        SUCCESS: `${type}_SUCCESS`,
        ERROR: `${type}_ERROR`,
    }
}

export const FETCH_IMG = apiActionType('FETCH_IMG');
export const LOAD_MORE_IMG = apiActionType('LOAD_MORE_IMG');
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
