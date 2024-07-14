import { check } from "k6";
import http from "k6/http"
import Utils from "../utils/utils";

export default class Customer {
    list(token) {
        let request = http.get(`${Utils.getBaseUrl()}/customers`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        check(request, {
            "Status deve retornaar 200": (r) => r.status === 200
        });
    }
}