#! /bin/bash
code-push release tcp ios/bundle/index.ios.jsbundle 1.0.1 --deploymentName Staging --description '新版本' --mandatory true

code-push release-react tcp-ios ios  --description '新版本测试'
code-push release-react tcp-andorid andorid  --description '新版本测试'