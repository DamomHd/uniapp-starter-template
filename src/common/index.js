/*
 * @Author: Damom
 * @Date: 2020-09-13 13:15:30
 * @LastEditors: Damom
 * @LastEditTime: 2020-09-13 13:15:32
 * @Description: file content
 */

/**
 * pramsUrl to params object
 * @param {*} url 参数字符串
 * @param {*} name 是否获取某一个key的value 默认为空
 */
export let urlToParams = (url,name='')=>{
    let keyVal = url.spilt('&')
    let params = {}
    for(let i = 0; i<keyVal.length;i++){
        let item = keyVal[i].spilt('=')
        let [key,value] = item
        params[key] = value
    }
    if(!name) return params
    return params[name]
}
/**
 * params to url string
 * @param {*} params 参数对象
 * @returns {*} String
 */
export let paramsToUrl = (params = {}) =>{
    let url = ''
    for(let key in params){
        url += `${key}=${params[key]}`
    }
    return url
} 

/**
 * 小程序弹窗确认封装
 * @param {*} config 
 */
export let showConfirm = (config) =>{
    let params = {
        title:'提示',
        content:'',
        showCancel:true,
        cancelText:'取消',
        cancelColor:'#000000',
        confirmText:'确定',
        confirmColor:'#d8354f',
        success: res =>{
            if(res.confirm&&config.ok&&typeof config.ok == 'function') config.ok()
            else if(res.cancel&& config.cancel && typeof config.cancel =='function') config.cancel()
        },
        fail:fail=>{

        },
        complete:cpl=>{

        }
    }
    Object.assign(params,config)
    wx.showModal(params)
}
/**
 * 小程序监听更新信息
 */
export let checkUpdateVersion = () =>{
    if(wx.canIUse('getUpdateManager')){
        //创建 实例
        const updateManager = wx.getUpdateManager()
        //检测版本更新
        updateManager.onCheckForUpdate(res=>{
            //请求完新版本
            if(res.hasUpdate){
                //监听小程序有版本更新事件
                updateManager.onUpdateReady(()=>{
                    showConfirm({
                        title:'更新提示',
                        content:'新版本已经准备好了，是否重启应用？',
                        ok:()=>{
                            updateManager.applyUpdate()
                        }
                    })
                })
                //监听小程序更新失败
                updateManager.onUpdateFailed(()=>{
                    //新版本下载失败
                    showConfirm({
                        title:'已经有新版本咯~',
                        content:'请您删除当前小程序，到微信“发现-小程序”页，重新搜索打开哟~'
                    })
                })
            }
        })
    }
}