import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Arvore } from '../models/arvore';

@Injectable({
  providedIn: 'root'
})
export class ArvoreService {

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getArvoresUsuarioId(id: string){
      const url = 'https://api-atividade07.odiloncorrea.tech/api/arvore/'+ id +'/usuario';
      return this.httpClient.get(url).toPromise();
    }

    getArvoresId(id: string){
        const url = 'https://api-atividade07.odiloncorrea.tech/api/arvore/'+ id;
        return this.httpClient.get(url).toPromise();
      }

    

   async salvar(arvore: Arvore){
      const url = 'https://api-atividade07.odiloncorrea.tech/api/arvore';
      if(arvore.id == null){ //significa que é um novo cadastro
        try{
        return await this.httpClient.post(url, JSON.stringify(arvore)).toPromise();
      }catch(erro){
        return erro;
      }
      }else{ // significa que é uma atualização
        debugger
        try{//Vinicyus esse httpOptions ele ta dando erro, quando eu tiro cadastro e atualiza normal, 
          //no guia 5 tem ele mas n sei o q faz e como ta funcionando vou deixa sem
        //return await this.httpClient.put(url, JSON.stringify(arvore), this.httpOptions).toPromise();
        return await this.httpClient.put(url, JSON.stringify(arvore)).toPromise();
        }catch(erro){
          return erro;
        }
      }
    }
}
