import { FieldValidationResult } from 'lc-form-validation'
import { MemberErrors} from '../model';
const createEmptyMemberErrors = () :MemberErrors => ({
    login: new FieldValidationResult()
})
export const memberErrorsReducer = (state = createEmptyMemberErrors(),
 action) => {
    return state
}