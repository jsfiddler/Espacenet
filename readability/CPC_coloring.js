javascript:/*NOTES: mark any level. Shows depth of first tr-element and counts backwards. least depth: 8. Uses predefined colors. cpc.html is an iframe- work with frames.*/
_level=Number(prompt('which depth?',1));
_selector='tr.level-'+(_level-1+Number(window.frames[0].document.querySelectorAll('tr[class*=level]')[0].getAttribute('level')));

_rule=prompt('which color to use?','greenyellow');

switch(_rule){
case 'yellow0':_rule='rgba(255,255,0,0.2)';break;
case 'yellow1':_rule='rgba(255,255,0,0.5)';break;
case 'yellow2':_rule='rgba(255,255,0,1.0)';break;
case 'green0':_rule='rgba(100,255,0,0.3)';break;
case 'green1':_rule='rgba(100,255,0,0.5)';break;
case 'green2':_rule='rgba(100,255,0,0.8)';break;
case 'blue0':_rule='rgba(130,180,255,0.3)';break;
case 'blue1':_rule='rgba(130,180,255,0.5)';break;
case 'blue2':_rule='rgba(130,180,255,0.8)';break;
case 'pink0':_rule='rgba(180,20,140,0.2)';break;
case 'pink1':_rule='rgba(180,20,140,0.35)';break;
case 'pink2':_rule='rgba(180,20,140,0.57)';break;
case 'red0':_rule='rgba(220,39,67,0.4)';break;
case 'red1':_rule='rgba(220,39,67,0.6)';break;
case 'red2':_rule='rgba(220,39,67,0.9)';break;
case 'orange0':_rule='rgba(245,129,6,0.6)';break;
case 'orange1':_rule='rgba(245,129,6,0.9)';break;
case 'orange2':_rule='rgba(209,108,0,0.9)';break;
default:_rule=_rule;
};

_rule='background-color:'+_rule+'!important';
[...window.frames[0].document.querySelectorAll(`${_selector}`)].forEach(i=>i.setAttribute('style',`${_rule}`));
