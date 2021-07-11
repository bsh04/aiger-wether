import React, {useCallback, useEffect, useMemo} from 'react';
import {weatherTabs} from "../../../static";
import "./blocks.scss"
import {SearchParams, WeatherTabsIds} from "../../../types";
import {useHistory} from "react-router-dom"
import {useQuery} from "../hooks/useQuery";
import classNames from "classnames"

export const WeatherTabs = () => {
    const history = useHistory()
    const {selectedTab} = useQuery()
    const setSearchParams = useCallback((id: WeatherTabsIds) => {
        history.push({
            search: `?${SearchParams.selectedTab}=${id}`
        })
    }, [history, fetch, selectedTab])

    useEffect(() => {
        if (!history.location.search.includes(SearchParams.selectedTab)) {
            setSearchParams(WeatherTabsIds.Now)
        }
    }, [])

    return (
        <div className="tabs-container">
            {weatherTabs.map(({id, name}) => (
                <div
                    key={id}
                    className={classNames("tab", {"-selected": selectedTab === id})}
                    onClick={() => selectedTab !== id && setSearchParams(id)}
                >
                    <span>{name}</span>
                </div>
            ))}
        </div>
    );
};
