import express,{Application} from 'express';
import path from 'path';
import UserRoute from './routes/User.route';
import UserController from './controllers/User.ctrl';
import UserModel from './models/user.models';
import {pool} from './db/dbconnection';

import AuthRoute from './routes/Auth.routes';
import AuthController from './controllers/Authe.ctrl';
import AuthModel from './models/auth.models';


export class Server{
    private _app:Application;
    private _port:number;

    constructor(port:number){
        this._port = port;
        this._app = express();
        this.initMiddlewares();
        this.initRoute();
    }

    private initMiddlewares():void{
        this._app.use(express.json());
        this._app.use(express.urlencoded({extended:false}));
        this._app.use(express.static(path.join(__dirname,'public')));
    }
    private initRoute():void{
        const authRoute = new AuthRoute(new AuthController(new AuthModel(pool)))._router;
        const userRoute = new UserRoute(new UserController(new UserModel(pool)))._router;
        this._app.use('/api/user',userRoute);
        this._app.use('/api/auth',authRoute);
    }
    

    public start():void{
        this._app.listen(this._port,()=>{
            console.log('Server on port: '+this._port);
        });
    }
}

