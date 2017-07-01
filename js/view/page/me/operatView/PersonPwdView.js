import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import Button from "react-native-button";
import AIcon from "react-native-vector-icons/FontAwesome";
import BaseView from "../../../componet/BaseView";
import connect from "react-redux/src/components/connect";
import MySegmentedControlTab from "../../../componet/tcustom/TSegmentedControlTab";
import {TButton} from "../../../componet/tcustom/button/TButton";

const mapStateToProps = state => {
    return {
        userData: state.get("appState").get("userData").toJS(),
    }
}
@connect(mapStateToProps)
export default class PersonPwdView extends BaseView {

    constructor(props) {
        super(props);
        let {userData} = this.props;
        let {defaultIndex}=this.props.navigation.state.params
        this.isSetFundPwd=userData.data.is_set_fund_password;
        this.state = {
            oldPwd: "",
            newPwd: "",
            repeatPwd: "",
            selectedTabIndex: defaultIndex,
        };
    }

    renderBody() {
        let oldPwdView = this.state.selectedTabIndex == 1 && !this.isSetFundPwd ? null : (
            <View style={styles.inputContain}>
                <AIcon name="lock" style={styles.icoPwd}/>
                <TextInput
                    style={styles.textStyle}
                    onChangeText={(pwd) => this.setState({oldPwd: pwd})}
                    value={this.state.oldPwd}
                    placeholder={this.state.selectedTabIndex ? "原资金密码" : "原登陆密码"}
                    secureTextEntry={true}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                />
            </View>)

        return (
            <View style={G_Style.appView}>
                <MySegmentedControlTab selectedTabIndex={this.state.selectedTabIndex} valueList={['登陆密码', '资金密码']} onTabChange={this.onTabChange}/>
                <View style={{marginLeft: 40, marginRight: 40, top: G_Theme.windowHeight / 9}}>
                    {oldPwdView}
                    <View style={styles.inputContain}>
                        <AIcon name="lock" style={styles.icoPwd}/>
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={(pwd) => this.setState({newPwd: pwd})}
                            value={this.state.newPwd}
                            maxLength={9}
                            placeholder={this.state.selectedTabIndex ? "新资金密码" : "新登陆密码"}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={styles.inputContain}>
                        <AIcon name="lock" style={styles.icoPwd}/>
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={(pwd) => this.setState({repeatPwd: pwd})}
                            value={this.state.repeatPwd}
                            maxLength={9}
                            placeholder={"确认密码"}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <TButton
                        containerStyle={{
                            margin: 10,
                        }}
                        errMsg={this.onErrValid()}
                        onPress={this.onCommitAction}
                        btnName={`${this.state.selectedTabIndex ? "资金密码" : "登陆密码"}提交`}
                    />

                </View>
            </View>
        );
    }


    onTabChange = (data,index) => {
        this.setState({
            selectedTabIndex: index,
            oldPwd: "",
            newPwd: "",
            repeatPwd: "",
        })
    }

    onErrValid=()=> {
        let msg = null;
        if (this.state.oldPwd == "" && (this.isSetFundPwd || this.state.selectedTabIndex == 0)) {
            msg = "原密码不能为空."
        }
        else if (this.state.newPwd == "") {
            msg = "新密码不能为空."
        }
        else if (this.state.repeatPwd == "") {
            msg = "确认密码不能为空."
        }
        else if (this.state.newPwd != this.state.repeatPwd) {
            msg = "确认密码与新密码不一致."
        }
        return msg
    }

    onCommitAction = () => {
            if (this.state.selectedTabIndex == 0)//修改登陆密码
            {
                HTTP_SERVER.PWD_LOGIN.body.old_password = this.state.oldPwd;
                HTTP_SERVER.PWD_LOGIN.body.password = this.state.newPwd;
                HTTP_SERVER.PWD_LOGIN.body.password_confirmation = this.state.repeatPwd;
                ActDispatch.FetchAct.fetchVoWithResult(HTTP_SERVER.PWD_LOGIN, (data) => {
                    ActDispatch.AppAct.showErrorBox(data.Msg);
                    if(data.isSuccess)
                    {
                        G_NavUtil.pop();
                    }
                }, false)
            }
            else {//修改资金密码
                if (this.isSetFundPwd) {
                    HTTP_SERVER.PWD_FUND.body.old_fund_password = this.state.oldPwd;
                    HTTP_SERVER.PWD_FUND.body.fund_password = this.state.newPwd;
                    HTTP_SERVER.PWD_FUND.body.fund_password_confirmation = this.state.repeatPwd;
                    ActDispatch.FetchAct.fetchVoWithAction(HTTP_SERVER.PWD_FUND,ActionType.AppType.PWD_FOUND_SET,(data) => {
                        ActDispatch.AppAct.showErrorBox(data.Msg);
                        if(data.isSuccess)
                        {
                            G_NavUtil.pop();
                        }
                    }, false)
                }
                else {
                    //如果没有资金密码 则先设置资金密码
                    HTTP_SERVER.PWD_CONFIG_FUND.body.fund_password = this.state.newPwd;
                    HTTP_SERVER.PWD_CONFIG_FUND.body.fund_password_confirmation = this.state.repeatPwd;
                    ActDispatch.FetchAct.fetchVoWithResult(HTTP_SERVER.PWD_CONFIG_FUND, (data) => {
                        ActDispatch.AppAct.showErrorBox(data.Msg);
                        if(data.isSuccess)
                        {
                            G_NavUtil.pop();
                        }
                    }, false)

                }

            }

    }

}


const styles = StyleSheet.create({
    textStyle: {
        width: 150,
        left: 10,
        fontSize: 16,
        height:G_Theme.textInpuntH
    },
    iconUser: {
        color: G_Theme.gray,
        fontSize: 18,
    },
    icoPwd: {
        color: G_Theme.gray,
        fontSize: 20,
    },
    inputContain: {
        paddingBottom: 5,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 5,
        flexDirection: "row",
        height: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'gray',
        borderBottomWidth: 0.5
    }
});
