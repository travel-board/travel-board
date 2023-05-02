import { api } from "../services/api"
import { Data } from "../interface/travelInterface"

export const travelApi = () => {

    const token = localStorage.getItem('Token')

    api.defaults.headers.common.Authorization = `Bearer ${token}`
    
    const postTravel = (data: Data, setTravel:(value: Data[]) => void, travel: Data[]) => {
            api.post('travel', data)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }
    const editTravel = (data: Data, setTravel:(value: Data[]) => void, travel: Data[]) => {
            api.patch('travel', data)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }

    return{
        postTravel,
        editTravel
    }
}