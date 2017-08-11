/**
 * Created by chenrunsheng on 2017/7/29.
 */
import React from 'react';
import { Link } from 'react-router';

class Qualification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <section className="qualification-wrap">
                <aside className="insured"><i></i> <span>账户资金安全由人保财险全额承保</span> <i></i></aside>
                <ul className="qualifiy">
                    <li>
                        <p><i className="icon-firms"></i></p>
                        <p>上市公司背景</p>
                    </li>
                    <li>
                        <p><i className="icon-bank"></i></p>
                        <p>银行资金存管</p>
                    </li>
                    <li>
                        <p><i className="icon-insured"></i></p>
                        <p>部分履约保险</p>
                    </li>
                </ul>
                <aside className="more"><Link to='./'>查看更多</Link></aside>
            </section>
        )
    }
}


export default Qualification;