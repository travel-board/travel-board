import { api } from "../services/api"
import { IData } from "../interfaces/travel"
import { toast } from "react-toastify"

export const travelApi = () => {

    const token = localStorage.getItem('@TOKEN')
    const user = localStorage.getItem('@USERID')

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    const postTravel = (
        data: IData, 
        setTravel:(value: IData[]) => void, 
        travel: IData[], 
        setOpenModal: (value: boolean) => void) => {
            const formData = {
                name: data.name,
                category: data.category,
                img: data.img,
                cityCountry: data.cityCountry,
                userId: user,
            }
            api.post('travels', formData)
            .then(res => {
                toast.success('Destino criado com sucesso')
                setTimeout(() => {
                    setOpenModal(false)
                    setTravel([...travel, res.data])
                },3000)                
            })
            .catch(err =>  toast.error(err?.response?.data))
    }

    const patchTravel = (
        data: IData, 
        setTravel:(value: IData[]) => void, 
        travel: IData[], 
        setOpenModal: (value: boolean) => void) => {
            const formData = {
                name: data.name,
                category: data.category,
                img: data.img,
                cityCountry: data.cityCountry,
                userId: user,
            }
            api.patch('travels', formData)
            .then(res => {
                toast.success('Destino criado com sucesso')
                setTimeout(() => {
                    setOpenModal(false)
                    setTravel([...travel, res.data])
                },3000)                
            })
            .catch(err => console.error(err))
    }

    return{
        postTravel,
        patchTravel
    }
}