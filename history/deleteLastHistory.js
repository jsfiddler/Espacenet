/*Function for deleting the last history entry...*/
var deleteHistory=function(){
	var connection=indexedDB.open('espacenet');
	connection.onsuccess=(e) => {
		var db=e.target.result;
		var transaction=db.transaction('espacenetDataStore','readwrite');
		var objectStore=transaction.objectStore('espacenetDataStore');
		/*Since the object store is open now, run some operations...*/
		keys=objectStore.getAllKeys();
		stores=objectStore.getAll();
			keys.onsuccess=k=>{stores.onsuccess=s=>{
				_keys=k.target.result;_values=s.target.result;
				for (x in _keys){/*Is there a called "search"? */
					if (_keys[x]==='search') {/*Get the query of the last search*/
							var lastSSquery=_values[x]["history"][0].query.toString();
							/*Remove the first item by shifting and put it back in the DB*/
							_values[x]["history"].shift();
							objectStore.put(_values[x],_keys[x]);
							/*console.log("%cDeleted the last history element successfully","color:blue; font-size:20px");*/
							alert("deleted query:\n\n"+ lastSSquery);
						};
				};
			};};
	};
};

/*Create a button for the deleteHistory()-function*/
elem=document.createElement('p');
elem.innerHTML='delete last history <i class="fas fa-eraser"></i>';

/*Replace left nav-bar entry with new button and add click-event to this button*/
targetNode=document.querySelector('[class*="nav__bar__section--left"]');
targetNode.parentNode.replaceChild(elem,targetNode);
elem.addEventListener("click",function(){deleteHistory()},false);
