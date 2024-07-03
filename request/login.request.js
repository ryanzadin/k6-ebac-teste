import http from "k6/http"

export default class login {
   #token
 
   access(user, pass) {
     let response=http.post(`${Utils.getBaseUrl}/login`, JSON.stringify(
        {
            "username": user,
            "password": pass
        }
     ), {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
     })
     this.#token = response.json('accessToken')
     check(request, {
        "O status deve ser": (r) => r.status === 201
    });
   }
   getToken(){
    return this.#token
   }
}
