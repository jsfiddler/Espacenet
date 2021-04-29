javascript:(()=>{    
/******************************************************************************************************************************** 
 * Use-case: If you have more than 10 pns and want to create links to Espacenet: Per field you can only insert 10 entries. Therefore, a new window will be created, with a list that contains in total maximum 20 entries per link (10x pn, 10x num).
 * Need Async to wait for user input. Literal strings and URL-decoding for Inputs!
 * Version: 2021.04.29
**********************************************************************************************************************************/    
async function f(){
  PNs= prompt("insert patentnumbers delimted by comma",);
  return PNs;
};
  
f().then(createLinks(PNs));

function createLinks(PNs){
  /*From string to array*/
  PNs=PNs.match(/\w{2,4}\d+(\w\d|\w|\d)/g);
  PNs.sort();
  L=PNs.length;
  /*Create a new window for the links*/
  espacePNsWindow = window.open("", "PN? => Links", "width=1000, height=800, top=0,left=0, resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes"); 
  espacePNsWindow.document.title=espacePNsWindow.name;
  
  elem_header=document.createElement('h1');
  elem_header.textContent='Links for your '+L+' patent numbers:';
  
  espacePNsWindow.document.body.appendChild(elem_header);

	txt_pn=encodeURIComponent('pn any "');
	txt_num=encodeURIComponent('" OR num any "');

	for (a=0; a<( (L-L%20)/20+1 ); a++){
	   txt='';
	   for (i=a*20;i<(a+1)*20;i++){
			if (i==10) txt+= txt_num;
			!PNs[i] ? '': txt+=PNs[i]+", ";
			}; 
	   b=a+1;
	   
	   _link=document.createElement('a');
	   _link.href=`https://worldwide.espacenet.com/patent/search?&q=${txt_pn}${txt.slice(0,-2)}%22`;
	   _link.target='_blank';
	   _link.textContent=`Link ${b}`;
	   
	   _list=document.createElement('li');
	   _list.setAttribute('style','list-style:circle inside');
	   _list.appendChild(_link);
	   espacePNsWindow.document.body.appendChild(_list);
	  }
}
  
})()
