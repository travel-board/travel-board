import { ButtonBlock } from "./styles"

interface IStyle {
    classN: string,
    types?: "button" | "submit" | "reset" | undefined,
    click?: () => void,
    children: string
}

export const Button = ({ classN, types, click, children }:IStyle) => {
    return(
        <ButtonBlock>
            <button type={types} onClick={click} className={classN}>{children}</button>
        </ButtonBlock>
    )
}
