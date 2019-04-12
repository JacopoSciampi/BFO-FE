import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { URL_serverStatus } from "../../core/url";

@Injectable()
export class HttpService {
    constructor(
        private http: Http
    ) { }

    public getServerStatus(){
        return this.http.get(URL_serverStatus);
    }
}