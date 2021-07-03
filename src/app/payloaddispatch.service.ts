import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayloaddispatchService {

  constructor(private http: HttpClient) { }

  public baseURL = "http://localhost:3000/"

  public getPayload(){
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    return this.http.get<any>(this.baseURL + "get-payload")
  }
}
