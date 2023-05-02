import { useContext } from 'react'
import { ContextTravel } from '../providers/travelProvider'

export const useTravel = () => useContext(ContextTravel)