import { api } from "../services/api"
import { IData } from "../interfaces/travel"
import { toast } from "react-toastify"
import { useTravel } from "../hooks/useTravel"

export const travelApi = () => {
    const { setTravel } = useTravel();
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
        id: string | number | undefined,
        data: IData, 
        setTravel:(value: IData[]) => void, 
        travel: IData[], 
        setOpenModal: (value: boolean) => void) => {
            var formData:any = new Object();
            for (const [key, value] of Object.entries(data)) {
                if(value !== ''){
                    formData[key] = value;
                }
            } 
            api.patch(`travels/${id}`, formData)
            .then(res => {
                toast.success('Destino editado com sucesso')
                setTimeout(() => {
                    setOpenModal(false)
                    setTravel([...travel, res.data])
                },3000)                
            })
            .catch(err => toast.error(err?.response?.data))
    }
    
    const deleteTravel = (
        id: string | number | undefined, 
        setOpenModalDelete: (data:boolean) => void,
        travel: IData[]) => {
        api.delete(`travels/${id}`)
        .then(() => {             
            toast.success('Destino editado com sucesso')
            setTimeout(() => {
                setOpenModalDelete(false)
                setTravel(travel.filter(travel => travel.id !== id))
            },3000)  
        })
        .catch(err => toast.error(err?.response?.data))
    }


    return{
        getTravel,
        postTravel,
        patchTravel,
        deleteTravel
    }
}