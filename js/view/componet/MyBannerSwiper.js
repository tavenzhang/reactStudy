import React,{PropTypes} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';
import {home_game} from "../../assets/index";


export default class MyBannerSwiper extends React.Component {

    static propTypes={
        dataList:PropTypes.array
    }

    render() {
        //"banner":[{"link":"/announcements/130/view","pic":""},{"link":"/announcements/128/view","pic":""},{"link":"/bets/bet/1","pic":""}]}}
        const {dataList}= this.props
        return (
            <Swiper
                height={100}
                loop={true}
                autoplay={true}
                dot={<View style={styles.customDot} />}
                activeDot={<View style={styles.customActiveDot} />}
                showsPagination={true}
                paginationStyle={{
                        bottom: 5
                    }}
            >
                { dataList ? dataList.map((banner,i) => {
                    return (
                        <TouchableOpacity key={i} activeOpacity={0.75} onPress={()=>{
                            this.bannerClick(banner);
                        }}>
                            {
                                banner.pic=="" ||!banner.pic  ?   <Image
                                    style={styles.bannerImage}
                                    source={home_game}
                                    key={i}
                                />:<Image
                                    style={styles.bannerImage}
                                    source={{uri: banner.pic}}
                                    key={i}
                                />
                            }
                        </TouchableOpacity>
                    )
                }) : null}
            </Swiper>
        )
    }

    bannerClick=(data)=> {
        TLog("bannerClick,----data==",data)
        G_NavUtil.push(G_RoutConfig.TWebView,{data:data.link,title:data.title});
    }
}

const styles = StyleSheet.create({
    swiper:{
        backgroundColor: '#77cc32',
    },
    bannerImage: {
        height:G_Theme.bannerHeight,
        width: G_Theme.windowWidth,
    },

    customDot: {
        backgroundColor: '#ccc',
        height: 6,
        width: 6,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        borderRadius: 3,
    },

    customActiveDot: {
        backgroundColor: 'yellow',
        height: 6,
        width: 6,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        borderRadius: 3,
    },
})