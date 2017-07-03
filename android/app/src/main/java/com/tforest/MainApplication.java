package com.tforest;

import android.app.Application;

import com.elvishew.xlog.LogLevel;
import com.elvishew.xlog.XLog;
import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.jadsonlourenco.RNShakeEvent.RNShakeEventPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.jadsonlourenco.RNShakeEvent.RNShakeEventPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.microsoft.codepush.react.CodePush;
import cn.jpush.reactnativejpush.JPushPackage;
import com.jadsonlourenco.RNShakeEvent.RNShakeEventPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import cn.jpush.reactnativejpush.JPushPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import com.flurry.android.FlurryAgent;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.microsoft.codepush.react.CodePush;
import com.tforest.nativeExtention.ANativePackage;
import com.zmxv.RNSound.RNSoundPackage;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends Application implements ReactApplication {

  private boolean SHUTDOWN_TOAST = false;

  private boolean SHUTDOWN_LOG = false;

  public static CodePush myCodePush = null;
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      myCodePush = new CodePush("XimWKsXFwnW9i0cy4k4NtgVfdXu24ksvOXqog", MainApplication.this, BuildConfig.DEBUG, "http://104.250.145.227:3000");
      return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new RNSoundPackage(),
            new RNFetchBlobPackage(),
            new RNShakeEventPackage(),
              new VectorIconsPackage(),
              new RCTSplashScreenPackage(),
              new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG),
              new ReactNativeRestartPackage(),
              myCodePush,
              new ANativePackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    new FlurryAgent.Builder()
            .withLogEnabled(true)
            .build(this, "44XCPQNN74DMDBSKVXP6");
    XLog.init(LogLevel.ALL);
    SoLoader.init(this, false);
  }
}
