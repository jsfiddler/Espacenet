/*
Open the IndexDB, to get a list of all previously viewed patent numbers
Stores those numbers in the logifle
*/


function browserDownloader(inputText,filename){
    downloadElement=document.createElement('a');
    downloadElement.setAttribute('download',filename+'.txt');
    downloadElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + inputText);
    document.body.appendChild(downloadElement);
    downloadElement.click();
    document.body.removeChild(downloadElement);
}


var connection = indexedDB.open('espacenet'); /*skip version, if you won't update it*/

	connection.onsuccess = (e) => {
		var database = e.target.result;
		var transaction = database.transaction(['espacenetDataStore']);
		var objectStore = transaction.objectStore('espacenetDataStore');
		var keys = objectStore.getAllKeys();
		var store = objectStore.getAll();
		var backUp = {};
		var A=[];
		keys.onsuccess = k => {/*wait for successfull connection to keys*/
			store.onsuccess = s => { /* & wait for successfull connection to stores*/
				
				var stores = k.target.result; /*get stores based on keys*/
				stores.forEach((e,i) => {
					backUp[e] = s.target.result[i]; /*Add all to object BackUp*/
				});
				
				Object.values(backUp.dejaVu).forEach(i=>A.push(Object.keys(i)));
        browserDownloader(A.toString(),'Espacenet-dejavuPNs');
				console.log('---Downloaded the list of deja-vu Patent numbers successfully---')
			};
		};
	};
