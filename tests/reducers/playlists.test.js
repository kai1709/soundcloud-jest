import * as types from '../../src/constants/ActionTypes';
import reducer from '../../src/reducers/playlists';

const initialState = {};
describe('PLaylists Reducers', () => {
    it('should return initialState', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should receive songs', () => {
        const action = {
            type: types.RECEIVE_SONGS,
            playlist: 'randomPlayList',
            songs: ['firstSong', 'secondSong'],
            nextUrl: 'randomUrl'
        };
        const expected = {
            [action.playlist]: {
                isFetching: false,
                items: action.songs,
                nextUrl: action.nextUrl
            }
        };
        expect(reducer(initialState, action)).toEqual(expected);
    });
    it('should request songs', () => {
        const action = {
            type: types.REQUEST_SONGS,
            playlist: 'randomPlaylist'
        };
        const expected = {
            [action.playlist]: {
                isFetching: true,
                items: [],
                nextUrl: null
            }
        };
        expect(reducer({}, action)).toEqual(expected);
    });
});
