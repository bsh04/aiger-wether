import React, {useEffect, useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Tooltip} from '@material-ui/core';
import {getCities, setCities} from "../../../features/citiesManages";
import {CityI} from "../../../types";
import "./blocks.scss"

interface FavoriteButtonProps {
    id?: number
    name?: string
}


export const FavoriteButton: React.FC<FavoriteButtonProps> = ({id, name}) => {
    const cities = getCities()

    useEffect(() => {
        if (!!cities) {
            if ((JSON.parse(cities) as Array<CityI>).find(({id: cityId}) => cityId === id)) {
                setIsAddedToFavorite(true)
            }
        }
    }, [cities, id])

    const [isAddedToFavorite, setIsAddedToFavorite] = useState<boolean>(false)

    const handleChangeToFavorite = () => {
        if (id && name) {
            if (isAddedToFavorite) {
                setCities((JSON.parse(cities) as Array<CityI>).filter(({id: cityId}) => cityId !== id))
            } else {
                setCities({
                    id,
                    name,
                    init: false,
                })
            }
        }
        setIsAddedToFavorite(!isAddedToFavorite)
    }

    return (
        <div onClick={handleChangeToFavorite}>
            <Tooltip title={isAddedToFavorite ? "Удалить из избранного" : "Добавить в избранное"} placement="top">
                <div>
                    {
                        isAddedToFavorite
                            ? <FavoriteIcon className="favorite"/>
                            : <FavoriteBorderIcon className="favorite"/>
                    }
                </div>
            </Tooltip>
        </div>
    );
};
