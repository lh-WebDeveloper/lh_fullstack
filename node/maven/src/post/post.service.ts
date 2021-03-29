import {PostModel} from './post.model';
import {connection} from '../app/database/mysql';
/**
 * 新增文章
 */
export const createPost=async(post:PostModel)=>{
    const statement=`
    INSERT INTO post 
    SET ?
    `;
    //每次用户来访问的时候,不应该都走数据库
    //保存操作 
    //list select redis 
    console.log(post, '????????')
    const [data]=await connection.promise().query(statement, post);
    return data
}