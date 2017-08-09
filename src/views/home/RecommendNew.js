/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';

class RecommendNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    if(!Object.keys(this.props.recommendInfo).length) return;
    let { prjList } = this.props.recommendInfo;
    console.log(prjList)
    return (
        <section className="recommend-new-wrap">
            <div className="recommend-content">
              <div className="recommend-top">
                <p>{prjList.recommend.prj_name_show}</p>
              </div>
              <div className="recommend-center">
                <div className="speed-schedule">
                  <div className="half-circle"></div>
                  <div className="pie"></div>
                  <div className="outer"></div>
                </div>
                <div className="income-case">
                  <p><span>{prjList.recommend.year_rate.split('+')[0]}</span>.00+{prjList.recommend.year_rate.split('+')[1]}%</p>
                  <p>预期年化收益率</p>
                </div>
                <ul className="monitor">
                  <li>风险缓释金</li>
                  <li>资金监控</li>
                </ul>
              </div>
              <div className="recommend-bottom">
                <ul className="invest-explain" >
                  <li>
                    <span><i className="icon-time"></i></span>
                    <span>
                      <p>30天</p>
                      <p>投资期限</p>
                    </span>
                  </li>
                  <li>
                    <span><i className="icon-money"></i></span>
                    <span>
                      <p>100元</p>
                      <p>起投金额</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
        </section>
    )
  }
}


export default RecommendNew;