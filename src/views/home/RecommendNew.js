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
              <div className="recommend-top">
                <p>时时赚 - SSZ170628002</p>
              </div>
              <div className="recommend-center">

                <div className="speed-schedule">
                  <div className="half-circle"></div>
                  <div className="pie"></div>
                  <div className="outer"></div>
                </div>

              </div>
              <div className="recommend-bottom"></div>
            </div>
        </section>
    )
  }
}


export default RecommendNew;