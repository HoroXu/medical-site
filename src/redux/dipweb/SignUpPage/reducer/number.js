import { NUMBER } from '../actions';

const initState = {
    number:''
}

export default function reducer(state = initState,action){
    switch(action.type){
        case NUMBER:{
            return{
                number:action.payload
            }
        }
        default:{
            return state
        }
    }
}