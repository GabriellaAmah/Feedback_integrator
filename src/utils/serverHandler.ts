class ServerHandler {
   static onError(error: { syscall: string; code: any; }){
        if(error.syscall != 'listening'){
            throw error
        }

        switch(error.code){
           case 'EACCES' :
            console.log("permission denied from the server");
            process.exit(1);
            break
        case "EADDRINUSE":
            console.log(`port already in use please switch`);
            process.exit(1);
            break
        case "ECONNREFUSED":
            console.log("connection refused");
            process.exit(1);
        }
    }

   static onListen(){
      return  console.log(`server has started on ${process.env.PORT}`)
    }
}

export default ServerHandler