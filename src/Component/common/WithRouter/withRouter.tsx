import {useLocation, useNavigate, useParams} from 'react-router-dom';
import React from 'react';

type ComponentWithRouterPropsType = {
    location: any
    navigate: any
    params: { userId: string }
}
export type WithRouterType = {
    router: ComponentWithRouterPropsType
}

export const withRouter = (WrapperComponent: typeof React.Component) => (props: object) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
        <WrapperComponent
            {...props} router={{location, navigate, params}}
        />
    )
}

