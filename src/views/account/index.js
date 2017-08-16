/**
 * Created by chenrunsheng on 2017/8/16.
 */
import React from 'react';
import './account.scss';

import Header from 'components/header';
import AccountInfo from './AccountInfo';
import Footer from 'components/footer';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="wrapper">
                <Header left={false} title="账户" right="" />
                <AccountInfo />
                <Footer router={this.props.router} />
            </section>
        )
    }
}


export default Account;