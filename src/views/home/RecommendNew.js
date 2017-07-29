/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';
import { recommendNew } from 'service/apiUrl';

class RecommendNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    recommendNew({}).then(res => {
      if(res.boolen == 1) {

      }
    });
  }

  render() {
    return (
        <section className="recommend-new-wrap">
            <div className="recommend-content">
                <div className="recommend-top">银系列</div>
                <div className="recommend-center">10%</div>
                <div className="recommend-bottom">投资</div>
            </div>
        </section>
    )
  }
}


export default RecommendNew;