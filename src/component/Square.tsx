import React, { useState } from 'react';

type SquareProps = {
    value: number
}

export const Square:React.FC<SquareProps> = ({value}:SquareProps) => {
    const [values, setValues] = useState<number | string>(value)
    const handleButton = () => {
        // alert('click')
        setValues('X')
    }
    return (<button className="square" onClick={handleButton}>{values}</button>)
}
