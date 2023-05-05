import { createContext, useState } from 'react'
import { travelApi } from '../api/travelApi'

import { IData } from '../interfaces/travel'

interface IContextTravelData {
    getTravel: () => void,
    addTravel: (data: IData, value: (data: boolean) => void) => void,
    editTravel: (id:string | number | undefined, data: IData, value: (data: boolean) => void) => void,
    deleteTravel: (id:string | number | undefined, setOpenModalDelete: (data:boolean) => void) => void,
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
    const editTravel = (id: string | number | undefined, data: IData, setOpenModal: (data: boolean) => void) => {
        Api.patchTravel(id, data, setTravel, travel, setOpenModal)
    }
    const getTravel = () => {
        Api.getTravel(setTravel)
    }
    
    const deleteTravel = ( id: string | number | undefined, setOpenModalDelete: (data: boolean) => void ) => {
        Api.deleteTravel(id, setOpenModalDelete, travel);
    }

    return (
        <ContextTravel.Provider value={{ travel, setTravel, getTravel, addTravel,  editTravel, deleteTravel }} >
            {children}
        </ContextTravel.Provider>
    )
}