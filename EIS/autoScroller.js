var totalNumber=Number(document.querySelectorAll('h1')[1].textContent.split(':')[1].match(/\S+/)[0]);
var options={characterData:true,subtree:true,  characterDataOldValue: true};
var targetNode=document.querySelector('div[class*="publications-list-header__select-all-wrapper"]>button');

	observer=new MutationObserver(e=>{autoScroller(e[0]["oldValue"].split(' ')[0])});
	//observer=new MutationObserver(mutationRecords=>{console.log('Dokumente zuvor: '+mutationRecords[0]["oldValue"].split(' ')[0])});
	var targetNode=document.querySelector('div[class*="publications-list-header__select-all-wrapper"]>button');
	observer.observe(targetNode,options);


function autoScroller(targetArticle){
	if (targetArticle!==totalNumber){
		console.log(Number(targetArticle)+20);
		setTimeout(function(){document.querySelectorAll('article')[Number(targetArticle)+20].scrollIntoView()},1000);
		}

};



var endObserver_1=()=>{observer.disconnect();};

/*===============================================*/
var manualScroller=()=>{
	xx=20;
	document.querySelectorAll('article')[xx].scrollIntoView()
};
/*===============================================*/

var i=0;
// create an observer instance
targetNode=document.querySelector('#result-list > div.publications-list--mYtsKGTt');

// configuration of the observer:
var options={subtree:true, childList:false, attributeOldValue:true,attributes:true, attributeFilter:['src']};

// create an observer instance
observer2=new MutationObserver(e=>{console.log(i++)});

	// pass in the target node, as well as the observer options
	observer2.observe(targetNode,options);


var endObserver_2=()=>{observer2.disconnect()};
