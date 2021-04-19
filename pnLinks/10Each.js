javascript:(()=>{    
/******************************************************************************************************************************** 
 * Aim: Per field you can only insert 10 entries. Therefore, a new window will be created, with 10 PN-entries per link.
 * Need Async to wait for user input. Literal strings and URL-decoding for Inputs!
 * Version: 2020.03.18
**********************************************************************************************************************************/    
async function f(){
  PNs= prompt("insert patentnumbers delimted by comma",);
  return PNs;
};
  
f().then(createLinks(PNs));

function createLinks(PNs){
  espaceWindow = window.open("", "espaceWindow", "width=1000,height=800,   top=0,left=0,scrollbars,resizable,toolbar,status,personalbar,minimizable,menubar");     
  txt='<h1>Splitted search results</h1><p><i>Since Espacenet does not allow more than 10 entries per field, this code splits your input in sets of 10 PNs per Link</i></p><br>';   
  espaceWindow.document.body.innerHTML=txt+"<br>";  
  PNs=PNs.match(/\w{2,4}\d+(\w\d|\w|\d)/g);
  L=PNs.length;
  espaceWindow.document.body.innerHTML+="<p>Total number of input document numbers: "+L+"<br>"; 

for (a=0; a<(Math.round(L/10)+1); a++){
   txt='';
   for (i=a*10;i<(a+1)*10;i++){txt+=PNs[i]+", "}; 
   b=a+1;
   espaceWindow.document.body.innerHTML+=`<a href='https://worldwide.espacenet.com/patent/search?&q=pn%20any%20%22${txt.substring(0,txt.length-2)}%22'>Link ${b}</a><br>`;
  }
}
  
})()
