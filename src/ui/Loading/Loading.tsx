import React from 'react';
import "./Loading.scss"

export const Loading = () => (
    <div className="loading-container">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
)
