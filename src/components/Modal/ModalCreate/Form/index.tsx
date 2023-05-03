import { Input } from "../../../Input"
import { Button } from "../../../Button"
import { Form } from "./styles"

import { useForm } from 'react-hook-form'
import { useTravel } from "../../../../hooks/useTravel"

interface Edit {
    edit?: Boolean,
    setOpenModal: (data: boolean) => void
}

export const FormModal = ({ edit, setOpenModal }: Edit) => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({});
    const { addTravel, editTravel } = useTravel()

    const onSubmit = async (formData:any) => {
        if(!edit){
            await addTravel(formData, setOpenModal)
        }else{
            await editTravel(formData, setOpenModal)
        }
    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Nome" button={false} register={register('name')} />
            <Input type="text" placeholder="Cidade ou país" button={false} register={register('cityCountry')} />
            <Input type="text" placeholder="Link para imagem " button={false} register={register('img')} />
            <div className="select">
                <select {...register('category')}>
                    <option selected={true} disabled>Selecione uma categoria</option>
                    <option>Praia</option>
                    <option>Montanha</option>
                    <option>Gastronomia</option>
                    <option>Night Life</option>
                    <option>Cultura</option>
                    <option>Natureza</option>
                </select>
            </div>
            <Button classN="blue" types="submit">Adicionar</Button>
        </Form>
    )
}