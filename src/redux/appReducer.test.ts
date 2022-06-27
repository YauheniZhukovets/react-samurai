import {appReducer, initializedSuccessAC, InitialStateAppType, } from './appReducer';

let startState: InitialStateAppType;

beforeEach(() => {
    startState = {
        initialized: false
    }
})

test('must be should initialized', () => {
    const action = initializedSuccessAC()
    const newState = appReducer(startState, action)

    expect(newState.initialized).toBe(true);
});
