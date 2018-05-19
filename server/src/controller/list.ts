import {ListModel} from "../models/list";

export class ListController{
  async createList(name: string){
    let retVal = await ListModel.create({name, items: []})
    return retVal
  }

  async getLists(){
    return await ListModel.find({})
  }

  async getList(list: any){
    return await ListModel.find(list)
  }

  async setList(list: any){
    let ret = await ListModel.update({_id: list._id}, list)
    return list
  }

}

