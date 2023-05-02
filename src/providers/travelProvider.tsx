import { createContext, useState } from 'react'
import { travelApi } from '../api/travelApi'

import { Data } from '../interface/travelInterface'

interface ContextTravelData { 
    addTravel: (data: Data) => void,
    travel: Data[]
}

export const ContextTravel = createContext<ContextTravelData>({
    addTravel: () => {},
    travel: []
})

interface TravelProviderDta {
    children: React.ReactNode
}

export const TravelProvider = ({ children }: TravelProviderDta) => {
    const [travel, setTravel] = useState<Data[]>([])


    const Api = travelApi()

    const addTravel = (data: Data) => {
        Api.postTravel(data, setTravel, travel)
    }

    return (
        <ContextTravel.Provider value={{ addTravel, travel }} >
            {children}
        </ContextTravel.Provider>
    )
}