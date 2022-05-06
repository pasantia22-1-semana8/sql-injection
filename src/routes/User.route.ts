import express,{IRoute} from 'express';

class UserRoute{
    public _router:any;
    private _ctrl:any;
    constructor(controller:any){
        this._router = express.Router();
        this._ctrl = controller;
        this.registerRoutes();
    }

    private registerRoutes(){
        this._router.post('/',this.createNewUser.bind(this));
    }

    private async createNewUser(req:express.Request,res:express.Response){
        const user = await this._ctrl.createNewUser(req.body);
        res.json(user);
    }
}

export default UserRoute;