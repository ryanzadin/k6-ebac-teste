import { check } from "k6";
import http from "k6/http"
import Utils from "../utils/utils"

export default class Produto {
    list(token) {
        let request = http.get(`${Utils.getBaseUrl()}/products`, JSON.stringify(
            {
                "description": "string",
                "itemPrice": 0,
                "name": "string"
            }
        ), {
            headers: {
                Authorization: `Bearer ${token}`
            },
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        check(request, { 'listagem deve retornar 200': (res) => res.status === 200 })
    }
}
