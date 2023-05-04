import { createContext, useEffect, useState } from 'react'
import { travelApi } from '../api/travelApi'

import { IData } from '../interfaces/travel'

interface IContextTravelData {
    getTravel: () => void,
    addTravel: (data: IData, value: (data: boolean) => void) => void,
    editTravel: (data: IData, value: (data: boolean) => void) => void,
    deleteTravel: (id:number) => void,
    travel: IData[],
    setTravel: (data: IData[]) => void;
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
        Api.getTravel(setTravel)
    }
    
    const deleteTravel = ( id: number ) => {
        Api.deleteTravel(id);
    }

    return (
        <ContextTravel.Provider value={{ travel, setTravel, getTravel, addTravel,  editTravel, deleteTravel }} >
            {children}
        </ContextTravel.Provider>
    )
}