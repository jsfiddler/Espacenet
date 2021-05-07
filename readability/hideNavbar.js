javascript:
/*is "readability in sessionStorage 0, undefined or null?*/
if (!sessionStorage.getItem('readability')==1) { 
	/*Create a new key-value pair in sessionStorage.*/
	sessionStorage.setItem('readability',1);
	/*hide the navbar*/
	document.querySelector('nav').setAttribute('style','display:none');
	document.querySelector('[class*=breadcrumbs]').setAttribute('style','display:none');
}
else {
	/*seems like you have hidden it- undo those changes!*/
	sessionStorage.setItem('readability',0); 
	document.querySelector('nav').setAttribute('style','display:visible');
	document.querySelector('[class*=breadcrumbs]').setAttribute('style','display:visible');
};
