import {ProfileType} from 'api/types';
import {
    actions,
    InitialStateProfileType,
    profileReducer
} from 'store/redusers/profileReducer';

let startState: InitialStateProfileType;

beforeEach(() => {
    startState = {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'My first post!', likesCount: 20},
        ],
        profile: null as unknown as ProfileType,
        status: '',
    }
})

test('length of posts should be incremented', () => {
    const action = actions.addPost('it-kamasutra.com')
    const newState = profileReducer(startState, action)

    expect(newState.postsData.length).toBe(3);
});
test('message of new post should be correct', () => {
    const action = actions.addPost('it-kamasutra.com')
    const newState = profileReducer(startState, action)

    expect(newState.postsData[2].message).toBe('it-kamasutra.com')
});
test('post of status should be change', () => {
    const action = actions.setStatus('!!!Loading!!!')
    const newState = profileReducer(startState, action)

    expect(newState.status).toBe('!!!Loading!!!');
});
test('after deleted length of messages should be increment', () => {
    const action = actions.deletePost(1)
    const newState = profileReducer(startState, action)

    expect(newState.postsData.length).toBe(1);
});