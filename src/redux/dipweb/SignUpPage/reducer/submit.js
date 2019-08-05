import { SUBMIT_SUCCESS } from '../actions';

const initStae = {
    submitSuccess:false
}

export default function reducer(state = initStae,action){
    switch(action.type){
        case SUBMIT_SUCCESS:{
            return {
                submitSuccess:true
            }
        }
        default:{
            return state
        }
    }
}