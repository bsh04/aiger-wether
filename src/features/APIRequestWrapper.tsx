import React from 'react';
import {RequestStatus} from "../types";
import {Loading} from "../ui/Loading/Loading";
import {ErrorAlert} from "../ui/ErrorAlert/ErrorAlert";

interface ApiRequestWrapperPropsProps {
    status: RequestStatus
}

export const APIRequestWrapper: React.FC<ApiRequestWrapperPropsProps> = ({status, children}) => {
    return (
        <>
            {status === RequestStatus.Loading
                ? <Loading/>
                : status === RequestStatus.Fail
                    ? <ErrorAlert/>
                    : status === RequestStatus.Success && children
            }
        </>
    );
};
