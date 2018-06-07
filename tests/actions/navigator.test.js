import * as actions from '../../src/actions/navigator';
import * as types from '../../src/constants/ActionTypes';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialRoute = {path: ['songs'], query: {q: 'house'}}
const initialState = {route: initialRoute};
describe('Navigator Actions', () => {
  it('should change path', () => {
    const path = Math.random().toString(36).substring(7);
    const expectedAction = {
      type: types.CHANGE_PATH,
      route: path
    };
    expect(actions.changePath(path)).toEqual(expectedAction);
  });
  it('should navigate back', () => {
    const event = {
        state: {
            route: {
                path: ['random-path'], query: {q: 'some-query'}
            }
        }
    };
    const expectedActions = [{
        type: types.CHANGE_PATH,
        route: event.state.route
    }];
    const store = mockStore({navigator: initialState});
    store.dispatch(actions.navigateBack(event));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should navigate to', () => {
    const route = {
        path: ['random-path'], query: {q: 'some-query'}
    }
    const expectedActions = [{
        type: types.CHANGE_PATH,
        route: route
    }];
    const store = mockStore({navigator: initialState});
    store.dispatch(actions.navigateTo(route, false));
    expect(store.getActions()).toEqual(expectedActions);
  });
})