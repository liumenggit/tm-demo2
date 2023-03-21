const tokenKey = 'accessToken';//键值
const userKey = 'user'; // 用户信息
const loginKey = 'login'; // 用户信息
// token
const getAccessToken = function () {
    let token = '';
    try {
        token = 'Bearer ' + uni.getStorageSync(tokenKey);
    } catch (e) {
    }
    return token;
}
const setAccessToken = (access_token: string) => {
    try {
        uni.setStorageSync(tokenKey, access_token);
        return true;
    } catch (e) {
        return false;
    }
}
const clearAccessToken = function () {
    try {
        uni.removeStorageSync(tokenKey);
    } catch (e) {
    }
}
// userinfo
const setUser = (user: any) => {
    try {
        uni.setStorageSync(userKey, user);
        return true;
    } catch (e) {
        return false;
    }
}
const getUser = function () {
    try {
        return uni.getStorageSync(userKey)
    } catch (e) {
        return false;
    }
}
const clearUser = function () {
    try {
        uni.removeStorageSync(userKey)
    } catch (e) {
    }
}
//登录状态
const setLoginState = (status:boolean) => {
    try {
        uni.setStorageSync(loginKey, status);
        return true;
    } catch (e) {
        return false;
    }
}

const getLoginState = () => {
    try {
        return uni.getStorageSync(loginKey)
    } catch (e) {
        return false;
    }
}
export default {
    getAccessToken, setAccessToken, clearAccessToken, getUser, setUser, clearUser, setLoginState, getLoginState
}
