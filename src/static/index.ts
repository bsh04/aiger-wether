import {CityI, WeatherTabsIds, WeatherTabsItemI, WeatherTabsView} from "../types";

export const staticSelectableCity: Array<CityI> = [
    {
        id: 498817,
        name: "Санкт-Петербург",
    },
    {
        id: 2013348,
        name: "Владивосток",
    },
    {
        id: 524901,
        name: "Москва",
    },
    {
        id: 1496747,
        name: "Новосибирск",
    },
    {
        id: 1489425,
        name: "Томск",
    },
    {
        id: 520555,
        name: "Нижний Новгород",
    },
    {
        id: 511196,
        name: "Пермь",
    },
    {
        id: 551487,
        name: "Казань",
    },
    {
        id: 1486209,
        name: "Екатеринбург",
    },
    {
        id: 1496153,
        name: "Омск",
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

export const shortDirectionOfWind = ["С", "В", "Ю", "З"]
