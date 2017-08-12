/**
 * Created by chenrunsheng on 2017/8/11.
 */
import React from 'react';
import SpeedRate from './SpeedRate';

class InvestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    componentDidMount() {

    }

    render() {
        return (
            <section className="invest-list-wrap">
                <ul>
                    <li>
                        <div className="list-left">
                            <div className="title-series">
                                <span className="title"><i>赢系</i><i>|</i><i>赢系3号-Y170812064C</i></span>
                                <span className="reward"><i>奖励</i></span>
                            </div>
                            <div className="gradient-line"></div>
                            <div className="rate-days-amount">
                                <span><i>9</i>.00+2.5%</span>
                                <span>90天</span>
                                <span>剩余2.96万</span>
                            </div>
                            <div className="tips"><span>100元起投<i>|</i>到期还本付息</span></div>
                        </div>
                        <div className="list-right">
                            <aside className="speed-rate">
                                <SpeedRate />
                            </aside>
                            <div className="new-guest">新客</div>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

export default InvestList;