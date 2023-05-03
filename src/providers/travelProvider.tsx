import { createContext, useState } from 'react'
import { travelApi } from '../api/travelApi'

import { IData } from '../interfaces/travel'

interface IContextTravelData {
    addTravel: (data: IData) => void,
    editTravel: (data: IData) => void,
    travel: IData[]
}

export const ContextTravel = createContext({} as IContextTravelData)

interface TravelProviderDta {
    children: React.ReactNode
}

export const TravelProvider = ({ children }: TravelProviderDta) => {
    const [travel, setTravel] = useState<IData[]>([])


    const Api = travelApi()

    const addTravel = (data: IData) => {
        Api.postTravel(data, setTravel, travel)
    }
    const editTravel = (data: IData) => {
        Api.patchTravel(data, setTravel, travel)
    }

    return (
        <ContextTravel.Provider value={{ travel,  addTravel,  editTravel }} >
            {children}
        </ContextTravel.Provider>
    )
}