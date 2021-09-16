import { Request, Response, NextFunction } from "express";
import { curdController } from '../controller/curdController';


export class Routes {
    private curd: curdController = new curdController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/curd/:id').delete(this.curd.GpDelete);
app.route('/curd').get(this.curd.GpGetAllValues);
app.route('/curd/get/search').get(this.curd.GpSearch);
app.route('/curd/get/update').put(this.curd.GpSearchForUpdate);
app.route('/curd').put(this.curd.GpUpdate);
app.route('/curd').post(this.curd.GpCreate);
     }

}