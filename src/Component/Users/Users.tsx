import React from 'react';
import userPhoto from '../../assets/images/userIcon.png';
import s from './Users.module.css';
import axios from 'axios';
import {UsersType} from './UsersContainer';

class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {this.props.userPage.users.map(m => <div key={m.id}>
                <span>
                    <div>
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto}
                             className={s.userPhoto} alt={'123'}/>
                    </div>
                    <div>
                        {m.followed
                            ? <button onClick={() => this.props.unfollow(m.id)}>Unfollowed</button>
                            : <button onClick={() => this.props.follow(m.id)}>Followed</button>
                        }
                    </div>
                </span>

                <span>
                    <span>
                        <div>{m.name}</div>
                        <div>{m.status}</div>
                    </span>
                    <span>
                        <div>{'m.location.country'}</div>
                        <div>{'m.location.city'}</div>
                    </span>
                </span>
            </div>)}
        </div>;
    }
}


export default Users