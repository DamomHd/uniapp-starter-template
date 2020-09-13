/*
 * @Author: Damom
 * @Date: 2020-09-12 10:17:33
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 15:51:38
 * @Description: file content
 */

import { APIHOST } from '../config'
import { paramsToUrl } from './index'
/* 请求 */
const JSON_HEADER = 'application/json;charset=UTF-8'
const FORM_HEADER = 'application/x-www-form-urlencoded;charset=UTF-8'
class HTTP {
    static request(config) {
        let token = wx.getStorageSync('token')
        let header = {
            'content-type': JSON_HEADER
        }
        if (token) header['token'] = token
        if (config.isForm) header['Content-Type'] = FORM_HEADER
        return new Promise((resolve,reject)=>{
            uni.request({
                url: `${APIHOST}${config.url}`,
                method:config.method || 'GET',
                data:config.data,
                header:header,
                success:(response) =>{
                    // let code = response.statusCode.toString()
                    // 路由历史
                    // let routeHistory = getCurrentPages();
                    // let routeLength = routeHistory.length;
                    // let { route, opitons:params } = routeHistory[length-1] 
                    // let paramsStr = paramsToUrl(opitons)
                    let res = response.data
                    let {code:status,message:msg} = res
                    switch(status) {
                        case 400||500:
                            uni.showToast({
                                title: msg,
                                icon:'none'
                            })
                            reject()
                            break;
                    
                        default:
                            resolve(res)
                    }
                }
            })
        })
    }
}

export default HTTP.request