/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';
import { Link } from 'react-router';

class ActiveNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }

    render() {
        if (!Object.keys(this.props.actNavList).length) return null;
        let actNavList = this.props.actNavList;
        return (
            <section className="act-nav-wrap">
                <ul className="nav-list">
                    {
                        actNavList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.href}>
                                        <p><img src={item.pic} alt="" /></p>
                                        <p>{item.name}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}


export default ActiveNavigation;