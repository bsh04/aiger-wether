import React, {useCallback, useEffect, useState} from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {Tooltip} from '@material-ui/core';
import {getCities, setCities} from "../../../features/citiesManages";
import {CityI} from "../../../types";
import "./blocks.scss"

interface FavoriteButtonProps {
    id?: number
    name?: string
}

export const ActionsButton: React.FC<FavoriteButtonProps> = ({id, name}) => {
    const cities = getCities()

    const [shareTooltipTitle, setShareTooltipTitle] = useState("Скопировать ссылку")

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
                setCities({id, name})
            }
        }
        setIsAddedToFavorite(!isAddedToFavorite)
    }

    const handleCopyUrl = useCallback(() => {
        navigator.clipboard.writeText(window.location.href).then(() => setShareTooltipTitle("Ссылка скопирована!"))
    }, [])

    return (
        <div className="actions-container">
            <Tooltip
                title={shareTooltipTitle}
                placement={"top"}
                onClick={handleCopyUrl}
            >
                <ShareIcon className="share"/>
            </Tooltip>
            <Tooltip
                title={isAddedToFavorite ? "Удалить из избранного" : "Добавить в избранное"}
                placement="top"
                onClick={handleChangeToFavorite}
            >
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
