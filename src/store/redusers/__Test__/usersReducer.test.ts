import {actions, InitialStateUserType, usersReducer} from 'store/redusers/usersReducer';

let startState: InitialStateUserType;

beforeEach(() => {
    startState = {
        users: [
            {
                id: 1,
                followed: false,
                status: '1',
                name: 'Vasya',
                photos: {small: '', large: ''},
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                followed: false,
                status: '2',
                name: 'Petya',
                photos: {small: '', large: ''},
                location: {country: 'Russia', city: 'Moscow'}
            },
            {
                id: 3,
                followed: true,
                status: '3',
                name: 'Kolya',
                photos: {small: '', large: ''},
                location: {country: 'Ukraine', city: 'Kiev'}
            },
            {
                id: 4,
                followed: true,
                status: '4',
                name: 'Viktor',
                photos: {small: '', large: ''},
                location: {country: 'Spain', city: 'Barcelona'}
            },
        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPages: 1,
        isFetching: false,
        followingInProgress: []
    }
})

test('follow success', () => {
    const action = actions.followSuccess(2)
    const newState = usersReducer(startState, action)

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
});

test('unfollow success', () => {
    const action = actions.unfollowSuccess(3)
    const newState = usersReducer(startState, action)

    expect(newState.users[1].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeFalsy()
});