class Karyawan{
    constructor(nama,password,role){
        this._nama = nama;
        this._password = password;
        this._role = role;
        if (role.toLowerCase() == "trainer"){
            this._student = [];
        }
        this._islogin = false;
    }
    get nama(){
        return this._nama
    }
    set nama(newnama){
        this._nama = newnama
    }

    get role(){
        return this._role
    }
    set role(newrole){
        this._role = newrole
    }

    get password(){
        return this._password
    }
    set password(newpassword){
        this._password = newpassword
    }
    get islogin(){
        return this._islogin
    }
    set islogin(newlogin){
        this._islogin = newlogin
    }

    get student(){
        return this._student
    }
    set student(student){
        this._student = student
    }
}

export default Karyawan;