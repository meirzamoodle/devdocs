"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6441],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(h,r(r({ref:n},p),{},{components:t})):o.createElement(h,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4797:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),r=["components"],l={title:"Troubleshooting when setting up your development environment for the Moodle App",sidebar_label:"Troubleshooting",sidebar_position:3,tags:["Moodle App"]},d=void 0,s={unversionedId:"moodleapp/development/setup/troubleshooting",id:"moodleapp/development/setup/troubleshooting",title:"Troubleshooting when setting up your development environment for the Moodle App",description:"This page contains a list of common errors that have been found and how to solve them. However, keep in mind that these may be platform-dependent and could not fix the problem in your machine, even if you are seeing the same error message.",source:"@site/docs/moodleapp/development/setup/troubleshooting.md",sourceDirName:"moodleapp/development/setup",slug:"/moodleapp/development/setup/troubleshooting",permalink:"/devdocs/docs/moodleapp/development/setup/troubleshooting",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/setup/troubleshooting.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653405060,formattedLastUpdatedAt:"24/05/2022",sidebarPosition:3,frontMatter:{title:"Troubleshooting when setting up your development environment for the Moodle App",sidebar_label:"Troubleshooting",sidebar_position:3,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Docker images",permalink:"/devdocs/docs/moodleapp/development/setup/docker-images"},next:{title:"Development guide",permalink:"/devdocs/docs/moodleapp/development/development-guide"}},p={},u=[{value:"General advice",id:"general-advice",level:2},{value:"I get a blank page when launching the app",id:"i-get-a-blank-page-when-launching-the-app",level:2},{value:"Strange NPM errors",id:"strange-npm-errors",level:2},{value:"I can&#39;t change the language",id:"i-cant-change-the-language",level:2},{value:"Error: <code>libsass</code> bindings not found. Try reinstalling node-sass?",id:"error-libsass-bindings-not-found-try-reinstalling-node-sass",level:2},{value:"com.android.dex.DexException: Multiple dex files define XXX",id:"comandroiddexdexexception-multiple-dex-files-define-xxx",level:2},{value:"Could not resolve all dependencies for configuration &#39;:_debugCompile&#39;.",id:"could-not-resolve-all-dependencies-for-configuration-_debugcompile",level:2},{value:"Could not find com.android.support:support-v4:XXX",id:"could-not-find-comandroidsupportsupport-v4xxx",level:2},{value:"ERROR: In <code>&lt;declare-styleable&gt;</code> FontFamilyFont, unable to find attribute android:font",id:"error-in-declare-styleable-fontfamilyfont-unable-to-find-attribute-androidfont",level:2},{value:"Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK.",id:"error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-your-android-sdk",level:2},{value:"Could not find com.android.support:support-v4:27.1.0",id:"could-not-find-comandroidsupportsupport-v42710",level:2},{value:"Error: not found: make",id:"error-not-found-make",level:2},{value:"Current working directory is not a Cordova-based project.",id:"current-working-directory-is-not-a-cordova-based-project",level:2},{value:"ReferenceError: internalBinding is not defined",id:"referenceerror-internalbinding-is-not-defined",level:2},{value:"npm update check failed",id:"npm-update-check-failed",level:2},{value:"Unhandled rejection Error: Command failed: C:cygwin64\bingit.EXE ...",id:"unhandled-rejection-error-command-failed-ccygwin64bingitexe-",level:2},{value:"The product name change (<code>&lt;name&gt;</code> tag) in config.xml is not supported dynamically",id:"the-product-name-change-name-tag-in-configxml-is-not-supported-dynamically",level:2},{value:"Failed to install &#39;cordova-plugin-x&#39;",id:"failed-to-install-cordova-plugin-x",level:2},{value:"doc.find is not a function",id:"docfind-is-not-a-function",level:2},{value:"Mac: linker code failed with exit code 1",id:"mac-linker-code-failed-with-exit-code-1",level:2},{value:"Windows: <code>npm start</code> hangs after &quot;Starting &#39;watch&#39;&quot;",id:"windows-npm-start-hangs-after-starting-watch",level:2}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page contains a list of common errors that have been found and how to solve them. However, keep in mind that these may be platform-dependent and could not fix the problem in your machine, even if you are seeing the same error message."),(0,i.kt)("h2",{id:"general-advice"},"General advice"),(0,i.kt)("p",null,"If you are stuck with an error and you can't find a way to continue, here's a list of things you can do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using git, look at the changes you have in your working directory and make sure that they aren't causing the problem. Be specially careful with changes in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),". You can see a list of the files you have modified running ",(0,i.kt)("inlineCode",{parentName:"li"},"git status"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure that you are using the proper node and npm versions. You can see it looking at the ",(0,i.kt)("inlineCode",{parentName:"li"},"engines")," key in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),". If you are using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"nvm"),", just run ",(0,i.kt)("inlineCode",{parentName:"li"},"nvm install"),"."),(0,i.kt)("li",{parentName:"ul"},"Make sure that all dependencies have been installed properly. To be extra sure, run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci"),"; this will remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules/")," folder and install all dependencies again exactly as described in your ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"."),(0,i.kt)("li",{parentName:"ul"},"If you are having issues trying to build for Android or iOS, try removing the ",(0,i.kt)("inlineCode",{parentName:"li"},"www/"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"platforms/")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins/")," folders and try again."),(0,i.kt)("li",{parentName:"ul"},"If you are using a development version, maybe the repository is broken and it's not your fault. Try checking out the ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch and see if you're getting the same error."),(0,i.kt)("li",{parentName:"ul"},"Try cloning the repository in a new folder and run through the instructions in this page again. If you can, try doing it on a different computer to make sure that you're doing everything properly and it's not a problem in your machine."),(0,i.kt)("li",{parentName:"ul"},"Try creating ",(0,i.kt)("a",{parentName:"li",href:"https://ionicframework.com/docs/cli/commands/start"},"a blank Ionic application")," and see if you're having the same problems. Make sure that you are using the same version of the main dependencies (Angular, Cordova, Ionic CLI, etc.)."),(0,i.kt)("li",{parentName:"ul"},"If you are searching for help online, maybe your problem has nothing to do with the Moodle App in particular an it's related with Ionic, Cordova, Angular, etc. Searching using the proper context will give you better solutions.")),(0,i.kt)("h2",{id:"i-get-a-blank-page-when-launching-the-app"},"I get a blank page when launching the app"),(0,i.kt)("p",null,'This error can happen when the application is launched properly but there is a runtime error. If you get a network connection error, this may be the expected behaviour. Wait until you see "Compiled successfully" in the console and reload.'),(0,i.kt)("p",null,"If that's not the case and you really are getting a blank page, look at the console and you should see some error indicating why the application is not rendering properly. Keep in mind that at the moment the application is already logging some errors and warnings, so make sure that you're not stuck trying to fix something that isn't causing the problem. You can follow any updates about this on ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-3854"},"MOBILE-3854"),"."),(0,i.kt)("p",null,"If you are not seeing any relevant logs, check out what to do on the ",(0,i.kt)("a",{parentName:"p",href:"#general-advice"},"General advice")," section."),(0,i.kt)("h2",{id:"strange-npm-errors"},"Strange NPM errors"),(0,i.kt)("p",null,"To get more debug output from npm commands, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/config"},"the available configuration flags"),". In particular try adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--loglevel verbose"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--loglevel info")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"--loglevel silly")," to the command-line."),(0,i.kt)("h2",{id:"i-cant-change-the-language"},"I can't change the language"),(0,i.kt)("p",null,"If you're getting a network error for a url like ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:8100/assets/lang/es.json"),", this probably means that you haven't installed the language packs."),(0,i.kt)("p",null,"Currently, you can install them in your machine running the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/update_lang.sh")," script, but it may not work in your system if you don't have php installed. For future improvements, you can subscribe to ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-3864"},"MOBILE-3864"),"."),(0,i.kt)("h2",{id:"error-libsass-bindings-not-found-try-reinstalling-node-sass"},"Error: ",(0,i.kt)("inlineCode",{parentName:"h2"},"libsass")," bindings not found. Try reinstalling node-sass?"),(0,i.kt)("p",null,"Most of the time, running the following command will fix the problem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm rebuild node-sass\n")),(0,i.kt)("h2",{id:"comandroiddexdexexception-multiple-dex-files-define-xxx"},"com.android.dex.DexException: Multiple dex files define XXX"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and add this code at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"configurations {\n    all*.exclude group: 'com.android.support', module: 'support-v4'\n}\n")),(0,i.kt)("h2",{id:"could-not-resolve-all-dependencies-for-configuration-_debugcompile"},"Could not resolve all dependencies for configuration ':","_","debugCompile'."),(0,i.kt)("p",null,"Open the Android SDK Manager and make sure you have installed: Android Support Repository, Android Support Library, Google Play Services and Google Repository."),(0,i.kt)("h2",{id:"could-not-find-comandroidsupportsupport-v4xxx"},"Could not find com.android.support:support-v4:XXX"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and add this code at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"configurations.all {\n    resolutionStrategy.force 'com.android.support:support-v4:24.0.0'\n}\n")),(0,i.kt)("h2",{id:"error-in-declare-styleable-fontfamilyfont-unable-to-find-attribute-androidfont"},"ERROR: In ",(0,i.kt)("inlineCode",{parentName:"h2"},"<declare-styleable>")," FontFamilyFont, unable to find attribute android:font"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and add this code at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'android {\n   compileSdkVersion 26\n   buildToolsVersion "26.0.1"\n}\n')),(0,i.kt)("h2",{id:"error-could-not-find-gradle-wrapper-within-android-sdk-might-need-to-update-your-android-sdk"},"Error: Could not find gradle wrapper within Android SDK. Might need to update your Android SDK."),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/"},"Android Studio")," and copy the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"android-studio/plugins/android/lib/templates")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"android-sdk-folder/Sdk/tools"),"."),(0,i.kt)("h2",{id:"could-not-find-comandroidsupportsupport-v42710"},"Could not find com.android.support:support-v4:27.1.0"),(0,i.kt)("p",null,"Open the file ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/android/build.gradle")," and configure like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'allprojects {\n    repositories {\n        jcenter()\n        maven {\n            url "https://maven.google.com"\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"error-not-found-make"},"Error: not found: make"),(0,i.kt)("p",null,"If you see this error in Ubuntu, run ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt-get install build-essential")," and retry."),(0,i.kt)("h2",{id:"current-working-directory-is-not-a-cordova-based-project"},"Current working directory is not a Cordova-based project."),(0,i.kt)("p",null,"If you see this error during ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start"),", run ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir www")," and retry."),(0,i.kt)("h2",{id:"referenceerror-internalbinding-is-not-defined"},"ReferenceError: internalBinding is not defined"),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/53146394/node-app-fails-to-run-on-mojave-referenceerror-internalbinding-is-not-defined"},"seems to be")," an error with ",(0,i.kt)("inlineCode",{parentName:"p"},"natives")," prior to 1.1.6. It can be fixed by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install <natives@1.1.6>"),"."),(0,i.kt)("h2",{id:"npm-update-check-failed"},"npm update check failed"),(0,i.kt)("p",null,"You may get the following error on Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"}," \u2502                   npm update check failed                     \u2502\n \u2502             Try running with sudo or get access               \u2502\n \u2502            to the local update config store via               \u2502\n \u2502 sudo chown -R $USER:$(id -gn $USER) C:\\Users\\username\\.config \u2502\n")),(0,i.kt)("p",null,"The suggested command does not work on Windows, so the solution is to manually check the ownership of all the files in ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\Users{username}.config\\configstore"),". In some cases, it can be ",(0,i.kt)("inlineCode",{parentName:"p"},"update-notifier-npm.json")," that got changed to be owned by Administrator."),(0,i.kt)("h2",{id:"unhandled-rejection-error-command-failed-ccygwin64bingitexe-"},"Unhandled rejection Error: Command failed: C:\\cygwin64\\bin\\git.EXE ..."),(0,i.kt)("p",null,"This is a common issue for Cygwin user running Node. However, you just need to ensure that ",(0,i.kt)("inlineCode",{parentName:"p"},"Msysgit")," is on your windows path and that the cygwin bin folder is not. Then always use another shell like Powershell for your Moodle App development."),(0,i.kt)("p",null,"You don't need your Cygwin bin folder on the Windows path because it automatically gets added to the path when you launch Cygwin bash."),(0,i.kt)("h2",{id:"the-product-name-change-name-tag-in-configxml-is-not-supported-dynamically"},"The product name change (",(0,i.kt)("inlineCode",{parentName:"h2"},"<name>")," tag) in config.xml is not supported dynamically"),(0,i.kt)("p",null,"This happens when you create the iOS platform with a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"<name>")," and then you change that name in config.xml. The solution seems to be removing and adding the iOS platform again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx ionic platform remove ios\nnpx ionic platform add ios\n")),(0,i.kt)("h2",{id:"failed-to-install-cordova-plugin-x"},"Failed to install 'cordova-plugin-x'"),(0,i.kt)("p",null,"Sometimes, you may see an error message similar to this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'CordovaError: Version of installed plugin: "cordova-plugin-x@x.x.x" does not satisfy dependency plugin requirement "cordova-plugin-x@>=x.x.x".\n')),(0,i.kt)("p",null,'This can happen when a cordova plugin (let\'s call it "X") is installed with an incorrect version. You can find this by removing the plugin and adding it again with the correct version:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx cordova plugin remove cordova-plugin-x\nnpx cordova plugin add cordova-plugin-x@x.x.x # Make sure to use the proper version here\n")),(0,i.kt)("p",null,"Please notice that if there is any plugin installed that depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova-plugin-x")," you'll have to remove and re-add them too."),(0,i.kt)("h2",{id:"docfind-is-not-a-function"},"doc.find is not a function"),(0,i.kt)("p",null,"This happens in some environments, the solution is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx cordova platform add ios")," before running the failing command. You should do this in a clean environment, once you've seen the error running the command may not work. Try deleting ",(0,i.kt)("inlineCode",{parentName:"p"},"www/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"platforms/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/")," before trying again."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/47404622/edit-config-for-ios-usage-descriptions-doc-find-is-not-a-function"},"Find more about this in StackOverflow")),(0,i.kt)("h2",{id:"mac-linker-code-failed-with-exit-code-1"},"Mac: linker code failed with exit code 1"),(0,i.kt)("p",null,"If you get this error when trying to build the Moodle app with XCode, some dependencies might not have installed correctly."),(0,i.kt)("p",null,"Ensure you have followed the ",(0,i.kt)("a",{parentName:"p",href:"./#mac-only-push-notifications"},"Mac only: Push notifications")," steps above (particularly opening the .xcworkspace file rather than the .xcodeproj file). Then run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd platforms/ios\npod install\n")),(0,i.kt)("p",null,"Now try running the build again in XCode."),(0,i.kt)("h2",{id:"windows-npm-start-hangs-after-starting-watch"},"Windows: ",(0,i.kt)("inlineCode",{parentName:"h2"},"npm start")," hangs after \"Starting 'watch'\""),(0,i.kt)("p",null,"If you follow the above procedure to run the app on a Windows system and get repeated 'Waiting for connectivity with NPM' like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm start\n\n> moodlemobile@3.9.5 start C:\\Users\\xxx\\workspace\\moodleapp\n> ionic serve\n\n> npm.cmd run ionic:serve:before\n\n> moodlemobile@3.9.5 ionic:serve:before C:\\Users\\xxx\\workspace\\moodleapp\n> gulp\n\n[Using gulpfile ~\\workspace\\moodleapp\\gulpfile.js\n[13:59:24](13:59:24]) Starting 'default'...\n[Starting 'lang'...\n[13:59:24](13:59:24]) Starting 'env'...\n[Finished 'env' after 802 ms\n[13:59:27](13:59:25]) Finished 'lang' after 3.4 s\n[Finished 'default' after 3.4 s\n> npm.cmd run ionic:serve -- --host=localhost --port=8100 --project=app\n[npm](13:59:27]) > moodlemobile@3.9.5 ionic:serve C:\\Users\\xxx\\workspace\\moodleapp\n[> gulp watch & NODE_OPTIONS=--max-old-space-size=4096 ng serve \"--host=localhost\" \"--port=8100\" \"--project=app\"\n[INFO](npm]) Waiting for connectivity with npm...\n[[13:59:46](npm]) Using gulpfile ~\\workspace\\moodleapp\\gulpfile.js\n[[13:59:46](npm]) Starting 'watch'...\n[Waiting for connectivity with npm...\n[INFO](INFO]) Waiting for connectivity with npm...\n[Waiting for connectivity with npm...\n[INFO](INFO]) Waiting for connectivity with npm...\n")),(0,i.kt)("p",null,"You can resolve the problem (sort of) by pressing ctrl-c to get out of it, then rerun the last command displayed, but this time with 'npx' before each of the 2 commands. (This assumes you are using a bash shell.)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'npx gulp watch & NODE_OPTIONS=--max-old-space-size=4096 npx ng serve "--host=localhost" "--port=8100" "--project=app"\n')),(0,i.kt)("p",null,"There will be a pause (a few minutes) while building everything. It should finish with the line:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},": Compiled successfully.")),(0,i.kt)("p",null,"Then you can access it by running Chrome and connecting to localhost:8100."))}m.isMDXComponent=!0}}]);