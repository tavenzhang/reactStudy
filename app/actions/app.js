export const appAN  = {
    UPDATE_ACTIVITY_LISTS : "app/UPDATE_ACTIVITY_LISTS",
    SEARCH_VIDEO          : "app/SEARCH_VIDEO",
    //DRAWER_TOGGLE         : "app/DRAWER_TOGGLE",
    //DRAWER_CLOSE          : "app/DRAWER_CLOSE",
    CLOSE_GIFT_DIALOG     : "app/CLOSE_GIFT_DIALOG",
    UPDATE_MYRECORD       : "app/UPDATE_MYRECORD", //更新我的消费记录
    UPDATE_MYMSG          : "app/UPDATE_MYMSG", //更新我的消息
    UPDATE_MYMOUNT        : "app/UPDATE_MYMOUNT", //更新我的道具
    OPEN_GIFT_DIALOG      : "app/OPEN_GIFT_DIALOG",
    UPDATE_GIFT_LIST      : "app/UPDATE_GIFT_LIST",
    UPDATE_USERINFO       : "app/UPDATE_USERINFO",
    UPDATE_DIALODSTATUS   : "app/UPDATE_DIALODSTATUS",
    UPDATE_SHOPSELECT     : "app/UPDATE_SHOPSELECT",
    SWITCH_HOME_TAB_INDEX : "app/SWITCH_HOME_TAB_INDEX",
    SWITCH_MENU_TAB_INDEX : "app/SWITCH_MENU_TAB_INDEX",
    SWITCH_SHOP_TAB_INDEX : "app/SWITCH_SHOP_TAB_INDEX",
    UPDATE_VIDEO_LISTS_ALL: "app/UPDATE_VIDEO_LISTS_ALL",
    UPDATE_VIDEO_LISTS_REC: "app/UPDATE_VIDEO_LISTS_REC",
    UPDATE_VIDEO_LISTS_SLS: "app/UPDATE_VIDEO_LISTS_SLS",
    UPDATE_VIDEO_LISTS_ORD: "app/UPDATE_VIDEO_LISTS_ORD",
    SWITCH_RANK_TAB_INDEX : "app/SWITCH_RANK_TAB_INDEX",
    SWITCH_VIDEO_TAB_INDEX: "app/SWITCH_VIDEO_TAB_INDEX",
    UPDATE_RANK_LISTS     : "app/UPDATE_RANK_LISTS",
    UPDATE_SHOPS          : "app/UPDATE_SHOPS",
    SHOW_INFOBOX          : "app/SHOW_INFOBOX",
    CLOSE_INFOBOX         : "app/CLOSE_INFOBOX",
    UPDATE_UID            : "app/UPDATE_UID",
    EDIT_USERINFO         : "app/EDIT_USERINFO",//编辑用户信息
    LOGOUT                : "app/LOGOUT",
    LOGIN                 : "app/LOGIN"
};

export const appAct = {
    //更新活动列表
    updateActivityLists : activityList => ({
        type: appAN.UPDATE_ACTIVITY_LISTS,
        activityList
    }),

    //查询视频
    searchVideos : videos => ({
        type: appAN.SEARCH_VIDEO,
        searchVideoLists
    }),

    //drawer toggle
    //drawerToggle : isOpen => ({
    //    type: appAN.DRAWER_TOGGLE,
    //    open: isOpen
    //}),

    //drawer close
    //drawerClose : () => ({
    //    type: appAN.DRAWER_CLOSE,
    //    open: false
    //}),

    //打开礼物对话框
    openGiftDialog : () => ({
        type: appAN.OPEN_GIFT_DIALOG,
        giftDialogIsOpen: true
    }),

    //gift dialog close
    closeGiftDialog : () => ({
        type: appAN.CLOSE_GIFT_DIALOG,
        giftDialogIsOpen: false
    }),

    //gift update list
    updateGiftList : giftList => ({
        type: appAN.UPDATE_GIFT_LIST,
        giftList
    }),

    //home tabs index
    setHomeTabIndex : slideIndex => ({
        type: appAN.SWITCH_HOME_TAB_INDEX,
        slideIndex
    }),

    //menu tabs index
    setMenuTabIndex : slideIndex => ({
        type: appAN.SWITCH_MENU_TAB_INDEX,
        slideIndex
    }),

    //shop tabs index
    setShopTabIndex : slideIndex => ({
        type: appAN.SWITCH_SHOP_TAB_INDEX,
        slideIndex
    }),

    //home video lists
    //updateHomeVideoLists : videoLists => ({
    //    type: appAN.UPDATE_VIDEO_LISTS_ALL,
    //    videoLists
    //}),

    //rank tabs index
    setRankTabIndex : slideIndex => ({
        type: appAN.SWITCH_RANK_TAB_INDEX,
        slideIndex
    }),

    setVideoTabIndex : slideIndex => ({
        type: appAN.SWITCH_VIDEO_TAB_INDEX,
        slideIndex
    }),

    //更新排行榜数据
    updateRankAnchorLists : anchorLists => ({
        type: appAN.UPDATE_RANK_LISTS,
        anchorLists
    }),

    //登陆
    login : value => ({
        type: appAN.LOGIN,
        value
    }),

    //退出
    logout : () => ({
       type: appAN.LOGOUT
    }),

    //显示提示信息
    showInfoBox : (msg, style='success') => ({
        type: appAN.SHOW_INFOBOX,
        msg,
        style
    }),

    //关闭信息框
    closeInfoBox : () => ({
        type: appAN.CLOSE_INFOBOX,
    }),

    //更新用户id
    updateUID : uid => ({
        type: appAN.UPDATE_UID,
        uid
    }),

    //是弹出dialog
    openDialog : status => ({
        type: appAN.UPDATE_DIALODSTATUS,
        status
    }),

    //编辑用户信息
    editUserInfo : data => ({
       type: appAN.EDIT_USERINFO,
        data
    }),

    //是弹出dialog
    shopSelectGift : data => ({
        type: appAN.UPDATE_SHOPSELECT,
        data
    })
};
