import { BlockInput, Inputs } from "./styles"

interface IInput {
    type: string,
    placeholder: string,
    button: boolean,
    error?: string;
    register?: any,
    children?: React.ReactNode,
    click?: () => void
}

export const Input = ({ type, placeholder, button, error,  register, children, click}:IInput) => {
    return(
        <BlockInput>
            <Inputs>
                <input {...register} type={type} placeholder={placeholder}/>
                {
                    button ? <button onClick={click} >{children}</button> : null
                }
            </Inputs>
            {
                error ? <span>{error}</span> : null
            }
        </BlockInput>
    )
}