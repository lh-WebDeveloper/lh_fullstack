import {Request,Response} from 'express';//@types/express
import {createPost} from './post.service';
export const store =async(
    request:Request,
    respone:Response
)=>{
    console.log(request.body,'//////////////');
    const {title,content}=request.body
    //存 -> 数据存储服务service
    const data= await createPost({title,content})
    respone.status(201).send('保存成功')
}