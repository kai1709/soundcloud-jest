import reducer from '../../src/reducers/playlist';
import * as types from '../../src/constants/ActionTypes';

const initialState = 'house';

describe('Playlist Reducers', () => {
    it('should return initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })
    it('should change playlist', () => {
        const action = {
            type: types.CHANGE_PLAYLIST,
            playlist: 'randomPlaylist'
        }
        expect(reducer(initialState, action)).toEqual(action.playlist);
    });
});
