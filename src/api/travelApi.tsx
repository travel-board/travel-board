import { api } from "../services/api"
import { IData } from "../interfaces/travel"
import { useUser } from "../hooks/useUser"

export const travelApi = () => {

    /* const { token, user } = useUser() */
    const token = localStorage.getItem('@TOKEN')
    const user = localStorage.getItem('@USER')

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    const postTravel = (data: IData, setTravel:(value: IData[]) => void, travel: IData[]) => {

            const formData = {
                name: data.name,
                category: data.category,
                img: data.img,
                cityCountry: data.cityCountry,
                userId: 1,
            }
            api.post('travels', formData)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }
    const patchTravel = (data: IData, setTravel:(value: IData[]) => void, travel: IData[]) => {
            api.patch('travels', data)
            .then(res => setTravel([...travel, res.data]))
            .catch(err => console.error(err))
    }

    return{
        postTravel,
        patchTravel
    }
}