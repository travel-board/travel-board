import { api } from "../services/api"
import { Data } from "../interface/travelInterface"

export const travelApi = () => {
    
    const postTravel = (data: Data, setTravel:(value: Data[]) => void, travel: Data[]) => {
            api.post('travel', data)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }

    return{
        postTravel
    }
}