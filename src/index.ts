import {Server} from './Server';

function main():void{
    const server = new Server(4000);
    server.start();
}

main();