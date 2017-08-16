export const IS_SHOW_LOADING = 'IS_SHOW_LOADING';
export const PRJ_SERIES = 'PRJ_SERIES';

export function isShowLoading(isShowLoad) {
  return {
    type: 'IS_SHOW_LOADING',
    isShowLoad: isShowLoad
  }
}
export function prjSeries(type) {
  return {
    type: 'PRJ_SERIES',
    prjSeries: type
  }
}