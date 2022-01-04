javascript:(()=>{
/* Bookmarklet to allow importing and exporting from Espacenets indexedDB.
 * This includes: dejaVU - see which docs you've already visited (sorted by family number),myPatentList & myPatentPublicationList - same as: MyPatents, search aka My queries, userLanguagePreference
*/
var _userChoice=prompt('import (1) or export (2) ',1);
var EspacenetBackup={};

if (_userChoice=='1' ) {
	/*named function expression*/
	var importBackup = function importFunc(){
		var connection=indexedDB.open('espacenet',2);
		connection.onsuccess=(e) => {
			var db=e.target.result;
			var transaction=db.transaction('espacenetDataStore','readwrite');
			var objectStore=transaction.objectStore('espacenetDataStore');
			/*create an Array from an Object (EspacenetBackup)*/
			Object.keys(EspacenetBackup).forEach(key => objectStore.put(EspacenetBackup[key],key));
			console.clear();
			alert('Import successful!');
		};
	};
	
	/*open a window to place an input-element inside for file-selection of a local .backup-file*/
	backupWindow=window.open('','backupWindow','width=500, height=500, top=0, left=0');
	
	/*anonymous function expression*/
	var openFile=function(e){
		/*Creating an instance of the FileReader*/
		reader=new FileReader();
		reader.readAsText(e.target.files[0],'ISO-8859-4');
		/*If the file was read successfully*/
		reader.onload=() => {
			EspacenetBackup=JSON.parse(reader.result);
			console.dir(EspacenetBackup);
			backupWindow.close();
			importBackup();
		};
		
	};
	
	input_element=document.createElement('input');
		input_element.type='file';
		input_element.accept='.json';
		input_element.addEventListener('change',function(e){openFile(e);},false);
	backupWindow.document.body.appendChild(input_element);
} else{
	var connection = indexedDB.open('espacenet', 2);

	connection.onsuccess = (e) => {
		var database = e.target.result;
		var transaction = database.transaction(['espacenetDataStore']);
		var objectStore = transaction.objectStore('espacenetDataStore');
		var keys = objectStore.getAllKeys();
		var store = objectStore.getAll();
		var backUp = {};
		keys.onsuccess = k => {
			store.onsuccess = s => {
				var stores = k.target.result;
				stores.forEach((e,i) => {
					backUp[e] = s.target.result[i];
				});
				console.log(backUp);
				downloadBackup(backUp,'test.json');
				alert('Finished downloading the backup!');
			};
		};
	};

	var downloadBackup= function downloadObject(obj){
		var filename=prompt('Enter a filename for your backup','espaceBackup');
		var blob = new Blob([JSON.stringify(obj, null, 2)], {type: 'application/json;charset=utf-8'});
		var url = URL.createObjectURL(blob);
		var elem = document.createElement('a');
		elem.href = url;
		elem.download = filename+'.json';
		document.body.appendChild(elem);
		elem.click();
		document.body.removeChild(elem);
	};
		
}
})()
