(this["webpackJsonptouch-pad"]=this["webpackJsonptouch-pad"]||[]).push([[0],{20:function(e,a,t){},27:function(e,a,t){e.exports=t(50)},32:function(e,a,t){},33:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(21),r=t.n(c),o=(t(32),t(33),t(34),t(2)),p=t(1);t(35);var l=function(){return s.a.createElement("div",{className:"mainPage"},s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:"mainTitle"},"welcome in the main page")),s.a.createElement("div",{className:"vh40"},s.a.createElement(o.b,{className:"mainNextButton",to:"/menu"},"Next")))};t(41);var i=function(){return s.a.createElement("div",{className:"mainPage"},s.a.createElement("div",{className:"divTitle"},s.a.createElement("div",{className:"title"},"menu")),s.a.createElement("div",{className:"menu"},s.a.createElement(o.b,{className:"choiMenu",to:"/allsounds"},s.a.createElement("div",null,"All sounds")),s.a.createElement(o.b,{className:"choiMenu",to:"/mypads"},s.a.createElement("div",null,"My pads")),s.a.createElement(o.b,{className:"choiMenu",to:"/blackSquare"},s.a.createElement("div",null,"blacksquare tests")),s.a.createElement(o.b,{className:"choiMenu",to:"/jeudechec"},s.a.createElement("div",null,"chest")),s.a.createElement(o.b,{className:"choiMenu",to:"/demineur"},s.a.createElement("div",null,"D\xe9mineur"))))},u=t(4),d=[{sounds:[{name:"SNCF ",from:"https://lasonotheque.org/UPLOAD/mp3/0564.mp3"},{name:"badum tsss",from:"https://lasonotheque.org/UPLOAD/mp3/0433.mp3"},{name:"Will",from:"https://lasonotheque.org/UPLOAD/mp3/0477.mp3"},{name:"crash",from:"crash_leger-SF.mp3"},{name:"crash2",from:"crash_leger-SF.mp3"},{name:"wilelm 2",from:"wilelm.wav"}]},{playliste:[{name:"play-perso-1",sounds:["blabla","blablolo","pkpka"]},{name:"play-perso-2",sounds:["ez","ze","rz"]},{name:"play-perso-3",sounds:["zzzzz","aaaa","ddddd"]},{name:"play-perso-4",sounds:["sdsdsdsd","ddddsdsdsd","sdsdsds"]},{name:"play-perso-5",sounds:["787878","ze8875","5848484"]},{name:"play-perso-6",sounds:["zaaaaaaaaaaaaa","aaaaaaaaaaazzzzzza","zazaz"]}]}];t(20),t(42),t(43);var m=function(e){var a=e.data;e.i,e.handlePlayPause,console.log(a.from);var t=new Audio(a.from);return Object(n.useEffect)((function(){t.load()}),[]),s.a.createElement("div",{className:"soundWidget"},s.a.createElement("div",null,a.name),s.a.createElement("div",{className:"App"},s.a.createElement("input",{type:"button",className:"btn btn-primary mr-2",value:"Play",onClick:function(){e.isPlaying||(t.play(),console.log(t.paused),e.handleSetIsPlaying(t.paused))}}),s.a.createElement("input",{type:"button",className:"btn btn-warning mr-2",value:"Pause",onClick:function(){t.pause(),console.log(t.paused),e.handleSetIsPlaying(t.paused)}}),s.a.createElement("input",{type:"button",className:"btn btn-danger mr-2",value:"Stop",onClick:function(){t.pause(),t.currentTime=0}})))};t(44);var I=function(e){return e.data,s.a.createElement("div",{className:"headerMenu"},s.a.createElement(o.b,{to:"/menu"},s.a.createElement("button",{type:"button"},"<-")))};var f=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1],r=function(e){c(e)};return s.a.createElement("div",{className:"mainPage"},s.a.createElement(I,null),s.a.createElement("div",{className:"divTitle"},s.a.createElement("div",{className:"title"},"All sounds")),s.a.createElement("div",{className:"soundsList"},d[0].sounds.map((function(e,a){return s.a.createElement(m,{i:a,handleSetIsPlaying:r,isPlaying:t,data:e})}))))};var h=function(){return s.a.createElement("div",{className:"mainPage"},s.a.createElement(I,null),s.a.createElement("div",{className:"divTitle"},s.a.createElement("div",{className:"title"},"My Pads")),s.a.createElement("div",{className:"soundsList"},d[1].playliste.map((function(e){return s.a.createElement("button",{className:"soundButton"},e.name," ")}))))};t(45);var v=function(){var e=Object(n.useState)([""]),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),p=o[0],l=o[1],i=Object(n.useState)("BASIC"),d=Object(u.a)(i,2);return d[0],d[1],Object(n.useEffect)((function(){var e=[];l("22");for(var a=0;a<4;a++){for(var t=[],n=0;n<4;n++){var s={case:"".concat(a).concat(n)};t.push(s)}e.push({row:t})}c(e)}),[]),s.a.createElement("div",{className:"mainPage"},s.a.createElement(I,null),s.a.createElement("div",{className:"tableau"},void 0===t?"":t.map((function(e,a){return void 0===e.row?"":s.a.createElement("div",{className:"row"},e.row.map((function(e){return e.case.includes(p)?s.a.createElement("button",{id:e.case,type:"button",value:e.case,className:"blackCase",onClick:function(e){}},e.case):s.a.createElement("button",{id:e.case,type:"button",value:e.case,className:"caseWithe",onClick:function(e){}},e.case)})))}))),s.a.createElement("div",{className:"controle"},s.a.createElement("button",{type:"button",onClick:function(){return function(){var e="".concat(parseInt(p[0])-1).concat(parseInt(p[1]));e[1]<=3&&e[1]>=0&&e[0]<=3&&e[0]>=0&&(console.log(e),l(e))}()}},"haut"),s.a.createElement("div",null,s.a.createElement("button",{type:"button",onClick:function(){return function(){console.log("Left");var e="".concat(parseInt(p[0])).concat(parseInt(p[1])-1);e[1]<=3&&e[1]>=0&&e[0]<=3&&e[0]>=0&&(console.log(e),l(e))}()}},"gauche"),s.a.createElement("button",{type:"button",onClick:function(){return function(){console.log("Right");var e="".concat(parseInt(p[0])).concat(parseInt(p[1])+1);e[1]<=3&&e[1]>=0&&e[0]<=3&&e[0]>=0&&(console.log(e),l(e))}()}},"droite")),s.a.createElement("button",{type:"button",onClick:function(){return function(){console.log("Down");var e="".concat(parseInt(p[0])+1).concat(parseInt(p[1]));console.log(e),e[1]<=3&&e[1]>=0&&e[0]<=3&&e[0]>=0&&(console.log(e),l(e))}()}},"bas")))};t(46);var b=function(){var e=Object(n.useState)(6),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),o=Object(u.a)(r,2),p=o[0],l=o[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){for(var e=[],a=1,n=[],s=0;s<2*t;s++)n.push(Math.floor(36*Math.random())+1);console.log(n);for(var c=0;c<t;c++){for(var r=[],o=0;o<t;o++){var p="";p=-1!==n.indexOf(a)?{coordX:o+1,coordY:c+1,behavior:"mine",clicked:!1}:{coordX:o+1,coordY:c+1,behavior:"",clicked:!1},a++,r.push(p)}e.push(r)}l(e)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(I,null),s.a.createElement("div",null,s.a.createElement("label",{for:"dificultSelect"},"dificult\xe9"),s.a.createElement("select",{name:"dificult",id:"dificultSelect",onChange:function(e){return function(e){switch(e.target.value){case"facile":c(3);break;case"normal":c(6);break;case"difficile":c(10)}}(e)}},s.a.createElement("option",{value:"facile"},"facile"),s.a.createElement("option",{value:"normal"},"normal"),s.a.createElement("option",{value:"difficile"},"difficile"))),s.a.createElement("div",{className:"mapContainer"},s.a.createElement("div",{className:"map"},p.map((function(e,a){return s.a.createElement("div",{className:"row",key:a},e.map((function(e){return s.a.createElement("div",{className:"tile",onClick:function(a){return function(e,a){if("mine"===a.behavior)e.target.classList.add("mine");else{for(var t=0,n=0;n<p.length;n++)for(var s=0;s<p[n].length;s++){var c=p[n][s];(a.coordY+1===c.coordY&&a.coordX===c.coordX||a.coordY-1===c.coordY&&a.coordX===c.coordX||a.coordY===c.coordY&&a.coordX+1===c.coordX||a.coordY===c.coordY&&a.coordX-1===c.coordX||a.coordY-1===c.coordY&&a.coordX-1===c.coordX||a.coordY-1===c.coordY&&a.coordX+1===c.coordX||a.coordY+1===c.coordY&&a.coordX-1===c.coordX||a.coordY+1===c.coordY&&a.coordX+1===c.coordX)&&"mine"===c.behavior&&(console.log(c),t++)}e.target.innerHTML=t}}(a,e)},id:"".concat(e.coordX,", ").concat(e.coordY),key:"".concat(e.coordX,", ").concat(e.coordY)})})))})))))},E=t(23),g=t(24),N=t(26),k=t(25),y=(t(47),s.a.Component,t(8)),O=t(12),j=t.n(O),x=t(17);t(49);var w=function(){var e=Object(n.useState)([""]),a=Object(u.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),o=Object(u.a)(r,2),p=o[0],l=o[1],i=Object(n.useState)(""),d=Object(u.a)(i,2),m=d[0],f=d[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),b=(v[0],v[1]),E=Object(n.useState)(!1),g=Object(u.a)(E,2),N=g[0],k=g[1];Object(n.useEffect)((function(){O()}),[]);var O=function(){for(var e=[],a=!0,t=1;t<=8;t++){for(var n=[],s=1;s<=8;s++)if(a)if(s%2!==0){var r={case:"".concat(t).concat(s),color:"caseWithe"};n.push(r)}else{var o={case:"".concat(t).concat(s),color:"caseBlack"};n.push(o)}else if(s%2!==0){var p={case:"".concat(t).concat(s),color:"caseBlack"};n.push(p)}else{var l={case:"".concat(t).concat(s),color:"caseWithe"};n.push(l)}a=!a,e.push({row:n})}e.map((function(e){return e.row.map((function(e){e.case.includes("11")&&(e.piece="TourBlancG"),e.case.includes("12")&&(e.piece="CavaBlancG"),e.case.includes("13")&&(e.piece="FouBlancG"),e.case.includes("14")&&(e.piece="RoiBlanc"),e.case.includes("15")&&(e.piece="DameBlanc"),e.case.includes("16")&&(e.piece="FouBlancD"),e.case.includes("17")&&(e.piece="CavaBlancD"),e.case.includes("18")&&(e.piece="TourBlancD"),parseInt(e.case)>=21&&parseInt(e.case)<=28&&(e.piece="PionBlanc".concat(e.case[1])),e.case.includes("81")&&(e.piece="TourNoirG"),e.case.includes("82")&&(e.piece="CavaNoirG"),e.case.includes("83")&&(e.piece="FouNoirG"),e.case.includes("84")&&(e.piece="RoiNoir"),e.case.includes("85")&&(e.piece="DameNoir"),e.case.includes("86")&&(e.piece="FouNoirD"),e.case.includes("87")&&(e.piece="CavaNoirD"),e.case.includes("88")&&(e.piece="TourNoirD"),parseInt(e.case)>=71&&parseInt(e.case)<=78&&(e.piece="PionNoir".concat(e.case[1]))}))})),c(e)},w=function(){var e=Object(x.a)(j.a.mark((function e(a,n,s){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.map((function(e){return e.row.map((function(e){return e.state="caseWithe"}))})),P(a,n,s),C(a,n,s),B(n,s);case 4:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),P=function(e,a,t){void 0!==t&&""!==t&&(!N&&e.target.id.includes("Blanc")||N&&e.target.id.includes("Noir"))&&(l(e.target.id),f(a),b(""))},B=function(e,a){var n,s=[],c=[],r=!1,o=[],p=[],l=[],i=[],u=[],d=[],m=[],I=[],f=[],h=[],v=!1,b=!1,E=[],g=[],N=!1,k=!1,O=[],j=[];t.map((function(t){return t.row.map((function(t,n){void 0!==a&&(a.includes("PionBlanc")&&(parseInt(t.case)!==parseInt(e)+10&&parseInt(t.case)!==parseInt(e)+20||(t.piece?k=!0:k||j.push(t.case)),parseInt(t.case)!==parseInt(e)+9&&parseInt(t.case)!==parseInt(e)+11||t.piece&&O.push(t.case)),a.includes("PionNoir")&&(parseInt(t.case)!==parseInt(e)-10&&parseInt(t.case)!==parseInt(e)-20||(t.piece?j=[]:j.push(t.case)),parseInt(t.case)!==parseInt(e)-9&&parseInt(t.case)!==parseInt(e)-11||t.piece&&(k=!0,O.push(t.case))),a.includes("Tour")&&(parseInt(t.case[0])===parseInt(e[0])&&parseInt(t.case[1])>parseInt(e[1])&&(t.piece?(N=!0,0===d.length&&d.push(t.case)):N||p.push(t.case)),parseInt(t.case[0])===parseInt(e[0])&&parseInt(t.case[1])<parseInt(e[1])&&(t.piece?(o=[],(u=[]).push(t.case)):o.push(t.case)),parseInt(t.case[1])===parseInt(e[1])&&parseInt(t.case[0])>parseInt(e[0])&&(t.piece?(r=!0,0===i.length&&i.push(t.case)):r||c.push(t.case)),parseInt(t.case[1])===parseInt(e[1])&&parseInt(t.case[0])<parseInt(e[0])&&(t.piece?(s=[],(l=[]).push(t.case)):s.push(t.case))),a.includes("Cava")&&(parseInt(e)-19!==parseInt(t.case)&&parseInt(e)-21!==parseInt(t.case)&&parseInt(e)+19!==parseInt(t.case)&&parseInt(e)+21!==parseInt(t.case)&&parseInt(e)+8!==parseInt(t.case)&&parseInt(e)-8!==parseInt(t.case)&&parseInt(e)+12!==parseInt(t.case)&&parseInt(e)-12!==parseInt(t.case)||(t.piece?O.push(t.case):j.push(t.case))),a.includes("Fou")&&(9*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)<parseInt(t.case)&&(t.piece?(v=!0,0===h.length&&h.push(t.case)):v||j.push(t.case)),11*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)<parseInt(t.case)&&(t.piece?(b=!0,0===f.length&&f.push(t.case)):b||j.push(t.case)),11*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)>parseInt(t.case)&&(t.piece?(E=[],(m=[]).push(t.case)):E.push(t.case)),9*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)>parseInt(t.case)&&(t.piece?(g=[],(I=[]).push(t.case)):g.push(t.case))),a.includes("Dame")&&(9*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)<parseInt(t.case)&&(t.piece?(v=!0,0===h.length&&h.push(t.case)):v||j.push(t.case)),11*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)<parseInt(t.case)&&(t.piece?(b=!0,0===f.length&&f.push(t.case)):b||j.push(t.case)),11*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)>parseInt(t.case)&&(t.piece?(E=[],(m=[]).push(t.case)):E.push(t.case)),9*parseInt(e[0]-t.case[0])+parseInt(t.case)===parseInt(e)&&parseInt(e)>parseInt(t.case)&&(t.piece?(g=[],(I=[]).push(t.case)):g.push(t.case)),parseInt(t.case[0])===parseInt(e[0])&&parseInt(t.case[1])>parseInt(e[1])&&(t.piece?(N=!0,0===d.length&&d.push(t.case)):N||p.push(t.case)),parseInt(t.case[0])===parseInt(e[0])&&parseInt(t.case[1])<parseInt(e[1])&&(t.piece?(o=[],(u=[]).push(t.case)):o.push(t.case)),parseInt(t.case[1])===parseInt(e[1])&&parseInt(t.case[0])>parseInt(e[0])&&(t.piece?(r=!0,0===i.length&&i.push(t.case)):r||c.push(t.case)),parseInt(t.case[1])===parseInt(e[1])&&parseInt(t.case[0])<parseInt(e[0])&&(t.piece?(s=[],(l=[]).push(t.case)):s.push(t.case))),a.includes("Roi")&&(parseInt(e)+9===parseInt(t.case)&&(t.piece?(v=!0,0===h.length&&h.push(t.case)):v||j.push(t.case)),parseInt(e)+11===parseInt(t.case)&&(t.piece?(b=!0,0===f.length&&f.push(t.case)):b||j.push(t.case)),parseInt(e)-11===parseInt(t.case)&&(t.piece?(E=[],(m=[]).push(t.case)):E.push(t.case)),parseInt(e)-9===parseInt(t.case)&&(t.piece?(g=[],(I=[]).push(t.case)):g.push(t.case)),parseInt(t.case[0])===parseInt(e[0])&&parseInt(t.case[1])===parseInt(e[1])+1&&(t.piece?(N=!0,0===d.length&&d.push(t.case)):N||p.push(t.case)),parseInt(t.case[0])===parseInt(e[0])&&parseInt(t.case[1])===parseInt(e[1])-1&&(t.piece?(o=[],(u=[]).push(t.case)):o.push(t.case)),parseInt(t.case[1])===parseInt(e[1])&&parseInt(t.case[0])===parseInt(e[0])+1&&(t.piece?(r=!0,0===i.length&&i.push(t.case)):r||c.push(t.case)),parseInt(t.case[1])===parseInt(e[1])&&parseInt(t.case[0])===parseInt(e[0])-1&&(t.piece?(s=[],(l=[]).push(t.case)):s.push(t.case))))}))})),O.push.apply(O,i.concat(d,Object(y.a)(u),Object(y.a)(l),h,f,Object(y.a)(I),Object(y.a)(m))),(n=j).push.apply(n,Object(y.a)(s).concat(c,p,Object(y.a)(o),Object(y.a)(E),Object(y.a)(g))),t.map((function(e){return e.row.map((function(e){j.forEach((function(a){parseInt(e.case)===parseInt(a)&&(e.state="selectable")})),void 0!==a&&a.includes("Blanc")?O.forEach((function(a){parseInt(e.case)===parseInt(a)&&e.piece.includes("Noir")&&(e.state="piecePrenable")})):void 0!==a&&a.includes("Noir")&&O.forEach((function(a){parseInt(e.case)===parseInt(a)&&e.piece.includes("Blanc")&&(e.state="piecePrenable")}))}))}))},C=function(){var e=Object(x.a)(j.a.mark((function e(a,t,n){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),s="",!1,!a.target.classList.value.includes("selectable")&&!a.target.classList.value.includes("piecePrenable")){e.next=62;break}if(!p.includes("PionNoir")){e.next=17;break}if(!(a.target.classList.value.includes("piecePrenable")&&parseInt(m)-9===parseInt(t)||parseInt(m)-11===parseInt(t))){e.next=12;break}return s=t,e.next=9,b(s);case 9:S(s,p),e.next=17;break;case 12:if(!(parseInt(m[0])>parseInt(t[0])&&parseInt(t[0])>=parseInt(m[0])-2&&parseInt(m[1])===parseInt(t[1]))){e.next=17;break}return s=t,e.next=16,b(s);case 16:S(s,p);case 17:if(!p.includes("PionBlanc")){e.next=30;break}if(!(a.target.classList.value.includes("piecePrenable")&&parseInt(m)+9===parseInt(t)||parseInt(m)+11===parseInt(t))){e.next=25;break}return s=t,e.next=22,b(s);case 22:S(s,p),e.next=30;break;case 25:if(!(a.target.classList.value.includes("selectable")&&parseInt(m[0])<parseInt(t[0])&&parseInt(t[0])<=parseInt(m[0])+2&&parseInt(m[1])===parseInt(t[1]))){e.next=30;break}return s=t,e.next=29,b(s);case 29:S(s,p);case 30:if(!p.includes("TourBlanc")&&!p.includes("TourNoir")){e.next=36;break}if(parseInt(m[1])!==parseInt(t[1])&&parseInt(m[0])!==parseInt(t[0])){e.next=36;break}return s=t,e.next=35,b(s);case 35:S(s,p);case 36:if(!p.includes("RoiBlanc")&&!p.includes("RoiNoir")){e.next=42;break}if(!(parseInt(t[1])===parseInt(m[1])&&parseInt(t[0]-1)===parseInt(m[0])||parseInt(t[1])===parseInt(m[1])&&parseInt(t[0])===parseInt(m[0]-1)||parseInt(t[1]-1)===parseInt(m[1])&&parseInt(t[0])===parseInt(m[0])||parseInt(t[1])===parseInt(m[1]-1)&&parseInt(t[0])===parseInt(m[0])||parseInt(t)===parseInt(m)+11||parseInt(t)===parseInt(m)-11||parseInt(t)===parseInt(m)-9||parseInt(t)===parseInt(m)+9)){e.next=42;break}return s=t,e.next=41,b(s);case 41:S(s,p);case 42:if(!p.includes("DameNoir")&&!p.includes("DameBlanc")){e.next=48;break}if(parseInt(t[1])!==parseInt(m[1])&&parseInt(t[0])!==parseInt(m[0])&&9*parseInt(t[0]-m[0])+parseInt(m)!==parseInt(t)&&11*parseInt(t[0]-m[0])+parseInt(m)!==parseInt(t)){e.next=48;break}return s=t,e.next=47,b(s);case 47:S(s,p);case 48:if(!p.includes("FouBlanc")&&!p.includes("FouNoir")){e.next=54;break}if(9*parseInt(t[0]-m[0])+parseInt(m)!==parseInt(t)&&11*parseInt(t[0]-m[0])+parseInt(m)!==parseInt(t)){e.next=54;break}return s=t,e.next=53,b(s);case 53:S(s,p);case 54:if(!p.includes("CavaBlanc")&&!p.includes("CavaNoir")){e.next=60;break}if(parseInt(t)-19!==parseInt(m)&&parseInt(t)-21!==parseInt(m)&&parseInt(t)+19!==parseInt(m)&&parseInt(t)+21!==parseInt(m)&&parseInt(t)+8!==parseInt(m)&&parseInt(t)-8!==parseInt(m)&&parseInt(t)+12!==parseInt(m)&&parseInt(t)-12!==parseInt(m)){e.next=60;break}return s=t,e.next=59,b(s);case 59:S(s,p);case 60:l(""),s="";case 62:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}(),S=function(e){t.map((function(a){return a.row.map((function(a){a.state="caseWithe",void 0!==a.piece&&a.piece.includes(p)&&(a.piece=""),a.case.includes(e)&&(a.piece=p)}))})),k(!N),console.log(N)};return s.a.createElement("div",{className:"mainPage"},s.a.createElement(I,null),s.a.createElement("div",{className:"tableau"},void 0===t?"":t.map((function(e,a){return void 0===e.row?"":s.a.createElement("div",{className:"row"},e.row.map((function(e){return s.a.createElement("button",{id:e.piece,type:"button",value:e.case,className:"".concat(e.state," ").concat(e.color," ").concat(p===e.piece&&""!==p?"seleced":""),onClick:function(a){return w(a,e.case,e.piece)}},e.piece)})))}))))};document.getElementsByTagName("input");var P=function(){return s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement(p.c,null,s.a.createElement(p.a,{path:"/menu"},s.a.createElement(i,null)),s.a.createElement(p.a,{path:"/allsounds"},s.a.createElement(f,null)),s.a.createElement(p.a,{path:"/mypads"},s.a.createElement(h,null)),s.a.createElement(p.a,{path:"/blackSquare"},s.a.createElement(v,null)),s.a.createElement(p.a,{path:"/jeudechec"},s.a.createElement(w,null)),s.a.createElement(p.a,{path:"/demineur"},s.a.createElement(b,null)),s.a.createElement(p.a,{exact:!0,path:"/"},s.a.createElement(l,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b0dc7739.chunk.js.map