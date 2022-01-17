import React from 'react';
import axios from 'axios';
import {UsersType} from './UsersContainer';
import {Users} from './Users';

class UsersAPIComponent extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPages}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrenPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      currentPages={this.props.currentPages}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      userPage={this.props.userPage}
        />
    }
}


export default UsersAPIComponent