import React from 'react';
import {
    View,
    ListView,
    StyleSheet,
    Text
} from 'react-native';


export default class TeamListView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
            dataList:[{user:"张三",award:1950,assistant:0,total:888},
                {money:1950,use:10,unuse:100,total:888},
                {money:1950,use:10,unuse:100,total:888},
                {money:1950,use:10,unuse:100,total:888}]
        }

    }

    render() {
        let ds = this.state.dataSource.cloneWithRows(this.state.dataList)
        return (<View>
            <ListView
                dataSource={ds}
                renderHeader={this.renderHeadView}
                renderRow={this.rendeRow}
            />
        </View>)
    }


    renderHeadView = () => {
        return (<View style={{flexDirection: "row"}}>
            <Text style={[styles.headView,]}>用户</Text>
            <Text style={[styles.headView, {borderLeftWidth: 0}]}>奖金组</Text>
            <Text style={[styles.headView, {borderLeftWidth: 0}]}>下级</Text>
            <Text style={[styles.headView]}>净盈亏</Text>
            <Text style={[styles.headView]}>月投注</Text>
            <Text style={[styles.headView]}>操作</Text>
            <Text style={[styles.headView]}>详情</Text>
        </View>)
    }

    rendeRow=(data,section)=>{
        return (<View style={{flexDirection: "row"}}>
            <Text style={[styles.contentView,]}>李四说下</Text>
            <Text style={[styles.contentView, {borderLeftWidth: 0}]}>1938</Text>
            <Text style={[styles.contentView, {borderLeftWidth: 0}]}>3</Text>
            <Text style={[styles.contentView]}>11111</Text>
            <Text style={[styles.contentView]}>22222</Text>
            <Text style={[styles.contentView]}>转移</Text>
            <Text style={[styles.contentView]}>详情</Text>
        </View>)
    }
}
const  styles = StyleSheet.create({
    textStyle: {
        width: 150,
        left: 10,
        fontSize: 14,
        height:G_Theme.textInpuntH,
        borderWidth:0.5,
        marginRight:15,
        paddingLeft:5
    },
    headView: {
        padding: 2,
        backgroundColor: "rgb(241, 241, 241)",
        flex: 1,
        borderWidth: 1,
        borderColor: "gray",
        textAlign: "center",
        fontWeight:"bold"
    },
    contentView:{
        padding: 2,
        flex: 1,
        fontSize: 12,
        borderWidth: 1,
        borderColor: "gray",
        textAlign: "center"
    }
})