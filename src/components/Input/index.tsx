import { BlockInput, Inputs } from "./styles"

interface IInput {
    type: string,
    placeholder: string,
    button: boolean,
    error?: string;
    message?: string,
    register?: any,
    children?: React.ReactNode,
    click?: () => {}
}

export const Input = ({ type,children, placeholder, button, error, message,register}:IInput) => {
    return(
        <BlockInput>
            <Inputs>
                <input type={type} placeholder={placeholder} {...register} />
                {
                    button ? <button>{children}</button> : null
                }
            </Inputs>
            {
                error ? <span>{message}</span> : null
            }
        </BlockInput>
    )
}