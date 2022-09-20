class Student {
    constructor(namasiswa){
        this._namasiswa = namasiswa
    }
    get name(){
        return this._namasiswa
    }
    set name(nama){
        this._namasiswa=nama
    }
}

export default Student;