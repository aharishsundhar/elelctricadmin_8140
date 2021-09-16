import * as mongoose from 'mongoose';
import curdModel from '../models/curd';
import { CustomLogger } from '../config/Logger'


export class curdDao {
    private curd = curdModel;
    constructor() { }
    
    public async GpDelete(curdId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into curdDao.ts: GpDelete');

    

    
    
    
    this.curd.findByIdAndRemove(curdId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from curdDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into curdDao.ts: GpGetAllValues');

    

    
    
    
    this.curd.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from curdDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(curdData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into curdDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(curdData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.curd.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from curdDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(curdData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into curdDao.ts: GpSearchForUpdate');

    

    
    
    
    this.curd.findOneAndUpdate({ _id: curdData._id }, curdData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from curdDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(curdData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into curdDao.ts: GpUpdate');

    

    
    
    
    this.curd.findOneAndUpdate({ _id: curdData._id }, curdData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from curdDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(curdData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into curdDao.ts: GpCreate');

    let temp = new curdModel(curdData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from curdDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}