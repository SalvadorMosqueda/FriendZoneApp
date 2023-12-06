import { useContext } from "react";
import { AuthContext } from "../contexts";

export const userAuth = () => useContext(AuthContext);

