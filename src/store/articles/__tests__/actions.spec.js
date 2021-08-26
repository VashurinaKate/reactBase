import { getArticlesPending, getArticlesSuccess } from "../actions";
import { REQUEST_PENDING, REQUEST_SUCCESS } from "../actionTypes";

describe('getArticlesPending', () => {
    it('returns an object with specified type', () => {
        const result = getArticlesPending();
        expect(result).toEqual({ type: REQUEST_PENDING })
    })
})

describe('getArticlesSuccess', () => {
    it('returns an object with specified type', () => {
        const result = getArticlesSuccess([]);
        expect(result).toEqual({ type: REQUEST_SUCCESS, payload: [] })
    })
})
