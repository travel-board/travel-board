import { useContext } from "react";
import { ContextTravel } from "../providers/_TravelProvider";

export const useTravel = () => useContext(ContextTravel);
