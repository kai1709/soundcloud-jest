import * as types from '../../src/constants/ActionTypes'
import * as playlistActions from '../../src/actions/playlists'

const playlist = {}

describe('Playlists actions', () => {
    it('should change playlist', () => {
        const expectedAction = {
            type: types.CHANGE_PLAYLIST,
            playlist: playlist
        };
        expect(playlistActions.changePlaylist(playlist)).toEqual(expectedAction);
    });
})

