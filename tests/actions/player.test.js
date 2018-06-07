import * as actions from '../../src/actions/player';
import * as types from '../../src/constants/ActionTypes';
import { PLAY_STATUS, CHANGE_TYPES } from '../../src/constants/SongConstants';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const initialState  = {
    player: {
        currentSongIndex: 0,
        currentTime: 0,
        selectedPlaylists: ['play'],
        status: 'init',
        playlists: {
            play: {
                items: [
                    'aaaa'
                ]
            }
        }
    },
    playlists: {
        play: {
            isFetching: false,
            items: [],
            nextUrl: false
        }
    }
}

describe('Player Actions', () => {
    it('should Change Player Status', () => {
        for (let status in PLAY_STATUS) {
            expect(actions.changePlayerStatus(PLAY_STATUS[status])).toEqual({
                type: types.CHANGE_PLAYER_STATUS,
                status: PLAY_STATUS[status]
            }); 
        }
    });
    it('should change current time', () => {
        for (let i = 0; i < 1000; i++) {
            expect(actions.changeCurrentTime(i)).toEqual({
                type: types.CHANGE_CURRENT_TIME,
                time: i
            });
        }
    })
    it('should change playing song', () => {
        for (let i = 0; i < 1000; i++) {
            expect(actions.changePlayingSong(i)).toEqual({
                type: types.CHANGE_PLAYING_SONG,
                songIndex: i
            });
        }
    });
    it('should change selected playlist', () => {
        const oldPlaylists = [1, 2, 3, 4, 5, 6, 7];
        const test1 = -5;
        const test2 = 4;
        expect(actions.changeSelectedPlaylists(oldPlaylists, test1)).toEqual({
            type: types.CHANGE_SELECTED_PLAYLISTS,
            playlists: oldPlaylists.push(test1) && oldPlaylists
        });
        expect(actions.changeSelectedPlaylists(oldPlaylists, test2)).toEqual({
            type: types.CHANGE_SELECTED_PLAYLISTS,
            playlists: oldPlaylists.splice(test2, 1) && oldPlaylists
        });
    });
    it('should play songs', () => {
        const playList = 'play';
        const songIndex = 2;
        const expectedActions = [
            { type: types.CHANGE_CURRENT_TIME, time: 0 },
            { type: types.CHANGE_PLAYING_SONG, songIndex }
        ]
        const store = mockStore(initialState);
        store.dispatch(actions.playSong(playList, songIndex));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('should change song', () => {
        const changeType = CHANGE_TYPES.NEXT;
        const currentSongIndex = initialState.songIndex ? initialState.songIndex : 0;
        const expectedActions = [
            { type: types.CHANGE_PLAYING_SONG, songIndex: currentSongIndex + 1 }
        ]
        const store = mockStore(initialState);
        store.dispatch(actions.changeSong(changeType));
        expect(store.getActions()).toEqual([]);
    });
  })
