
type SquareProps = {
    value: number
    onClick: (i: number) => void
}

export const Square:React.VFC<SquareProps> = ({value, onClick}:SquareProps) => {
    const handleButton = () => {
        onClick(value)
    }
    return (<button className="square" onClick={() => handleButton()}>{value}</button>)
}
