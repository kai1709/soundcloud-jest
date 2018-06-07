import reducer from '../../src/reducers/navigator';
import * as types from '../../src/constants/ActionTypes';

const initialState = {
    route: {
        path: ['songs'],
        query: { q: 'house' }
    }
};

describe('navigator reducer', () => {
    it('should return the initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });
    it('should change path', () => {
        const action = {
            type: types.CHANGE_PATH,
            route: {
                path: ['collections'],
                query: { q: 'anything' }
            }
        };
        const expected = {
            route: action.route
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
});
