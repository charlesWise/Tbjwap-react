/**
 * Created by chenrunsheng on 2017/8/16.
 */
import React from 'react';
import './login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="login-wrapper">
                <div className="login-bg">
                    <img src="./../../images/login/login-bg.png" alt="" />
                </div>
                <div className="login-back"><a href="javascript:;"></a></div>
                <div className="login-form">
                    <div className="logo"><img src="./../../images/logo/login-logo.png" alt="" /></div>
                    <div className="form">
                        <input type="tel" name="mobile" placeholder="请输入手机号登录或注册" autocomplete="off" />
                    </div>
                    <div className="form">
                        <input type="password" name="password" placeholder="输入密码" autocomplete="off" />
                    </div>
                    <div className="next-step"><a href="javascript:;">下一步</a></div>
                </div>
                <div className="custody"><i className="icon-custody"></i><span>银行资金存管</span></div>
            </section>
        )
    }
}


export default Login;