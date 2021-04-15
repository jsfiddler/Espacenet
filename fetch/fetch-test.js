var URL=`https://worldwide.espacenet.com/3.2/rest-services/published-data/publication/docdb/EP1000000/biblio.json`
await fetch(URL)
.then((response) => {return response.json()})
.then( (data) => { 
	console.group("data returned from FETCH request:");
	console.dir(data);    
	console.groupEnd;    
})
.catch(err=>console.log(err))  
