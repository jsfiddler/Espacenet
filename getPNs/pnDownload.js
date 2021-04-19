(function (){
var txt='';
document.querySelectorAll('article div[class*=h3]>span').forEach(pn =>{txt+=pn.textContent.match(/\S+/i)[0]+', '});
txt.length>2 ? txt=txt.slice(0,-2) :'';
var d= new Date();
var timestamp=d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+'_'+d.getHours()+d.getMinutes();

downASfile('patent numbers_'+timestamp+'.txt',txt);
}());

function downASfile(filename,data){
	var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + data);
			element.setAttribute('download', filename);
			element.style.display = 'none';
			document.body.appendChild(element);  
			element.click();
			document.body.removeChild(element);
};
