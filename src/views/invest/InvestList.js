/**
 * Created by chenrunsheng on 2017/8/11.
 */
import React from 'react';

class InvestList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <section className="invest-nav-wrap">
                <ul>
                    <li className="active"><a href="javascript:;">全部</a></li>
                    <li><a href="javascript:;">盾系</a></li>
                    <li><a href="javascript:;">赢系</a></li>
                    <li><a href="javascript:;">铂系</a></li>
                </ul>
            </section>
        )
    }
}

export default InvestList;