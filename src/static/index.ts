import {CityI, WeatherTabsIds, WeatherTabsItemI, WeatherTabsView} from "../types";

export const staticSelectableCity: Array<CityI> = [
    {
        id: 498817,
        name: "Санкт-Петербург",
        init: true,
    },
    {
        id: 2013348,
        name: "Владивосток",
        init: true,
    },
    {
        id: 524901,
        name: "Москва",
        init: true,
    },
    {
        id: 1496747,
        name: "Новосибирск",
        init: true,
    },
    {
        id: 1489425,
        name: "Томск",
        init: true,
    },
    {
        id: 520555,
        name: "Нижний Новгород",
        init: true,
    },
    {
        id: 511196,
        name: "Пермь",
        init: true,
    },
    {
        id: 551487,
        name: "Казань",
        init: true,
    },
    {
        id: 1486209,
        name: "Екатеринбург",
        init: true,
    },
]

export const directionOfWind = ["Северный", "Северо-Восточный", "Восточный", "Южно-Восточный", "Южный", "Южно-Западный", "Западный", "Северо-Западный"]


export const weatherTabs: Array<WeatherTabsItemI> = [
    {
        id: WeatherTabsIds.Now,
        name: WeatherTabsView[WeatherTabsIds.Now],
        sectionsCount: 1,
    },
    {
        id: WeatherTabsIds.Today,
        name: WeatherTabsView[WeatherTabsIds.Today],
        sectionsCount: 9,
    },
    {
        id: WeatherTabsIds.TwoDay,
        name: WeatherTabsView[WeatherTabsIds.TwoDay],
        sectionsCount: 18,
    },
]
