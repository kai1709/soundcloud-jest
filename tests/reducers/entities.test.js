import reducer from '../../src/reducers/entities';
import * as types from '../../src/constants/ActionTypes';

const initialState = {
    songs: {},
    users: {}
}

describe('Entities Reducers', () => {
    it('should return the initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should add state', () => {
        const expectedState = {
            songs: {
                title: 'firstSong'
            },
            users: {
                user_id: 1
            }
        };
        expect(reducer(initialState, { entities:  expectedState })).toEqual(expectedState);
    })
});
