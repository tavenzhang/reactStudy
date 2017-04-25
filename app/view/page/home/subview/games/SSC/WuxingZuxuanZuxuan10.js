/**
 * Created by soga on 2017/4/24.
 */

import SSC from "./SSC";

export default class WuxingZuxuanZuxuan5 extends SSC {

    constructor(props) {
        super(props);

    }

    //设置球排列
    setBalls = () => [
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
        [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    ];

    //设置rowtitle
    setRowTitle = () => ['三重号','二重号'];

    //并设置 isBallsComplete
    checkBallIsComplete(){
        const me = this;
        const {balls} = this.state;
        const ball = balls;

        let i = 0,
            len = ball[0].length,
            num = 0, oNum = 0;

        for(;i < len;i++){
            if(ball[0][i] > 0){
                oNum++;
            }
            if(ball[1][i] > 0){
                num++;
            }
        }
        //二重号大于1 && 单号大于3
        if(num >= 1 && oNum >= 1){
            this.setState({isBallsComplete: true});
            return true;
        }
        this.setState({isBallsComplete: false});
        return false;
    }

    //获取组合结果
    getLottery(){
        const me = this;
        const {balls} = this.state;
        const ball = balls;

        let i = 0,
            len = ball[1].length,
            result = [],
            arr = [],
            nr = new Array();

        //校验当前的面板
        //获取选中数字
        if(me.checkBallIsComplete()){
            for(;i < len;i++){
                if(ball[1][i] > 0){
                    arr.push(i);
                }
            }
            //存储单号组合
            result = me.combine(arr, 1);
            //二重号组合
            for(let i=0,current;i<ball[0].length;i++){
                if(ball[0][i] == 1){
                    //加上单号各种组合
                    for(var s=0;s<result.length;s++){
                        if(me.arrIndexOf(i, result[s]) == -1){
                            nr.push(result[s].concat([i,i,i,i]));
                        }
                    }
                }
            }
            return nr;
        }
        return [];
    }

}