import { Foto } from './foto';
import { Usuario } from './usuario';

export class Arvore {

     id: string;
     identificacao: string;
     observacao: string;
     latitude: string;
     longitude: string;
     usuario: Usuario;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    Arvore(){
        this.identificacao = null;
        this.observacao = null;
        this.latitude = null;
        this.longitude = null;
    }
}
