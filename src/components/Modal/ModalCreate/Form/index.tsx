import { Input } from "../../../Input"
import { Button } from "../../../Button"
import { Form } from "./styles"

import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, travelBoardType } from "./Schema"

export const FormModal = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm<travelBoardType>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (formData:any) => {
        console.log(formData)
    }
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder="Nome" button={false} register={register('name')} error={errors.name?.message} message={errors.name?.message}/>
            <Input type="text" placeholder="Cidade ou país" button={false} register={register('cityCountry')} error={errors.cityCountry?.message} message={errors.cityCountry?.message}  />
            <Input type="text" placeholder="Link para imagem " button={false} register={register('img')} error={errors.img?.message} message={errors.img?.message} />
            <select {...register('category')}>
                <option defaultValue="" value="" >Selecione uma categoria</option>
                <option value="beach">Praia</option>
                <option value="mountain">Montanhas</option>
                <option value="gastronomy">Gastronomia</option>
                <option value="night-life">Vida noturna</option>
                <option value="culture">Cultura</option>
                <option value="nature">Natureza</option>
            </select>
            {errors.category ? <p className="selectError">{errors.category.message}</p> : null}
            <Button classN="blue">Adicionar</Button>
        </Form>
    )
}
