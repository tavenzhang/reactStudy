import  ActionType   from "./redux/action/ActionType";
import  action   from "./global/action";
import  style from "./global/config/style";
import  server from "./global/config/server";
import  storage from "./global/utils/storage";
import  alertUtil from "./global/utils/alertUtil";
import  uitls from "./global/utils/util";
import  GameConfig from "./global/GameConfig";
import  AnimationHelp from "./global/animationHelp";
import  route   from "./global/route";
import  native   from "./global/nativeExtent";
import  enumString   from "./global/enumString";
//import PerfMonitor from 'react-native/Libraries/Performance/RCTRenderingPerf';
import React  from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/store';
import App from './app';


const store = configureStore();
export default class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }

    componentDidMount() {
        // PerfMonitor.toggle();
        // setTimeout(() => {
        //     PerfMonitor.start();
        //     setTimeout(() => {
        //         PerfMonitor.stop();
        //     }, 20000);
        // }, 5000);
    }
}