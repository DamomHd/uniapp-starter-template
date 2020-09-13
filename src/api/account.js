/*
 * @Author: Damom
 * @Date: 2020-09-13 13:17:52
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 13:39:50
 * @Description: file content
 */
import request from '../common/request'


/**
 * @description 用户登录接口
 * @param {data}
 */
export function login(data) {
    return request({
        url: '/usrapi/v1/users/login',
        method: 'POST',
        data
    })
}


/**
 * @description 用户注销
 * @param {data}
 */
export function logout(data) {
    return request({
        url: '/usrapi/v1/users/logout',
        method: 'POST',
        data
    })
}


/**
* @description 用户注册
* @param {data}
* @returns {String} username
*/
export function register(data) {
    return request({
        url: '/usrapi/v1/users/register',
        method: 'POST',
        data
    })
}
/**
 * @description 获取用户注册短信验证码
 * @param {*} data 
 * @returns {String} userId
 */
export function getRegisterCode(data) {
    return request({
        url: '/usrapi/v1/users/register-verification-code',
        method: 'POST',
        data
    })
}

/**
* @description 重置密码短信验证码
* @param {*} data 
* @returns {String} userId
*/
export function getResetPwdCode(data) {
    return request({
        url: '/usrapi/v1/users/password-verification-code',
        method: 'POST',
        data
    })
}

/**
* @description 用户重置密码
* @param {*} data 
* @returns {String} username
*/
export function resetPwd(data) {
    return request({
        url: '/usrapi/v1/users/reset-password',
        method: 'POST',
        data
    })
}
