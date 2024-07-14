import { check } from "k6";
import http from "k6/http"
import Utils from "../utils/utils"

export default class Produto {
    list(token) {
        //let body = { "description": "string", "itemPrice": 0, "name": "string" };
        //  let params = {
        //     headers: { "Content-Type": "application/json", "Accept": "application/json" },

        // };
        let request = http.get(`${Utils.getBaseUrl()}/products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        check(request, { 'listagem deve retornar 200': (res) => res.status == 200 })
    }
}
