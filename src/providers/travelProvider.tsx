import { createContext, useEffect, useState } from 'react'
import { travelApi } from '../api/travelApi'

import { IData } from '../interfaces/travel'

interface IContextTravelData {
    addTravel: (data: IData, value: (data: boolean) => void) => void,
    editTravel: (data: IData, value: (data: boolean) => void) => void,
    getTravel: () => void,
    travel: IData[]
}

export const ContextTravel = createContext({} as IContextTravelData)

interface TravelProviderDta {
    children: React.ReactNode
}

export const TravelProvider = ({ children }: TravelProviderDta) => {
    const [travel, setTravel] = useState<IData[]>([])


    const Api = travelApi()

    const addTravel = (data: IData, setOpenModal: (data: boolean) => void) => {
        Api.postTravel(data, setTravel, travel, setOpenModal)
    }
    const editTravel = (data: IData, setOpenModal: (data: boolean) => void) => {
        Api.patchTravel(data, setTravel, travel, setOpenModal)
    }
    const getTravel = () => {
        Api.getTravel(setTravel, travel)
    }

    return (
        <ContextTravel.Provider value={{ travel,  addTravel,  editTravel, getTravel }} >
            {children}
        </ContextTravel.Provider>
    )
}