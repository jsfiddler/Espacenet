/*Function for deleting the last history entry...*/
var deleteHistory=function(){
	var connection=indexedDB.open('espacenet',2);
	connection.onsuccess=(e) => {
		var db=e.target.result;
		var transaction=db.transaction('espacenetDataStore','readwrite');
		var objectStore=transaction.objectStore('espacenetDataStore');
		keys=objectStore.getAllKeys();
		stores=objectStore.getAll();
			keys.onsuccess=k=>{stores.onsuccess=s=>{
				k=k.target.result;s=s.target.result;
				for (x in k){
					if (k[x]==='search') {
							var temp1=s[x]["history"][0].query.toString();
							s[x]["history"].shift();
							objectStore.put(s[x],k[x]);
							/*console.log("%cDeleted the last history element successfully","color:blue; font-size:20px");*/
							alert("deleted query:\n\n"+ temp1);
						};
				};
			};};
	};
};

/*Create a button for the deleteHistory()-function*/
btn1=document.createElement('button');
btn1.textContent='delete last history';

/*Replace left nav-bar entry with new button and add click-event to this button*/
targetNode=document.querySelector('[class*="nav__bar__section--left"]');
targetNode.parentNode.replaceChild(btn1,targetNode);
btn1.addEventListener("click",function(){deleteHistory()},false);
