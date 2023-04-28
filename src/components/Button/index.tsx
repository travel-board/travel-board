import { ButtonBlock } from "./styles"

interface IStyle {
    classN: string,
    types?: "button" | "submit" | "reset" | undefined,
    click?: () => void
}

export const Button = ({ classN, types, click }:IStyle) => {
    return(
        <ButtonBlock>
            <button type={types} onClick={click} className={classN}>oi</button>
        </ButtonBlock>
    )
}