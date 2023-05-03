import { ButtonBlock } from "./styles"

interface IStyle {
    classN: string,
    types?: "button" | "submit" | "reset" | undefined,
    text: string,
    click?: () => void
}

export const Button = ({ classN, types, text, click }:IStyle) => (
    <ButtonBlock>
        <button type={types} onClick={click} className={classN}>{text}</button>
    </ButtonBlock>
)