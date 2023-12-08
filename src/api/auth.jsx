import { ENV } from "../utils";
import axios from "axios";

export class Auth {
    async register(dto) {
        return await axios.post(`${ENV.API_URL}/auth/register`, dto, {
            headers: { 'Content-Type': 'application/json' }
        })
    }
    async login(dto){
        return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`, dto, {
            headers: {"Content-Type":'apllication/json'}
        }
    )}
}