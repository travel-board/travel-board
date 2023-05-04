import { useContext } from "react";
import { ContextTravel } from "../providers/TravelProvider";

export const useTravel = () => useContext(ContextTravel);
