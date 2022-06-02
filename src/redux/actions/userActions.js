import * as actionTypes from "./actionTypes"

export function login(user, userType) {
    return {
        type: actionTypes.LOGIN,
        payload: {user, userType}
    }
}

export function signOut() {
    return {
        type: actionTypes.SIGN_OUT
    }
}