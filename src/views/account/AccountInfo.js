/**
 * Created by chenrunsheng on 2017/8/16.
 */
import React from 'react';

class AccountInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="account-info-wrap">
                <div className="account-head">
                    <div className="image-date">
                        <i className="icon-user"></i>
                        <i className="icon-msg"></i>
                        <i className="icon-sign"></i>
                    </div>
                    <div className="means-money">
                        <p className="name">净资产(元)<i className="icon-eye-open"></i></p>
                        <p className="money">1,820,687,389.93</p>
                    </div>
                    <div className="profit">
                        <ul>
                            <li>
                                <p>1,564,213,092.93</p>
                                <p>可用余额(元)</p>
                            </li>
                            <li>
                                <p>529.92</p>
                                <p>预计总收益(元)</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}


export default AccountInfo;