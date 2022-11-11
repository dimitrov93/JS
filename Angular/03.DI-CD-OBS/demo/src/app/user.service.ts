import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"



@Injectable()
export class UserService {
    constructor(private http: HttpClient) {

    };

    getUsers() {
        // return fetch('https://jsonplaceholder.typicode.com/users')
        //         .then(res => res.json())
        return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
    }
}