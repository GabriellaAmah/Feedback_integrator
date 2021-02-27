import { Application } from "express";
import { Server } from "http";
import App from "./app";

export default class appServer {
  private app: Application;

  public static bootstrap(): appServer {
    return new appServer();
  }

  constructor() {
    this.app = App;
  }

  public run(port: string | undefined, callback?: () => void): Server {
    if (callback) return this.app.listen(port, callback);

    return this.app.listen(port);
  }

}
