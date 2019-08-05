import { 
    DELIVERY_CHANNEL_HOME_BULLET,
    DELIVERY_CHANNEL_SHOPPING_CART,
    DELIVERY_CHANNEL_SMS,
    DELIVERY_CHANNEL_SMS_UNVALID,
    DELIVERY_CHANNEL_EMAIL,
    DELIVERY_CHANNEL_PUSH,
    DELIVERY_CHANNEL_PUSH_UNVALID,
    DELIVERY_CHANNEL_ALL,
    DELIVERY_CHANNEL_RESET,
    DELIVERY_CHANNEL_INIT_PUSH,
} from '../actions';

// const sms = {
//     content:'',
//     goodsPageUrl:'',
//     goodsPageShortUrl:''
// }

const appPush = {
    activityTheme:'',
    activityContent:'',
    pushPageType:2,
    pushPageTypeUrl:'',
    uploadOnePicUrl:'',
    uploadTwoPicUrl:'',
    msgType:300,
    msgShowStyles:"3"
}

const initState = {
    homePopWindow:"",
    cartFloatingLayer:"",
    sms:{},
    email:'',
    appPush:{}
}

export const resetChannel = () => {
    return{
        type:DELIVERY_CHANNEL_RESET
    }
}

export const initPush = () => {
    return{
        type:DELIVERY_CHANNEL_INIT_PUSH
    }
}


export const createHome = (index) => {
    return{
        type:DELIVERY_CHANNEL_HOME_BULLET,
        payload:{index:index}
    }
}

export const createCart = (index) => {
    return{
        type:DELIVERY_CHANNEL_SHOPPING_CART,
        payload:{index:index}
    }
}

export const clearAppPush = () => {
    return{
        type:DELIVERY_CHANNEL_PUSH_UNVALID
    }
}

export const clearSMS = () => {
    return{
        type:DELIVERY_CHANNEL_SMS_UNVALID
    }
}

export const clearEmail = () => {
    return{
        type:DELIVERY_CHANNEL_EMAIL,
        payload:{email:''}
    }
}

export const createChannels = obj => {
    return{
        type:DELIVERY_CHANNEL_ALL,
        payload:obj,
    }
}

export default function reducer(state = initState,action){
    switch(action.type){
        case DELIVERY_CHANNEL_HOME_BULLET:{
            return { 
                ...state,
                homePopWindow:action.payload.index
             }
        }
        case DELIVERY_CHANNEL_SHOPPING_CART:{
            return { 
                ...state,
                cartFloatingLayer:action.payload.index
             }
        }
        case DELIVERY_CHANNEL_SMS:{
            let { content,goodsPageUrl,goodsPageShortUrl } = action.payload;
            return {
                ...state,
                sms:{
                    content:content,
                    goodsPageUrl:goodsPageUrl,
                    goodsPageShortUrl:goodsPageShortUrl
                }
            }
        }
        case DELIVERY_CHANNEL_SMS_UNVALID:{
            return{
                ...state,
                sms:{}
            }
        }
        case DELIVERY_CHANNEL_EMAIL:{
            return {
                ...state,
                email:action.payload.email
            }
        }
        case DELIVERY_CHANNEL_PUSH:{
            const { activityTheme,activityContent,pushPageType,
                    pushPageTypeUrl,uploadOnePicUrl,uploadTwoPicUrl,
                    msgType,msgShowStyles } =  action.payload
            return {
                ...state,
                appPush:{
                    activityTheme:activityTheme,
                    activityContent:activityContent,
                    pushPageType:pushPageType,
                    pushPageTypeUrl:pushPageTypeUrl,
                    uploadOnePicUrl:uploadOnePicUrl,
                    uploadTwoPicUrl:uploadTwoPicUrl,
                    msgType:msgType,
                    msgShowStyles:msgShowStyles
                }
            }
        }
        case DELIVERY_CHANNEL_PUSH_UNVALID:{
            return {
                ...state,
                appPush:{}
            }
        }
        case DELIVERY_CHANNEL_ALL:{
            return{
                ...state,
                ...action.payload
            }
        }
        case DELIVERY_CHANNEL_RESET:{
            return {...initState}
        }
        case DELIVERY_CHANNEL_INIT_PUSH:{
            return{
                ...state,
                appPush:{
                    ...appPush
                }
            }
        }
        default:{
            return state
        }
    }
}