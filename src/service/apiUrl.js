/**
 * Created by chenrunsheng on 2017/7/24.
 */
import fetch from './fetch';

const ctx = '/api';
const banner = async (params) => fetch('GET', ctx + '/Mobile2/Public/banner', params);
const indexNavigation = async () => fetch('POST', ctx + '/Mobile2/Index/indexNavigation', {});
const recommendNew = async () => fetch('POST', ctx + '/Mobile2/Invest/recommendNew', {});
const plist = async (params) => fetch('POST', ctx + '/Mobile2/Invest/plist', params);

export {
    banner,
    indexNavigation,
    recommendNew,
    plist
}