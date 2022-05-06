class AuthController {
    private _model: any;
    constructor(model: any) {
        this._model = model;
    }

    public async authUser(user: any) {
        return this._model.authenticate(user);
    }
}

export default AuthController;