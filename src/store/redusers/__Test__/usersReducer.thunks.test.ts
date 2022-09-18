import {usersAPI} from 'api/users-api';
import {BaseApiType} from 'api/types';
import {ResultCodesEnum} from 'api/enums';
import {actions, followTC, unfollowTC} from 'store/redusers/usersReducer';

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userAPIMock.followUser.mockClear()
    userAPIMock.unfollowUser.mockClear()
})

const result: BaseApiType = {
    data: {},
    resultCode: ResultCodesEnum.Success,
    fieldsErrors: [],
    messages: []
}

test('success follow thunk', async () => {
    const thunk = followTC(2)

    userAPIMock.followUser.mockReturnValue(Promise.resolve(result))

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 2))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(2))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 2))
})

test('success unfollow thunk', async () => {
    const thunk = unfollowTC(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result))

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleIsFollowingProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleIsFollowingProgress(false, 1))
})