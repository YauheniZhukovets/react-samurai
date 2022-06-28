import React, {ChangeEvent} from 'react';

export type StatusPropsType = {
    status: string
    updateStatusTC: (status: string) => void
}

export type StatusStateType = {
    status: string
    editMode: boolean
}

class ProfileStatus extends React.Component<StatusPropsType, StatusStateType> {
    state: StatusStateType = {
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

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<StatusStateType>) {
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