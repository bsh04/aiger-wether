import React from 'react';
import "./ErrorAlert.scss"

export const ErrorAlert = () => (
    <div className="error-container">
        <span>Упс... Произошла ошибка, попробуйте ещё раз или <div className="reload" onClick={() => window.location.reload()}>перезагрузите страницу</div></span>
    </div>
)
