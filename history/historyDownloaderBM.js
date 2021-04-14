javascript:(()=>{
  /*github: console.save Credits go to: https://github.com/Decad/Console.save*/
  (function(console){

      console.save = function(data, filename){

          if(!data) {
              console.error('Console.save: No data');
              return;
          }

          if(!filename) filename = 'console.json';

          if(typeof data === "object"){
              data = JSON.stringify(data, undefined, 4);
          }

          var blob = new Blob([data], {type: 'text/json'});
              e    = document.createEvent('MouseEvents');
              a    = document.createElement('a');

          a.download = filename;
          a.href = window.URL.createObjectURL(blob);
          a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
          e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          a.dispatchEvent(e);
      }
  })(console);

  /*developers.chrome: work with indexedDB*/
  /*History is stored inside indexedDB "espacenet". Use console.save to retrieve the history*/

  var connection=indexedDB.open('espacenet',2);

  connection.onsuccess = (e) => {
      var database 	= e.target.result;
      var transaction = database.transaction(['espacenetDataStore']);
      var objectStore = transaction.objectStore('espacenetDataStore');
    var obj_keys 	= objectStore.getAllKeys();
      var obj_values 	= objectStore.getAll();
    console.clear();
    var Backup		= {};
    obj_keys.onsuccess=_key => {
      obj_values.onsuccess=_value => {
        for (x in _value.target.result){
          if (_key.target.result[x]=="search") {
            console.save(_value.target.result[x]['history'],'espacenet_history');
            console.log('HISTORY downloaded..');
          } else {console.info('no history found')};
        };
      }
    }
  }
})()
