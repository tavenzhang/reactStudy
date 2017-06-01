/**
 * Created by soga on 2017/5/6.
 */
import KL10 from "./KL10";

export default class RenxuanFushi5z5 extends KL10 {

    constructor(props) {
        super(props);

    }

    //设置球排列
    setBalls = () => [
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    ];

    //设置rowtitle
    setRowTitle = () => ['选球'];

    checkBallIsComplete() {
        let me = this,
            ball = me.state.balls[0],
            i = 0,
            len = ball.length,
            num = 0;
        for (; i < len; i++) {
            if (ball[i] > 0) {
                num++;
            }
        }
        if (num >= 5) {
            this.setState({isBallsComplete: true});
            return true;
        }
        this.setState({isBallsComplete: false});
        return false;
    }

    //获取组合结果
    getLottery() {
        let me = this,
            ball = me.state.balls[0],
            i = 0,
            len = ball.length,
            arr = [];

        for (; i < len; i++) {
            if (ball[i] > 0) {
                arr.push(i);
            }
        }
        //校验当前的面板
        //获取选中数字
        if (me.checkBallIsComplete()) {
            return me.combine(arr, 5);
        }

        return [];
    }
}