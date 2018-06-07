import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../src/constants/ActionTypes';
import * as usersActions from '../../src/actions/users';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const user_id = 1;
const songs = ['firstSong'];
const entities = {
    songs: {
        firstSong: {
            title: "firstSong",
            user_id: 1
        }
    },
    users: {}
}
const playlist = "123";

describe('Users Actions', () => {
    it('should receive songs', () => {
        const selectedSongs = songs;
        const selectedEntities = entities;
        const playlist = playlist;
        const expectedAction =  {
            type: types.RECEIVE_SONGS,
            entities: selectedEntities,
            nextUrl: null,
            playlist: playlist,
            songs: selectedSongs
        };
        expect(usersActions.receiveSongs(selectedSongs, selectedEntities, playlist)).toEqual(expectedAction);
    });

    it('should receive followings', () => {
        const selectedEntities = entities;
        const expectedAction =  {
            type: types.RECEIVE_USER_FOLLOWINGS,
            entities: selectedEntities
        };
        expect(usersActions.receiveUserFollowings(selectedEntities)).toEqual(expectedAction);
    });

    it('should receive user', () => {
        const selectedEntities = entities;
        const expectedAction =  {
            type: types.RECEIVE_USER,
            entities: selectedEntities
        };
        expect(usersActions.receiveUser(selectedEntities)).toEqual(expectedAction);
    });

    it('should receive profile', () => {
        const selectedEntities = entities;
        const expectedAction =  {
            type: types.RECEIVE_USER_PROFILES,
            entities: selectedEntities
        };
        expect(usersActions.receiveUserProfiles(selectedEntities)).toEqual(expectedAction);
    });
    it('should request user', () => {
        const selectedUserId = user_id
        const expectedAction =  {
            type: types.REQUEST_USER,
            userId: selectedUserId
        };
        expect(usersActions.requestUser(selectedUserId)).toEqual(expectedAction);
    });
})
