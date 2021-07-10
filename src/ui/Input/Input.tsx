import React from 'react';
import "./Input.scss"

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {}

export const Input: React.FC<CustomInputProps> = (inputProps) => {
    return (
        <div>
            <input {...inputProps} className="form-control" />
        </div>
    );
};
