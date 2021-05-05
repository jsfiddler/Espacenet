javascript:
if (!Number(sessionStorage.getItem('readability'))==1) { 
	sessionStorage.setItem('readability',1);
	document.querySelector('nav').setAttribute('style','display:none');
	document.querySelector('[class*=breadcrumbs]').setAttribute('style','display:none');
}
else {
	sessionStorage.setItem('readability',0); 
	document.querySelector('nav').setAttribute('style','display:visible');
	document.querySelector('[class*=breadcrumbs]').setAttribute('style','display:visible');
};
