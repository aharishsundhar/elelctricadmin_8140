import { Request, Response } from 'express';
import {curdDao} from '../dao/curdDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let curd = new curdDao();

export class curdService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into curdService.ts: GpDelete')
     let  curdId = req.params.id;
     curd.GpDelete(curdId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from curdService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into curdService.ts: GpGetAllValues')
     
     curd.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from curdService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into curdService.ts: GpSearch')
     let  curdData = req.query;
     curd.GpSearch(curdData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from curdService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into curdService.ts: GpSearchForUpdate')
     let  curdData = req.body;
     curd.GpSearchForUpdate(curdData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from curdService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into curdService.ts: GpUpdate')
     let  curdData = req.body;
     curd.GpUpdate(curdData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from curdService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into curdService.ts: GpCreate')
     let  curdData = req.body;
     curd.GpCreate(curdData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from curdService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}