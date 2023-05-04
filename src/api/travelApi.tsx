import { api } from "../services/api"
import { IData } from "../interfaces/travel"
import { toast } from "react-toastify"
import { useTravel } from "../hooks/useTravel"

export const travelApi = () => {
    const { travel, setTravel } = useTravel();
    const token = localStorage.getItem('@TOKEN')
    const user = localStorage.getItem('@USERID')

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    
    const getTravel = (setTravel:(data: IData[]) => void) => {
        api.get('travels')
        .then(res => {
            setTravel(res.data)
        })
        .catch(err => toast.error(err?.response?.data))
    }

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
    
    const deleteTravel = (id: number) => {
        api.delete(`travels/${id}`)
        .then(res => {
            console.log(res)
            setTravel(travel.filter(travel => travel.id !== id))
        })
        .catch(err => console.error(err))
    }


    return{
        getTravel,
        postTravel,
        patchTravel,
        deleteTravel
    }
}