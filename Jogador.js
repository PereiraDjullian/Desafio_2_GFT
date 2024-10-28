class Jogador{
    constructor(vitorias,derrotas){
        this.vitorias = vitorias;
        this.derrotas = derrotas;
    }
    calcularSaldo(){
        return this.vitorias-this.derrotas;
    }
    classificarNivel(){
        const niveis = [

            {limite : 10,nivel :"Ferro"},
            {limite : 20,nivel :"Bronze"},
            {limite : 50,nivel :"Prata"},
            {limite : 80,nivel :"Ouro"},
            {limite : 90,nivel :"Diamante"},
            {limite : 100,nivel :"Lendario"},
            {limite : Infinity,nivel :"Imortal"},

        ]

        for(let i = 0 ; i < niveis.length ; i++){
            if(this.vitorias <= niveis[i].limite) {
                return niveis[i].nivel;
            }
        }
    }
    
    exibirResultados(){
        const saldo  =  this.calcularSaldo();
        const nivel  =  this.classificarNivel();
        console.log(`O Herói tem um saldo de ${saldo} e está no nível ${nivel}`);
    }
}

const jogador1 = new Jogador(12,2);
const jogador2 = new Jogador(103,2);
jogador1.exibirResultados();
jogador2.exibirResultados();