import reducer from '../../src/reducers/player';
import * as types from '../../src/constants/ActionTypes';

const initialState = {
    currentSongIndex: null,
    currentTime: 0,
    selectedPlaylists: [],
    status: 'init'
}

describe('Player Reducers', () => {
    it('should return the initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });
    it('should change current time', () => {
        const action = {
            type: types.CHANGE_CURRENT_TIME,
            time: 1
        };
        const expected = {
            ...initialState,
            currentTime: action.time
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
    it('should change playing song', () => {
        const action = {
            type: types.CHANGE_PLAYING_SONG,
            songIndex: 1
        };
        const expected = {
            ...initialState,
            currentSongIndex: action.songIndex,
        }
        expect(reducer(initialState, action)).toEqual(expected);
    });
    it('should change selected playlists', () => {
        const action = {
            type: types.CHANGE_SELECTED_PLAYLISTS,
            playlists: ['randomPlayList']
        };
        const expected = {
            ...initialState,
            selectedPlaylists: action.playlists,
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
    it('should change player status', () => {
        const action = {
            type: types.CHANGE_PLAYER_STATUS,
            status: 'playing'
        };
        const expected = {
            ...initialState,
            status: action.status
        }
        expect(reducer(initialState, action)).toEqual(expected);
    })
});
