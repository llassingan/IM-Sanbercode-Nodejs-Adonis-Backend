import Kelas from "./kelas"

class Bootcamp{
    constructor(name){
        this._name = name,
        this._classes = []
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get classes(){
        return this._classes
    }
    createClass(namakelas,level,instruktur){
        let newClass = new Kelas(namakelas,level,instruktur)
        this._classes.push(newClass)
    }
    register(namakelas,namasiswa){
        let carikelas = this._classes.find((kelas) => kelas.nama === namakelas) //car kelas yang sama dengan kelas yang di dapat berdasarkan ganjil genap
        carikelas.addStudent(namasiswa)
        
    }
}

export default Bootcamp;