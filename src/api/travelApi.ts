import { api } from "../services/api"
import { Data } from "../interface/travelInterface"

export const travelApi = () => {

    const token = localStorage.getItem('Token')

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    const postTravel = (data: Data, setTravel:(value: Data[]) => void, travel: Data[]) => {
            const formData = {
                name: data.name,
                category: data.category,
                img: data.img,
                cityCountry: data.cityCountry,
                id: 1,
            }
            api.post('travels', formData)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }
    const patchTravel = (data: Data, setTravel:(value: Data[]) => void, travel: Data[]) => {
            api.patch('travels', data)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }

    return{
        postTravel,
        patchTravel
    }
}