import { useContext } from "react";
import { UserContext } from "../providers/userProvider";

export const useUser = () => useContext(UserContext);
