import React, {forwardRef} from 'react';
import "./Input.scss"

interface CustomInputProps extends React.HTMLProps<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, CustomInputProps>((inputProps, ref) => (
    <div>
        <input ref={ref} {...inputProps} className="form-control"/>
    </div>
))
