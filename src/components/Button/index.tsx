import { ReactNode } from "react"
import { ButtonBlock } from "./styles"

interface IStyle {
    classN: string,
    types?: "button" | "submit" | "reset" | undefined,
    children: ReactNode,
    click?: () => void,
}

export const Button = ({ classN, types, children, click }:IStyle) => (
    <ButtonBlock className="addBtn">
        <button type={types} onClick={click} className={classN}>{children}</button>
    </ButtonBlock>
)