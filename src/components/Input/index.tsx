import { BlockInput, Inputs } from "./styles"

interface IInput {
    type: string,
    placeholder: string,
    button: boolean,
    error?: boolean;
    message?: string,
    register?: any,
    children?: React.ReactNode,
    click?: () => {}
}

export const Input = ({ type, placeholder, button, error, message, register, children, click}:IInput) => {
    return(
        <BlockInput>
            <Inputs>
                <input type={type} placeholder={placeholder} {...register} />
                {
                    button ? <button onClick={click}>{children}</button> : null
                }
            </Inputs>
            {
                error ? <span>{message}</span> : null
            }
        </BlockInput>
    )
}