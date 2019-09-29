import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunity }   from 'src/app/models/Comunity/Comunity.component'

@Injectable({
  providedIn: 'root'
})
export class CreatComunityService {

constructor(private http: HttpClient) { }

saveComunity(comunity){
  return this.http.post('http://localhost:8080/creatComunity', comunity).pipe();
}

}
