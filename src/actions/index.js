export const IS_SHOW_LOADING = 'IS_SHOW_LOADING';

export function isShowLoading(isShowLoad) {
  return {
    type: 'IS_SHOW_LOADING',
    isShowLoad: isShowLoad
  }
}