import { USER_INFO,GOODS,STAND_BRAND } from "./index";

export const createUserInfo = (obj) => {
    return{
        type:USER_INFO,
        payload:obj,
    }
}

export const createGoods = (obj) => {
    return{
        type:GOODS,
        payload:obj
    }
}

export const createStandBrand = (obj) => {
    return{
        type:STAND_BRAND,
        payload:obj
    }
}