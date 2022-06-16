import {authReducer, initialStateAuthType, setAuthUserDataAC} from './authReducer';

let startState: initialStateAuthType;

beforeEach(() => {
    startState = {
        id: null,
        login: null,
        email: null,
        isAuth: false,
        captchaUrl: null
    }
})

test('user id should be 555', () => {
    const action = setAuthUserDataAC(555, 'abc', 'abc@gmail.com', true, null)
    const newState = authReducer(startState, action)

    expect(newState.id).toBe(555);
});

test('user email should be: abc@gmail.com', () => {
    const action = setAuthUserDataAC(555, 'abc', 'abc@gmail.com', true, null)
    const newState = authReducer(startState, action)

    expect(newState.email).toBe('abc@gmail.com');
});

