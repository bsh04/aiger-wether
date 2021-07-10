import React from 'react';
import {RequestStatus} from "../types";
import {Loading} from "../ui/Loading/Loading";

interface ApiRequestWrapperPropsProps {
    status: RequestStatus
}

export const APIRequestWrapper: React.FC<ApiRequestWrapperPropsProps> = ({status, children}) => {
    return (
        <div>
            {status === RequestStatus.Loading
                ? <Loading/>
                : status === RequestStatus.Fail
                    ? <></>
                    : children
            }
        </div>
    );
};
