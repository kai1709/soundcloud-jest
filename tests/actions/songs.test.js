import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../src/constants/ActionTypes';
import * as songsActions from '../../src/actions/songs';

const entities = {
    songs: {
        firstSong: {
            title: "firstSong",
            user_id: 123
        }
    },
    users: {}
}
const playlists = {
    firstPlaylist: {
        items: []
    }
};

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('Songs Actions', () => {
    it('should fetch song', () => {
        const songId = 'anySong';
        const expectedActions = [
            {
                type: types.REQUEST_SONG,
                songId
            }
        ];
        const initialState = {
            entities: entities,
            playlists: playlists
        };
        const store = mockStore(initialState);
        store.dispatch(songsActions.fetchSongIfNeeded(songId));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('should receive songs', () => {
        const songId = 'firstSong';
        const expectedActions = [
            {
                type: types.RECEIVE_SONGS,
                entities: {},
                nextUrl: null,
                playlist: entities.songs['firstSong'].title,
                songs: [songId]
              }
        ];
        const initialState = {
            entities: entities,
            playlists: playlists
        };
        const store = mockStore(initialState);
        store.dispatch(songsActions.fetchSongIfNeeded(songId))
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('should receive song', () => {
        const entities = entities;
        const expectedAction = {
            type: types.RECEIVE_SONG,
            entities: entities
        };
        expect(songsActions.receiveSong(entities)).toEqual(expectedAction);
    })
})
