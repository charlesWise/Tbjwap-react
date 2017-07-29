/**
 * Created by chenrunsheng on 2017/7/24.
 */
import fetch from './fetch';

let ctx = '/api';
let banner = (params) => fetch('GET', ctx+'/Mobile2/Public/banner', params);
let indexNavigation = () => fetch('POST', ctx+'/Mobile2/Index/indexNavigation', {});
let recommendNew = () => fetch('POST', ctx+'/Mobile2/Invest/recommendNew', {});

export {
    banner,
    indexNavigation,
    recommendNew
}