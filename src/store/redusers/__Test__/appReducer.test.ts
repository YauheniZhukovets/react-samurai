import {actions, appReducer, InitialStateAppType} from 'store/redusers/appReducer';

let startState: InitialStateAppType;

beforeEach(() => {
    startState = {
        initialized: false
    }
})

test('must be should initialized', () => {
    const action = actions.initializedSuccess()
    const newState = appReducer(startState, action)

    expect(newState.initialized).toBe(true);
});
