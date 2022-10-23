import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  getUsuario(email: string, senha: string){
    const url = 'https://api-atividade07.odiloncorrea.tech/api/usuario/'+ email +'/'+ senha +'/authenticate';
    return this.httpClient.get(url).toPromise();
  }

  getUsuarioId(id: string){
    const url = 'https://api-atividade07.odiloncorrea.tech/api/usuario/'+ id;
    return this.httpClient.get(url).toPromise();
  }
}
