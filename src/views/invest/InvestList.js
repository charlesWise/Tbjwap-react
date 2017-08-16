/**
 * Created by chenrunsheng on 2017/8/11.
 */
import React from 'react';
import { connect } from 'react-redux';

import { plist } from 'service/apiUrl';
import { isShowLoading } from './../../actions';
import { getStyle } from './../../config/mUtils'
import SpeedRate from './SpeedRate';
import LoadMore from 'components/common/LoadMore';

class InvestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            plistArr: [],
            preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
            isLoadMore: false //显示加载动画
        }
        this.prjSeries = this.props.prjSeries;
    }

    async componentDidMount() {
        this._initData();
        this._scrollLoading();
    }

    async componentWillReceiveProps(nextState) {
        this.prjSeries = nextState.prjSeries;
        this._initData();
    }

    async shouldComponentUpdate(nextProps, nextState) {
        return nextProps.prjSeries == nextState.prjSeries;
    }

    async _initData() {
        let { isShowLoading } = this.props;
        isShowLoading(true);
        const params = {
            page: this.state.page,
            per_page: 15,
            isNoAuto: false,
            prj_series: this.prjSeries
        }
        let res = await plist(params);
        isShowLoading(false);
        this.setState({
            plistArr: [...res.data.list],
            isLoadMore: false
        });
    }

    async _scrollLoading() {
        let el = window.document.getElementById('loaderMore'),
            windowHeight = window.screen.height,
            height,
            setTop,
            paddingBottom,
            marginBottom,
            requestFram,
            oldScrollTop,
            scrollEl,
            heightEl,
            scrollType = el.attributes.type && el.attributes.type.value,
            scrollReduce = 2;
        if (scrollType == 2) {
            scrollEl = el;
            heightEl = el.children[0];
        } else {
            scrollEl = document.body;
            heightEl = el;
        }

        el.addEventListener('touchstart', () => {
            height = heightEl.clientHeight;
            if (scrollType == 2) {
                height = height
            }
            setTop = el.offsetTop;
            paddingBottom = getStyle(el, 'paddingBottom');
            marginBottom = getStyle(el, 'marginBottom');
        }, false)

        el.addEventListener('touchmove', () => {
            loadMore();
        }, false)

        el.addEventListener('touchend', () => {
            oldScrollTop = scrollEl.scrollTop;
            moveEnd();
        }, false)

        const moveEnd = () => {
            requestFram = requestAnimationFrame(() => {
                if (scrollEl.scrollTop != oldScrollTop) {
                    oldScrollTop = scrollEl.scrollTop;
                    moveEnd()
                } else {
                    cancelAnimationFrame(requestFram);
                    height = heightEl.clientHeight;
                    loadMore();
                }
            })
        }

        const loadMore = () => {
            if ((scrollEl.scrollTop + windowHeight) >= (height + setTop + paddingBottom + marginBottom - scrollReduce)) {
                this._loaderMore();
            }
        }
    }

    //到达底部加载更多数据
    async _loaderMore() {
        if (this.state.preventRepeatReuqest) return; //防止重复请求
        let page = this.state.page + 1;
        this.setState({
            isLoadMore: true,
            preventRepeatReuqest: true,
            page
        });

        const params = {
            page: this.state.page,
            per_page: 15,
            isNoAuto: false,
            prj_series: this.prjSeries
        }
        let res = await plist(params);
        this.setState({
            plistArr: [...this.state.plistArr, ...res.data.list],
            isLoadMore: false
        });

        //当获取数据小于15，说明没有更多数据，不需要再次请求数据
        if (res.length < 15) return;
        this.setState({
            preventRepeatReuqest: false
        })
    }

    render() {
        if (!this.state.plistArr && !this.state.plistArr.length) return;
        return (
            <section className="invest-list-wrap">
                <ul id="loaderMore" type="1">
                    {
                        this.state.plistArr.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="list-left">
                                        <div className="title-series">
                                            <span className="title">
                                                <i>
                                                    {
                                                        item.prj_series == 1 ? '铂系' : item.prj_series == 2 ? '盾系' : '赢系'
                                                    }
                                                </i>
                                                <i>|</i>
                                                <i>{item.prj_name_show}</i>
                                            </span>
                                            {
                                                item.activity_id > 0 && item.activity_ext_info.big_icon &&
                                                <span className="reward"><i>奖励</i></span>
                                            }
                                        </div>
                                        <div className="gradient-line"></div>
                                        <div className="rate-days-amount">
                                            <span><i>{item.rate_view.split('+')[0].split('.')[0]}</i>.00+{item.rate_view.split('+')[1]}%</span>
                                            <span>{item.step_bid_amount_view}</span>
                                            <span>剩余{item.remaining_amount_view}</span>
                                        </div>
                                        <div className="tips"><span>{item.step_bid_amount_view}起投<i>|</i>{item.repay_way_view}</span></div>
                                    </div>
                                    <div className="list-right">
                                        <aside className="speed-rate">
                                            <SpeedRate schedule={item.schedule} id={item.id} />
                                        </aside>
                                        {
                                            item.is_new == 1 && <div className="new-guest">新客</div>
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    this.state.preventRepeatReuqest && <LoadMore />
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        prjSeries: state.prjSeries
    }
}

function mapDispatchToProps(dispatch) {
    return {
        isShowLoading: (isShowLoad) => dispatch(isShowLoading(isShowLoad))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestList);