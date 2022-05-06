import express from 'express';

class AuthRoute{
    public _router: any;
    private  _ctrl: any;
    constructor(controller: any){
        this._router = express.Router();
        this._ctrl = controller;
        this.registerRoute();
    }

    private registerRoute(){
        this._router.post('/',this.handleAuth.bind(this));
    }

    private async handleAuth(req: express.Request, res: express.Response) {
        let result = await this._ctrl.authUser(req.body)
        res.json(result.rows[0]);
    }
}

export default AuthRoute;