/**
 * Created by chenrunsheng on 2017/8/11.
 */
import React from 'react';
import { connect } from 'react-redux';

import { plist } from 'service/apiUrl';
import { isShowLoading } from './../../actions';
import SpeedRate from './SpeedRate';

class InvestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            plistArr: []
        }
    }

    componentDidMount() {
        this._fetchData();
    }

    async _fetchData() {
        let { isShowLoading } = this.props;
        isShowLoading(true);
        /* eslint-disable */
        let params = {
            page: this.state.page,
            per_page: 15,
            isNoAuto: false,
            prj_series: 0
        }
        plist(params).then(res => {
            if (res.boolen == 1) {
                this.setState({ plistArr: res.data.list })
                isShowLoading(false);
            }
        });
        /* eslint-enable */
    }

    render() {
        if (!this.state.plistArr && !this.state.plistArr.length) return;
        return (
            <section className="invest-list-wrap">
                <ul>
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
                                            <SpeedRate schedule={item.schedule} />
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
            </section>
        )
    }
}

function mapStateToProps() {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        isShowLoading: (isShowLoad) => dispatch(isShowLoading(isShowLoad))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestList);