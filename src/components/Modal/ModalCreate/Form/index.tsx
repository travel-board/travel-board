import { Input } from "../../../Input"
import { Button } from "../../../Button"
import { Form } from "./styles"

import { useForm } from 'react-hook-form'
import { useTravel } from "../../../../hooks/useTravel"

interface Edit {
    id?: string | number | undefined,
    edit?: Boolean,
    setOpenModal: (data: boolean) => void
}

export const FormModal = ({ id, edit, setOpenModal }: Edit) => {
    
    const { register, handleSubmit } = useForm({});
    const { addTravel, editTravel } = useTravel()

    const onSubmit = async (formData:any) => {
        if(!edit){
            await addTravel(formData, setOpenModal)
            formData = ""
        }else{
            await editTravel(id, formData, setOpenModal)
            formData = ""
        }
    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Nome" button={false} register={register('name')} />
            <Input type="text" placeholder="Cidade ou país" button={false} register={register('cityCountry')} />
            <Input type="text" placeholder="Link para imagem " button={false} register={register('img')} />
            <div className="select">
                <select {...register('category')} >
                    <option>Praia</option>
                    <option>Montanha</option>
                    <option>Gastronomia</option>
                    <option>Night Life</option>
                    <option>Cultura</option>
                    <option>Natureza</option>
                </select>
            </div>
            <Button classN="blue" types="submit">{edit ? "Fazer Alteração" : "Adicionar"}</Button>
        </Form>
    )
}