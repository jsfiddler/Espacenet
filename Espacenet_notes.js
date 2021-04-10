javascript:
/*PART I: create a window to use a localFile*/
let d=new Date;
/*create the new window*/
window.document.title='Espacnet ('+d.getHours()+':'+d.getMinutes()+'h) with YS';

myWindow = window.open("", "myWindow", "width=700,height=600,   top=0,left=0,scrollbars,resizable");
var openFile = function(e) {        
        var inputFile = e.target;        
        var reader = new FileReader();
        /*Lesevorgang wurde erfolgreich beendet: reader.onload*/        
        reader.onload = function(){          
        myWindow.document.querySelector('input').remove();          
        myWindow.document.write( reader.result);        
      };        
  reader.readAsText(inputFile.files[0], 'ISO-8859-4');
  console.group('You opened the following file');
  console.log(inputFile.files[0].name);
  console.groupEnd();     
};

input_element=document.createElement('input');
  input_element.type='file';
  input_element.accept='.html, .htm';
  input_element.addEventListener('change',function(e){openFile(e);},false);
myWindow.document.body.appendChild(input_element);

/*PART II: When the URL changes, replace content of certain ID in myWindow with localStorage-content*/

/*What it does: creates an EVENT, whenever the family number changes (pushState,replaceState,popstate). 
This event should fill the innerHTML of the editable element by using the localStorage value...*/

history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'));
});

window.addEventListener('locationchange', ()=>{
if (location.pathname.indexOf('patent/search/family/')>0)
   {
    var FAMN=window.location.pathname.split('/')[4];
    myWindow.document.title='Notes for family number: '+window.location.pathname.split('/')[4];
    !localStorage.getItem(FAMN+'_notes') ? myWindow.document.getElementById('editME').textContent='Noch kein YellowSticker gesetzt' : myWindow.document.getElementById('editME').innerHTML=localStorage.getItem(FAMN+'_notes');
   };
});
