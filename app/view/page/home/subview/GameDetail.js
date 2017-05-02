import React from 'react';
import {
    Image,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ListView,
    Alert
} from 'react-native';

export default class GameDetail extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    render() {
        const {dataList} = this.props
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <View style={styles.sp}>
                {dataList.map((rowData, index) => {
                    return (<TouchableHighlight key={index} onPress={() => this.itemClick(rowData)} underlayColor='rgba(0,0,0,0)'>
                        <View style={styles.itemRow}>
                            <Image style={styles.thumb} source={{uri: rowData.img}}/>
                            <Text style={rowData.open == "1" ? styles.text : styles.textNoOpen}>
                                {rowData.name}
                            </Text>
                        </View>
                    </TouchableHighlight>)
                })}
                </View>
            </View>
        )
    }

    itemClick = (data) => {
        data.title = data.name;
        const {gameModel, playModel} = this.props
        TLog("gameDeail----",data)
        if (data.open == "1") {
            switch (data.id)
            {
                case "1"://"id":"1","name":"重庆时时彩"
                    NavUtil.pushToView(NavViews.SSCView({...data, gameModel: gameModel, playModel: playModel}));
                    break;
                case "2"://"id":"2","name":"山东11选5"
                    NavUtil.pushToView(NavViews.L115View({...data, gameModel: gameModel, playModel: playModel}));
                    break;
                default :
            }
        }
        else {
            Alert.alert("当前游戏还在筹备中", "敬请期待！", [])
        }
    }
}

const gridSize = Math.floor(GlobelTheme.screenWidth / 3)
var styles = StyleSheet.create({
    sp: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: "flex-start",
        height:gridSize*3,
        width:GlobelTheme.screenWidth,
    },
    itemRow: {
        justifyContent: 'center',
        width: gridSize,
        height: gridSize,
        alignItems: 'center',
    },
    thumb: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    text: {
        marginTop: 5,
        fontWeight: 'bold',
        color: "green",
    },
    textNoOpen: {
        color: "gray",
        marginTop: 5,
        fontWeight: 'bold'
    }
});