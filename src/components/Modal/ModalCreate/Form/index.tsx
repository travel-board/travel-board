import { Input } from "../../../Input"
import { Button } from "../../../Button"
import { Form } from "./styles"

export const FormModal = () => {
    
    
    return(
        <Form>
            <Input type="text" placeholder="Nome" button={false} />
            <Input type="text" placeholder="Cidade ou país" button={false} />
            <Input type="text" placeholder="Link para imagem " button={false} />
            <Input type="text" placeholder="Selecione uma categoria" button={false} />
            <Button classN="grey">oi</Button>
        </Form>
    )
}