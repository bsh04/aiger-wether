import {useLocation} from "react-router-dom"
import {useMemo} from "react";
import {SearchParams} from "../../../types";

export const useQuery = () => {
    const location = useLocation()
    const query = useMemo(() => new URLSearchParams(location.search), [location])
    const selectedTab = useMemo(() => query.get(SearchParams.selectedTab), [query])

    return useMemo(() => ({
        query,
        selectedTab,
    }), [query, selectedTab])
}