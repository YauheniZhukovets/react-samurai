import {appReducer, initializedSuccessAC, initialStateProfileType} from './appReducer';

let startState: initialStateProfileType;

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
