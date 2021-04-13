javascript:(
function viewer() {
	var keyword=document.querySelector("[class~='column--ahsylRFQ']").querySelectorAll("[class='search']");
	sessionStorage.setItem('NumberOfHits',keyword.length);
	var currentPN=document.querySelector("[class~='column--ahsylRFQ']").querySelector('[data-qa="publicationNumber"]').textContent.split('-')[0];

	if ( currentPN!==sessionStorage.getItem('pn') ) {
		sessionStorage.setItem('pn',currentPN);
		keyword[0].scrollIntoView({block:'center',behavior:'smooth'});
		sessionStorage.setItem('viewed','0');
	} else {
		let x=Number(sessionStorage.getItem('viewed'));
		x+=1;
		sessionStorage.setItem('viewed',x);
		if ( x>=Number(sessionStorage.getItem('NumberOfHits')) ){
			x=0; 
			sessionStorage.setItem('viewed',x);
		};
		keyword[x].scrollIntoView({block:'center',behavior:'smooth'});
		document.querySelector("[class~='column--ahsylRFQ']").querySelector('[data-qa="publicationNumber"]').textContent=currentPN+'-'+(x+1)+'/'+sessionStorage.getItem('NumberOfHits');
		/*Added a counter to the patent number. Go to the next highlight in Espacenet*/};
	}
)();
