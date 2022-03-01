import React, {ChangeEvent} from 'react';


export type ProfileStatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}


class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusTC(this.state.status)
    };
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>,
                       prevState: Readonly<{ editMode: boolean, status: string }>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'Введите статус'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            onChange={this.onStatusChange}
                            onBlur={this.deactivateEditMode}
                            type="text"
                            value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus