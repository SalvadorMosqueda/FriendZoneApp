import { ENV } from "../utils";
import axios from "axios";

export class Auth {
    async register(dto) {
        console.log(dto)
        return
        return await axios.post(`${ENV.API_URL}/auth/register`, dto, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
}