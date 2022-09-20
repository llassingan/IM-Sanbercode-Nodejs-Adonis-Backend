class Kelas{
    constructor(nama,level,instruktur){
        this._nama = nama
        this._level = level
        this._students= []
        this._instruktur = instruktur
    }
    get nama(){
        return this._nama
    }
    get level(){
        return this._level
    }
    get instruktur(){
        return this._instruktur
    }
    set nama(nama){
        this._nama = nama
    }
    set level(level){
        this._level = level
    }set instruktur(instruktur){
        this._instruktur = instruktur
    }
    get student(){
        return this._students
    }

    addStudent(nama){
        this._students.push(nama)   
    }
}

export default Kelas;