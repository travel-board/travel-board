import { Input } from "../../../Input"
import { Button } from "../../../Button"
import { Form } from "./styles"

import { useForm } from 'react-hook-form'

export const FormModal = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({});
    
    const onSubmit = (formData:any) => {
        console.log(formData)
    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Nome" button={false} register={register('name')} />
            <Input type="text" placeholder="Cidade ou país" button={false} register={register('cityCountry')} />
            <Input type="text" placeholder="Link para imagem " button={false} register={register('img')} />
            <select {...register('category')}>
                <option selected={true} disabled>Selecione uma categoria</option>
                <option>oi</option>
                <option>oi</option>
            </select>
            <Button classN="grey">oi</Button>
        </Form>
    )
}