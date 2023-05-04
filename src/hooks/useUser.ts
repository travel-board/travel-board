import { useContext } from "react";
import { UserContext } from "../providers/_UserProvider";

export const useUser = () => useContext(UserContext);
