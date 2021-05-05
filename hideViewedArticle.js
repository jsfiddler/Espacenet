javascript:
/*Toggle between hiding and displaying viewed articles*/
if (!Number(sessionStorage.getItem('articleToggle'))==1) { 
	sessionStorage.setItem('articleToggle',1);
	x=document.createElement('style');
	x.id='articleTogglerID';
	x.innerHTML='article[class*="visited"] {display:none}';
	document.head.append(x);
} else {
		sessionStorage.setItem('articleToggle',0); 
		document.getElementById('articleTogglerID').remove();
}
