"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[297],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},392:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={title:"Moodle Development Kit",tags:["tools"]},s=void 0,d={unversionedId:"development/tools/mdk",id:"development/tools/mdk",title:"Moodle Development Kit",description:"Every developer creates simple tools to avoid repeating cumbersome and/or boring tasks, and that is precisely why MDK has been created: to pack all those useful tools in a portable way across systems. Initially developed in Bash, the project moved to Python to avoid dealing with inconsistencies between Unix platforms, and eventually to support Windows.",source:"@site/general/development/tools/mdk.md",sourceDirName:"development/tools",slug:"/development/tools/mdk",permalink:"/devdocs/general/development/tools/mdk",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/mdk.md",tags:[{label:"tools",permalink:"/devdocs/general/tags/tools"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653405060,formattedLastUpdatedAt:"24/05/2022",frontMatter:{title:"Moodle Development Kit",tags:["tools"]},sidebar:"tools",previous:{title:"Development tools",permalink:"/devdocs/general/development/tools/"},next:{title:"PHP CodeSniffer",permalink:"/devdocs/general/development/tools/phpcs"}},p={},c=[{value:"Key concept",id:"key-concept",level:2},{value:"Typical workflows using MDK",id:"typical-workflows-using-mdk",level:2},{value:"Installing a new instance",id:"installing-a-new-instance",level:3},{value:"Fixing an issue",id:"fixing-an-issue",level:3},{value:"Peer reviewing a patch",id:"peer-reviewing-a-patch",level:3},{value:"Backporting a fix",id:"backporting-a-fix",level:3},{value:"Upgrading the instances",id:"upgrading-the-instances",level:3},{value:"Executing behat tests",id:"executing-behat-tests",level:3},{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading MDK",id:"upgrading-mdk",level:2},{value:"The MDK Suite",id:"the-mdk-suite",level:2},{value:"MDK Browser Extension",id:"mdk-browser-extension",level:3},{value:"MDK Authentication",id:"mdk-authentication",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Every developer creates simple tools to avoid repeating cumbersome and/or boring tasks, and that is precisely why MDK has been created: to pack all those useful tools in a portable way across systems. Initially developed in Bash, the project moved to Python to avoid dealing with inconsistencies between Unix platforms, and eventually to support Windows."),(0,i.kt)("h2",{id:"key-concept"},"Key concept"),(0,i.kt)("p",null,"The most important concept of MDK is that it works with Moodle instances. An instance of Moodle is a directory in which you have checked out a particular version together with a database using a specific database engine. This means that if you want to work on Moodle 2.3 and 2.4, using both MySQL and PostgreSQL, you will have four separate instance directories. This choice was made because it is the safest, clearest, and most straightforward solution."),(0,i.kt)("h2",{id:"typical-workflows-using-mdk"},"Typical workflows using MDK"),(0,i.kt)("p",null,"To discover what MDK can do for you, here are a few common tasks it can achieve. More on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk/wiki/Typical-workflows"},"MDK's wiki"),"."),(0,i.kt)("h3",{id:"installing-a-new-instance"},"Installing a new instance"),(0,i.kt)("p",null,"Say we need to create a new instance of Moodle 2.4 and install it with PostgreSQL. We also want the instance to be ready for development with appropriate config settings. We also want to create a bunch of user accounts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk create -i -v 24 -e pgsql -r dev users\n")),(0,i.kt)("p",null,"or the equivalent long form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk create --install --version 24 --engine pgsql --run dev users\n")),(0,i.kt)("p",null,"These options include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--install"),": launch the installation script after creating the instance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--engine"),": database engine to install the instance on (must be used with ",(0,i.kt)("inlineCode",{parentName:"li"},"--install"),"), default: ",(0,i.kt)("inlineCode",{parentName:"li"},"mysqli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--version"),": version of Moodle create an instance of (default: '",(0,i.kt)("inlineCode",{parentName:"li"},"master'"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--run"),": scripts to run after installation (default: ",(0,i.kt)("inlineCode",{parentName:"li"},"none"),")")),(0,i.kt)("p",null,"More information about scripts is available here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk/tree/master/mdk/scripts"},"https://github.com/FMCorz/mdk/tree/master/mdk/scripts")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"This is equivalent to doing"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mkdir /dir/to/stable_24/moodle\nmkdir /dir/to/stable_24/moodledata\nln -s /dir/to/stable_24/moodle /var/www/stable_24\ngit clone git://git.moodle.org/moodle.git /dir/to/moodle\ncd /dir/to/stable_24/moodle\nphp admin/cli/install.php --wwwroot## "http://localhost/stable_24" --dataroot/dir/to/stable_24/moodledata --dbtype## pgsql --dbnamestable24 --dbuser## root --dbpassroot --dbhost## localhost --fullname"Stable 24 PostgreSQL" --shortname## stable_24 --adminuseradmin --adminpass=test --allow-unstable --agree-license --non-interactive\nvim config.php\n# Add the following settings:\n# - $CFG->sessioncookiepath: /stable_24/\n# - $CFG->debug: DEBUG_DEVELOPER\n# - $CFG->debugdisplay: 1\n# - $CFG->passwordpolicy: 0\n# - $CFG->perfdebug: 15\n# - $CFG->debugpageinfo: 1\n# - $CFG->allowthemechangeonurl: 1\n# - $CFG->cachejs: 0\n# - $CFG->yuicomboloading: 0\n# Include FirePHP Core\n# Login to Moodle\n# Create 10 students, 3 teachers and 3 managers\n')))),(0,i.kt)("p",null,"You also can specify the name of the instance using the --name or -n parameter. This is necessary to avoid name conflicts when trying to create same Moodle version with different database engines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk create -i -v 24 -e mysqli -r dev users -n stable_24-mysql\n")),(0,i.kt)("h3",{id:"fixing-an-issue"},"Fixing an issue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk fix 12345\n# Committing your patch\nmdk push -t\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"This is equivalent to doing"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git branch --track MDL-12345-24 origin/MOODLE_24_STABLE\ngit checkout MDL-12345-24\n# Committing your patch\ngit push github MDL-12345-24\n# Editing the tracker issue to add\n# - Git repository URL\n# - Git branch for 2.4\n# - Git compare URL for 2.4\n")))),(0,i.kt)("h3",{id:"peer-reviewing-a-patch"},"Peer reviewing a patch"),(0,i.kt)("p",null,"Here we want to pull a patch from a tracker issue into a new testing branch, and then run the PHPUnit tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk pull 12345 -t\nmdk phpunit -r\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"This is equivalent to doing"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd /dir/to/stable_24/moodle\ngit branch --tracker MDL-12345-24-test MOODLE_24_STABLE\ngit checkout MDL-12345-24-test\ngit pull git://github.org/Someone/moodle.git MDL-12345-24\n# And now the PHPUnit part\nmkdir /dir/to/stable_24/moodledata_phpu\nvim config.php\n# To add\n# - $CFG->phpunit_dataroot = '/dir/to/stable_24/moodledata_phpu';\n# - $CFG->phpunit_prefix = 'phpu_';\nphp admin/tool/phpunit/cli/init.php\nphpunit\n")))),(0,i.kt)("p",null,"For executing only the testcases in a file you can use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk phpunit -r -u repository/tests/repository_test.php\n")),(0,i.kt)("h3",{id:"backporting-a-fix"},"Backporting a fix"),(0,i.kt)("p",null,'MDK could handle for you most of the cherry-picking work when you backport a fix. To do so, you need to have installed locally instances called "stable_XX" for each version you want to backport your fix. To do so you can use commands like:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk create -v 38 -i -r dev users makecourse -n stable_38\nmdk create -v 37 -i -r dev users makecourse -n stable_37\n")),(0,i.kt)("p",null,"Once you have the stable_XX versions, go to the instance where you have the branch you want to backport and execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk backport --versions 37 38 --push --update-tracker\n")),(0,i.kt)("p",null,"The example params are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-v 37 38")," backports the patch to the versions 3.7 and 3.8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--push")," pushes the branch to github"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--update-tracker")," updates the tracker issue")),(0,i.kt)("p",null,"After the execution, your stable_XX instances will be on the fix branch, commits are pushed to you github project and backport links will be updated in the tracker."),(0,i.kt)("p",null,"If for some reason one cherry pick could not finish successfully, mdk will ask you if you want to keep this backport or no. If you choose to keep the partial backport, your stable_XX instance will be in cherry-picking state. In that case you need to solve any conflict and use mdk to push your changes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"go to your stable_XX with cherry pick conflict"),(0,i.kt)("li",{parentName:"ol"},"solve conflicts with ",(0,i.kt)("inlineCode",{parentName:"li"},"git mergetool")," or any other tool"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"git cherry-pick --continue")),(0,i.kt)("li",{parentName:"ol"},"once all conflicts are solved, push to your repository and tracker using")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk push -t\n")),(0,i.kt)("h3",{id:"upgrading-the-instances"},"Upgrading the instances"),(0,i.kt)("p",null,"Say we need to upgrade our instances, as a new weekly release has just been made available."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk upgrade -u --all\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"This is equivalent to doing"),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# For each instance of Moodle...\ncd /dir/to/stable_24/moodle\ngit checkout MOODLE_24_STABLE\ngit fetch origin\ngit reset --hard origin/MOODLE_24_STABLE\nphp admin/cli/upgrade.php --non-interactive --allow-unstable\n")))),(0,i.kt)("h3",{id:"executing-behat-tests"},"Executing behat tests"),(0,i.kt)("p",null,"In order to get the instance ready for acceptance testing (Behat) and run the test feature(s):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk behat -r --tags=@core_completion\n")),(0,i.kt)("p",null,"For running only one feature or specific scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'mdk behat -r -n "Name of the feature/scenario"\n')),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"For a complete list of the commands MDK has to offer, read through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk#command-list"},"MDK README file")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk/wiki"},"MDK wiki"),". For more detail about each command, simply run them with the flag '--help'."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Please follow the instructions from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/mdk#installation"},"README file"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When you install MDK, you will be asked for the following information (with default responses indicated in square brackets):"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"What user are you initialising MDK for? ","[default - your current username]"),(0,i.kt)("li",{parentName:"ul"},"What is the ",(0,i.kt)("inlineCode",{parentName:"li"},"DocumentRoot")," of your virtual host? ","[",(0,i.kt)("inlineCode",{parentName:"li"},"~/www"),"]"," <- ",(0,i.kt)("strong",{parentName:"li"},"See note below")),(0,i.kt)("li",{parentName:"ul"},"Where do you want to store your Moodle instances? ","[",(0,i.kt)("inlineCode",{parentName:"li"},"~/moodles"),"]"," <- This can be in your home directory (the default) because a symlink will be created using ",(0,i.kt)("inlineCode",{parentName:"li"},"DocumentRoot")),(0,i.kt)("li",{parentName:"ul"},"What is your Github username? (Leave blank if not using Github)"),(0,i.kt)("li",{parentName:"ul"},"What is your MySQL user? ","[",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"]"),(0,i.kt)("li",{parentName:"ul"},"What is your MySQL password? ","[",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"]"),(0,i.kt)("li",{parentName:"ul"},"What is your PostgreSQL user? ","[",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"]"),(0,i.kt)("li",{parentName:"ul"},"What is your PostgreSQL password? ","[",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"]")),(0,i.kt)("p",{parentName:"div"},"By default, MDK will install instances to your home directory. A symlink will be created from your ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentRoot")," to the install location. You will need to either change the ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentRoot")," of your host to the path to your html root directory, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/www/html"),", or create a file in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/httpd/conf.d/moodlehq.conf")," that configures a virtual host in your home directory."),(0,i.kt)("p",{parentName:"div"},"You may need to set the path variable to null:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},'mdk config set path ""\n')))),(0,i.kt)("h2",{id:"upgrading-mdk"},"Upgrading MDK"),(0,i.kt)("p",null,"Every Moodle release, a new version of MDK is also being released in order to prepare for the development of the next Moodle version. To upgrade MDK:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update all of the Moodle instances: ",(0,i.kt)("inlineCode",{parentName:"li"},"mdk update --all")),(0,i.kt)("li",{parentName:"ol"},"Check out the master branch for all of your master instances, e.g. in your stable_master branch: ",(0,i.kt)("inlineCode",{parentName:"li"},"git checkout master")),(0,i.kt)("li",{parentName:"ol"},"Upgrade MDK",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Via pip: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pip install moodle-sdk --upgrade")),(0,i.kt)("li",{parentName:"ol"},"Via Homebrew: ",(0,i.kt)("inlineCode",{parentName:"li"},"brew upgrade moodle-sdk")))),(0,i.kt)("li",{parentName:"ol"},"Run MDK doctor to fix its ",(0,i.kt)("inlineCode",{parentName:"li"},"masterBranch")," configuration. ",(0,i.kt)("inlineCode",{parentName:"li"},"mdk doctor --fix --masterbranch")),(0,i.kt)("li",{parentName:"ol"},"Run MDK doctor to check the master instances. ",(0,i.kt)("inlineCode",{parentName:"li"},"mdk doctor --all"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If you don't see an error saying something like \"stable_master is on branch master instead of MOODLE_XX_STABLE\", then you're all good. Otherwise, do a hard reset your master instances:")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mdk update -c\ncd ~/moodles/[integration/stable]_master\ngit checkout master\ngit fetch `mdk config show upstreamRemote`\ngit reset --hard `mdk config show upstreamRemote`/master\n")),(0,i.kt)("h2",{id:"the-mdk-suite"},"The MDK Suite"),(0,i.kt)("p",null,"Some other tools have been developed using the name MDK as they are considered as part of the development kit but are often mistaken with the ",(0,i.kt)("strong",{parentName:"p"},"real")," MDK. The ",(0,i.kt)("strong",{parentName:"p"},"real")," MDK is the command line tool described above."),(0,i.kt)("h3",{id:"mdk-browser-extension"},"MDK Browser Extension"),(0,i.kt)("p",null,"Available for both ",(0,i.kt)("a",{parentName:"p",href:"https://addons.mozilla.org/en-US/firefox/addon/mdk-browser-extension/"},"Firefox")," and ",(0,i.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/mdk-browser-extension/iadpkkojcdoflinpncpkbonnhdlaicnc"},"Chrome"),", this is a browser extension that allows quick access to useful user-scripts. The scripts add functionality to Moodle.org, Moodle Tracker and your Moodle instances. You can find more information about it on its ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/danpoltawski/userscripts-moodle"},"public repository"),"."),(0,i.kt)("h3",{id:"mdk-authentication"},"MDK Authentication"),(0,i.kt)("p",null,"This is an authentication plugin for Moodle 2.x, which not only creates the user if it does not exist in the database yet, but also enrols it as a student, teacher or manager in all the available courses. More information about this plugin is available on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FMCorz/moodle-auth_mdk"},"public repository"),"."))}m.isMDXComponent=!0}}]);