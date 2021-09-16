import { Request, Response } from 'express';
import { curdService } from '../service/curdService';
import { CustomLogger } from '../config/Logger'
let curd = new curdService();

export class curdController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
curd.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into curdController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from curdController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
curd.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into curdController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from curdController.ts: GpGetAllValues');
    })}
public GpSearch(req: Request, res: Response) {
curd.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into curdController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from curdController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
curd.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into curdController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from curdController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
curd.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into curdController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from curdController.ts: GpUpdate');
    })}
public GpCreate(req: Request, res: Response) {
curd.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into curdController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from curdController.ts: GpCreate');
    })}


}