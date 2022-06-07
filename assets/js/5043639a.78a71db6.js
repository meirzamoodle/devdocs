"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8080],{11797:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),i=r(13904),l=["components"],n={title:"Moodle 3.7.3",tags:["Release notes","Moodle 3.7"],sidebar_position:3,moodleVersion:"3.7.3"},d=void 0,m={unversionedId:"releases/3.7/3.7.3",id:"releases/3.7/3.7.3",title:"Moodle 3.7.3",description:"Release date: 11 November 2019",source:"@site/general/releases/3.7/3.7.3.md",sourceDirName:"releases/3.7",slug:"/releases/3.7/3.7.3",permalink:"/devdocs/general/releases/3.7/3.7.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.7/3.7.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.7",permalink:"/devdocs/general/tags/moodle-3-7"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654601675,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:3,frontMatter:{title:"Moodle 3.7.3",tags:["Release notes","Moodle 3.7"],sidebar_position:3,moodleVersion:"3.7.3"},sidebar:"releaseNotes",previous:{title:"Moodle 3.7.2",permalink:"/devdocs/general/releases/3.7/3.7.2"},next:{title:"Moodle 3.7.4",permalink:"/devdocs/general/releases/3.7/3.7.4"}},p={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"For developers",id:"for-developers",level:3},{value:"Security fixes and improvements",id:"security-fixes-and-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:3},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 11 November 2019"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.7.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.7.3"),"."),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46978"},"MDL-46978")," - Edit grade item changes visibility of category total"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63895"},"MDL-63895"),' - Profile / Participants list: Have roles with "Capabilities/moodle/course:viewsuspendedusers" respect the given setting'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61121"},"MDL-61121")," - Assignment accessibility correct use of tables and toggleable +/- link"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66409"},"MDL-66409")," - Lesson's numerical answers with value 0 are deleted on edit"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62915"},"MDL-62915")," - Privacy API allows Primary Admin Account to be deleted"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66433"},"MDL-66433")," - Courses with course visibility set to hide should be labelled 'Hidden from students' in the course overview (backport of ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65621"},"MDL-65621"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66156"},"MDL-66156")," - Deleting a course that's been starred causes 'invalidrecord: Can't find data record in database table course.' error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64064"},"MDL-64064")," - Timeline block item dates should include the year"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66091"},"MDL-66091")," - Analytics upcoming activities due notification and prediction should be clearer"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51327"},"MDL-51327")," - Unzipped Embedded Files Disappear when Topic is Saved"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66946"},"MDL-66946"),' - Teachers appear in quiz reports when "enrolled users who have, or have not, attempted the quiz" option selected'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66801"},"MDL-66801")," - Moodle XML question export/import does not include question-category idnumbers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66656"},"MDL-66656")," - Social Format Course-Edit Summary Icon leads to 'File Not Found'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66197"},"MDL-66197")," - When installing multiple languages with parents only the first parent is installed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66090"},"MDL-66090")," - Upcoming activities due notification email should come from the support contact"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63250"},"MDL-63250")," - RecordRTC and assignment: Players are too big"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65310"},"MDL-65310")," - Activities with Available from date and without deadline show as overdue in Timeline Block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66450"},"MDL-66450")," - User data label should wrap in enrol users modal window"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66247"},"MDL-66247")," - Notification focus is not ARIA compliant"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66915"},"MDL-66915")," - Assignment notifications with marking workflow get stuck in cron"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66764"},"MDL-66764"),' - Quiz "Try another question like this one" repeats random questions too often'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66851"},"MDL-66851")," - Hidden courses visible in block_starredcourses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66293"},"MDL-66293")," - Pagination overflows modal window on add random question"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66548"},"MDL-66548")," - Timer Issue - Conflict between Classic Theme and Quiz Setting"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66864"},"MDL-66864")," - Upgrade fails with error 'number of parameters must be between 0 and 65535' on large sites"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66328"},"MDL-66328")," - Groups overview runs out of memory on very large courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65429"},"MDL-65429")," - Include unsubscribes in the forum subscription cache to improve performance")),(0,s.kt)("h3",{id:"for-developers"},"For developers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66675"},"MDL-66675")," - Add pause on fail option to behat"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66335"},"MDL-66335")," - Behat: new steps to navigate directly to a pages for any plugin, possibly while logging in")),(0,s.kt)("h2",{id:"security-fixes-and-improvements"},"Security fixes and improvements"),(0,s.kt)("h3",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=393582"},"MSA-19-0024")," Assigned Role in Cohort did not un-assign on removal"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=393583"},"MSA-19-0025")," Add additional verification for some OAuth 2 logins to prevent account compromise"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=393584"},"MSA-19-0026")," Blind XSS reflected in some locations where user email is displayed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=393585"},"MSA-19-0027")," Open redirect in Lesson edit page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=393586"},"MSA-19-0028")," Email media URL tokens were not checking for user status"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=393587"},"MSA-19-0029")," Reflected XSS possible from some fatal error messages")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.7.3"},"Notes de mise \xe0 jour de Moodle 3.7.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.7.3"},"Notas de Moodle 3.7.3"))))}k.isMDXComponent=!0}}]);