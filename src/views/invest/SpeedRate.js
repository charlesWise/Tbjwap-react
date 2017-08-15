/**
 * Created by chenrunsheng on 2017/8/12.
 */
import React from 'react';

class SpeedRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this._draw(this.props.schedule, this.props.id);
    }

    _draw(percent, iD, sR) {
        /**
         * [顺时针方向画图，起始点在左侧]
         * @param  {[number]} percent [所占的进度百分比，比如66%，则传66即可，0 <= percent <= 100]
         * @param  {[number]} sR      [圆弧起始角度，可不传，默认是π/2，Math.PI/2 <= sR < 3/2 * Math.PI]
         * @param  {[number]} iD      [组件map时，避免重复canvas id]
         */
        if (percent < 0 || percent > 100) {
            return;
        }
        if (sR < Math.PI / 2 || sR >= 3 / 2 * Math.PI) {
            return;
        }

        var canvas = document.querySelector('#canvas' + iD),
            cxt = canvas.getContext('2d'),
            cWidth = canvas.width,
            cHeight = canvas.height,
            baseColor = '#e1e1e1',
            coverColor = '#ff811c',
            PI = Math.PI,
            sR = sR || 1 / 2 * PI; // 默认圆弧的起始点弧度为π/2

        var finalRadian = sR + ((PI + (PI - sR) * 2) * percent / 100); // 红圈的终点弧度
        var step = (PI + (PI - sR) * 2) / 100; // 一个1%对应的弧度大小
        var text = 0; // 显示的数字
        var timer = setInterval(function () {
            cxt.clearRect(0, 0, cWidth, cHeight);
            var endRadian = sR + text * step;
            // 画灰色圆弧
            drawCanvas(cWidth / 2, cHeight / 2, 25, sR, sR + (PI + (PI - sR) * 2), baseColor, 2);
            // 画红色圆弧
            drawCanvas(cWidth / 2, cHeight / 2, 25, sR, endRadian, coverColor, 2);

            // 画红色圆头
            // 红色圆头其实就是一个圆，关键的是找到其圆心，涉及到三角函数知识，自己画个图一看就明了
            // var angle = 2 * PI - endRadian, // 转换成逆时针方向的弧度（三角函数中的）
            //     xPos = Math.cos(angle) * 25 + cWidth / 2, // 红色圆 圆心的x坐标
            //     yPos = -Math.sin(angle) * 25 + cHeight / 2; // 红色圆 圆心的y坐标
            // drawCanvas(xPos, yPos, 2, 0, 2 * PI, coverColor, 2);

            // 数字
            cxt.fillStyle = coverColor;
            cxt.font = '.5rem PT Sans';
            cxt.textAlign = 'center';
            cxt.fillText(text + '%', cWidth / 2, cHeight / 2 + 5);
            text++;

            if (endRadian.toFixed(2) >= finalRadian.toFixed(2)) {
                clearInterval(timer);
            }
        }, 30);

        function drawCanvas(x, y, r, sRadian, eRadian, color, lineWidth) {
            cxt.beginPath();
            cxt.lineCap = 'round';
            cxt.strokeStyle = color;
            cxt.lineWidth = lineWidth;
            cxt.arc(x, y, r, sRadian, eRadian, false);
            cxt.stroke();
        }
    }

    render() {
        return (
            <canvas id={'canvas' + this.props.id} width="60" height="60"></canvas>
        )
    }
}

export default SpeedRate;