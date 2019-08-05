import { SEARCH_REDVNVOLOPE_SELECTEDHOTKEYWORDS } from '@/redux/actions';

/*action函数*/
export const createList = (value) =>{
    return{
        type: SEARCH_REDVNVOLOPE_SELECTEDHOTKEYWORDS,
        payload : value
    }
}

/*reducer*/
const reducer = (state = {} ,action) => {
    switch (action.type){
        case SEARCH_REDVNVOLOPE_SELECTEDHOTKEYWORDS:{
            return {
                ...action.payload
            }
        };
        default:{
            return state
        }
    }
}

export default reducer;