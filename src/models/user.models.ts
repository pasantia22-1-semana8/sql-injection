class UserModel{
    private _pool:any;
    constructor(pool:any){
        this._pool = pool;
    }

    public async create(user:any){
        console.log(user);
        const query = `INSERT INTO users(name,email,password) VALUES('${user.name}','${user.email}','${user.password}') RETURNING *`;
        const client = await this._pool.query(query);
        return client.rows[0];
    }

}

export default UserModel;