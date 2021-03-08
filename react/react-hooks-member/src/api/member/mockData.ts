// api 前后端交流的接口 react 必备的架构
// 请求管理 axios 
// application interface
// restful graphql
// frontend react component cd -> fetch +api<-> backed koa + mongodb
// api/member member 相关的请求放在这个目录下 细分了模块
import { MemberEntity } from '../../model';
export const members:MemberEntity[]=[{
        id: 1457912,
        login: "brauliodiez",
        avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3"
      },
      {
        id: 4374977,
        login: "Nasdan",
        avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3"
      }
  ]
