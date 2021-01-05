type IUserInfoFunc =(user)=>string
interface IUser {
    name:string;
    age:number
}
const getUserInfoWithType:IUserInfoFunc =(user) =>{
    return  `name:${user.name},age:${user.age}`;
}

getUserInfoWithType({name:"koala",aeg:18})