class AuthModel{
    private _pool:any;
    constructor(pool:any){
        this._pool = pool;
    }

    public async authenticate(user:any){
        const query = `SELECT * FROM users WHERE email='${user.email}' AND password='${user.password}'`;
        const result = await this._pool.query(query);
        return result;
    }

}

export default AuthModel;

/*
solucion 1
// solucion 1
        const query2 = `SELECT * FROM users WHERE email = $1 AND password = $2`;
        const values = [user.email,user.password];
        const result = await this._pool.query(query2,values);

solucion 2
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regex.test(user.email)){
            const query = `SELECT * FROM users WHERE email='${user.email}' AND password='${user.password}'`;
            const result = await this._pool.query(query);
            return result;
        }else{
            return {rows: 'Email is not valid'};
        }
*/