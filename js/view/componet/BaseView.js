import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    LayoutAnimation
} from 'react-native';
import NavigationBar from './NavigationBar';


import {shouldComponentUpdate} from 'react-immutable-render-mixin';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});

//定义全局Dispatch 方便使用
export default class BaseView extends Component {
    static initNavgation =({navigation})=> {
        return {title:navigation.state.routeName}
    }

    constructor(props) {
        super(props);
        this.getNavigationBarProps = this.getNavigationBarProps.bind(this);
        this.renderNavigationBar = this.renderNavigationBar.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.onLeftPressed = this.onLeftPressed.bind(this);
        this.onRightPressed = this.onRightPressed.bind(this);
        this.onHeadPressed=this.onHeadPressed.bind(this);
        //this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
        this.initRegist=false;
        if(this.props.navigation) {
            G_Navigation = this.props.navigation
        }
    }

    getNavigationBarProps () {
        return {
        };
    }


    renderNavigationBar() {
        // let navigationBarProps = this.getNavigationBarProps();
        // if(navigationBarProps != null)
        // {
        //     //{...data, gameModel: gameModel, playModel: playModel}
        //     //Object.assign(this.props.passProps,navigationBarProps);
        //     return (
        //         <NavigationBar
        //             {...this.props.passProps}
        //             {...navigationBarProps}
        //             onLeftPressed={this.onLeftPressed}
        //             onRightPressed={this.onRightPressed}
        //             onHeadPressed={this.onHeadPressed}
        //         />
        //     );
        // }
        // else{
        //     return {}
        // }
        return null
    }

    componentWillUpdate() {
        LayoutAnimation.configureNext(G_LayoutAnimationHelp.springNoDelete);
        if(!this.initRegist)
        {
            if(this.props.navigation)
            {
                let {setParams}=this.props.navigation
                setParams({onLeftPressed:this.onLeftPressed,onRightPressed:this.onRightPressed,onHeadPressed:this.onHeadPressed})
                this.initRegist=true;
            }
        }
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                {this.renderNavigationBar()}
                {this.renderBody()}
            </View>
        );
    }

    renderBody() {

    }

    onLeftPressed() {
         G_NavUtil.pop();
    }

    onRightPressed() {
        TLog('onRightPressed');
    }

    onHeadPressed() {
        TLog('onHeadPressed');
    }


}