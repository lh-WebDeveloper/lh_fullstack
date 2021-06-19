import { MemberEntity } from '../model';
const createEmptyMember = (): MemberEntity => ({
    id: -1,
    login:'',
    avatar_url:''
})

export const memberReducer = (state = createEmptyMember(), action) => {
    switch (action.type) {
        
    }
    return state;   
}