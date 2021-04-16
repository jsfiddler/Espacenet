/*Run this code to create a forward-search*/
var pnNumbers; var txt='';
famn=window.location.pathname.split('/')[4];
famn=famn.replace(/^0+/,'');
var url=`https://worldwide.espacenet.com/3.2/rest-services/published-data/search?q=+famn=`+famn;


await fetch(url)
  .then((response)=>{return response.text()})
  .then((data)=>{
	  console.clear();
	  /*create an XML-parser */
	  var parser = new DOMParser ();
	  pnNumbers = parser.parseFromString (data, 'text/xml');
	  /*Go to the respective child of the XML-DOM element*/
	  pnNumbers=pnNumbers.children[0].children[0].children[2].children;
	  /*Loop to get the textContent of this and do some text-operation on it*/
	  for (i=0;i< pnNumbers.length;i++) {txt+=pnNumbers[i].textContent.replaceAll(' ','').replaceAll('\n','')+','};
	  /*Open a new window and paste this string. */
	  window.open('https://worldwide.espacenet.com/patent/search?q=ct any "'+encodeURIComponent(txt.slice(0, -1))+'"','forwardSearch');
	  })
.catch(err=>console.log(err));
