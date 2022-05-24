"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9835],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3801:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Backporting",tags:["Processes","Core development","Integration"]},l=void 0,c={unversionedId:"development/policies/backporting",id:"development/policies/backporting",title:"Backporting",description:"Whilst we'd all like all Moodle users to be using our latest and greatest code, there is a balance to strike between improving our software and maintaining stability (both in terms of regressions, but also training and documentation materials). Large amounts of change on the stable branches make the lives difficult for institutions to manage upgrades between point releases.",source:"@site/general/development/policies/backporting.md",sourceDirName:"development/policies",slug:"/development/policies/backporting",permalink:"/devdocs/general/development/policies/backporting",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/backporting.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Integration",permalink:"/devdocs/general/tags/integration"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653405060,formattedLastUpdatedAt:"24/05/2022",frontMatter:{title:"Backporting",tags:["Processes","Core development","Integration"]},sidebar:"policies",previous:{title:"Accessibility",permalink:"/devdocs/general/development/policies/accessibility"},next:{title:"Coding style",permalink:"/devdocs/general/development/policies/codingstyle/"}},p={},u=[{value:"General policy",id:"general-policy",level:2},{value:"Process for requesting a non bug-fix backport",id:"process-for-requesting-a-non-bug-fix-backport",level:2},{value:"Polite note about bug classification",id:"polite-note-about-bug-classification",level:2},{value:"Backport fixes to unsupported branches",id:"backport-fixes-to-unsupported-branches",level:2},{value:"See also...",id:"see-also",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whilst we'd all like all Moodle users to be using our latest and greatest code, there is a balance to strike between improving our software and maintaining stability (both in terms of regressions, but also training and documentation materials). Large amounts of change on the stable branches make the lives difficult for institutions to manage upgrades between point releases."),(0,o.kt)("h2",{id:"general-policy"},"General policy"),(0,o.kt)("p",null,"Our general policy is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bug fixes will be backported to all (and only to) supported stable branches.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When fixing a bug, please provide a fix for all supported stable branches."),(0,o.kt)("li",{parentName:"ul"},"If a fix doesn't make sense to be backported to every branch, please make it clear in the issue."))),(0,o.kt)("li",{parentName:"ul"},"Improvements or new features will only land in master.")),(0,o.kt)("h2",{id:"process-for-requesting-a-non-bug-fix-backport"},"Process for requesting a non bug-fix backport"),(0,o.kt)("p",null,"Improvements or new features can be requested to be backported to the stable branches. We urge developers to consider this request carefully. In recent years, Moodle has moved to a short and predictable time based release schedule and we use a very effective distributed source control system. Both of these process changes should ensure that a change not being backported to the stable branches is not as problematic as it may have used to be."),(0,o.kt)("p",null,"Should you feel that a new feature or improvement needs backporting, please follow this process:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"File a new issue."),(0,o.kt)("li",{parentName:"ol"},'Set the issue title using our backport template guide. (i.e. "Fix forum alignment (backport of MDL-99999)").'),(0,o.kt)("li",{parentName:"ol"},'Link the original issue using link type "Will help resolve".'),(0,o.kt)("li",{parentName:"ol"},"You should include clear rationale for the request to backport")),(0,o.kt)("p",null,"The integration team will process backport requests, with the following guidelines:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The integration team will together consider each request individually considering the needs of the community (influenced by forum posts, moodle partners, nagging developers etc)."),(0,o.kt)("li",{parentName:"ol"},"Backports will happen not earlier than 3 weeks and not later than 2 months after the request was performed."),(0,o.kt)("li",{parentName:"ol"},"Rationale will be given for rejection")),(0,o.kt)("p",null,"If the backport request is approved, please follow the usual development process to submit the feature or improvement on earlier branches. Just to be clear, this means using the new bug number. So, even if the fix you are back-porting cherry-picks cleanly, you will need to amend the commit comment to use the new MDL-XXXXX number."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'It would be good practice to also add a line like "This is a backport of MDL-YYYYY." in the amended commit comment.'))),(0,o.kt)("p",null,'You can probably copy the testing instructions from the original issue. If so, make it clear you done this by saying something like "Copied from MDL-66327". Of course, if you can improve the instructions, feel free to edit. ',(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66614"},"MDL-66614")," and ",(0,o.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66327"},"MDL-66327")," are probably a reasonably good example fo what should be done."),(0,o.kt)("h2",{id:"polite-note-about-bug-classification"},"Polite note about bug classification"),(0,o.kt)("p",null,"Many issues can be appropriately classified as borderline bug-fix/improvements. We politely request that developers do not try and 'game the system' by classifying their improvements as bugs intentionally. If your fix is in a grey area, please state your case for it being a bug fix clearly. The integration team will use their discretion where necessary."),(0,o.kt)("h2",{id:"backport-fixes-to-unsupported-branches"},"Backport fixes to unsupported branches"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given the ",(0,o.kt)("a",{parentName:"li",href:"#general-policy"},"general policy")," above, only supported stable branches are candidates normally."),(0,o.kt)("li",{parentName:"ul"},"Also security, privacy, data-loss and regressions caused by any of the previous issue types are accepted to be fixed into security-only supported branches.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This doesn't include ",(0,o.kt)("a",{parentName:"p",href:"/general/development/tracker/labels"},(0,o.kt)("inlineCode",{parentName:"a"},"security_benefit")," labelled issues"),"."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apart from the previous, issues required to keep the testing infrastructure working and passing (travis, behat, phpunit, random failures, new steps availability...) will also be accepted when possible into security-only branches."),(0,o.kt)("li",{parentName:"ul"},"Finally, backport to unsupported branches only will happen when the issue is a ",(0,o.kt)("strong",{parentName:"li"},"direct regression caused by a bug fix")," introduced by the very latest releases. This applies to both security-only and out-of-support branches.")),(0,o.kt)("p",null,"A new weekly release will be performed including all the cases above, but ",(0,o.kt)("a",{parentName:"p",href:"/general/development/process#security-issues"},"security issues that follow its own special process")," and are released bi-monthly."),(0,o.kt)("h2",{id:"see-also"},"See also..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/general/development/process/integration-review"},"Integration review process")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/general/development/process"},"Process"))))}m.isMDXComponent=!0}}]);