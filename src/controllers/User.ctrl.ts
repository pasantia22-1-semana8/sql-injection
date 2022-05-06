class UserController{
    private _model:any;
    constructor(model:any){
        this._model = model;
    }

    public async createNewUser(user:any){
        return await this._model.create(user);
    }



}

export default UserController;