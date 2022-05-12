export default class Cliente{
    #id: String
    #nome: String
    #idade: Number

    constructor(
        nome: String,
        idade: Number,
        id: String = null
    ){
        this.#nome = nome
        this.#id = id
        this.#idade = idade
    }

    static vazio(){
        return new Cliente('', 0)
    }

    get id(){
        return this.#id
    }

    get idade(){
        return this.#idade
    }

    get nome(){
        return this.#nome
    }

}