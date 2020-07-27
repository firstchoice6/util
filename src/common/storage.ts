

export default (Vue: Function) => {
    Vue.prototype.$ls_set = (key:string,value:string):void => {
        window.localStorage.setItem(key,value)
    };

    Vue.prototype.$ls_get = (key:string):any => {
      window.localStorage.getItem(key)

    }

    Vue.prototype.$ls_clear = ():void => {
      window.localStorage.clear()
    }

};