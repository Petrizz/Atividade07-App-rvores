import { Foto } from './foto';

export class Arvore {
    private id: string;
    private identificacao: string;
    private observacao: string;
    private latitude: string;
    private longitude: string;
    private fotos: Foto[];

    // eslint-disable-next-line @typescript-eslint/naming-convention
    Arvore(){
        this.identificacao = null;
        this.observacao = null;
        this.latitude = null;
        this.longitude = null;
    }
}
