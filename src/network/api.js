import { request } from './request';


export async function  getHomeData({limit,skip}) {
    const query = new AV.Query('Post');
    const posts = await request(query,limit,skip);
    let arrayDatas = []
    let post;
   
    return arrayDatas;
  }