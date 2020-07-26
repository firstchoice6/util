
import { message,Modal } from 'ant-design-vue';

const { confirm } = Modal;

export default (Vue: Function) => {
    Vue.prototype.$my_fun = () => {
        console.log('www2');
    };

    /**
     * 弹窗
     * @param { string } info
     * @param { number } type   /info/suc/error/warning
     * .then
     */
    Vue.prototype.$my_toast = (content:string):void => {
        message.success({
          content: content,
          duration: 0.5
        })

    }



    /**
     * 消息确认框
     * @param { string } title
     * @param { string } info
     * @return callback/.then
     * .then
     */

    Vue.prototype.$my_confirm = (content:string):void => {
        confirm({
            content: content,
        })
    }

};