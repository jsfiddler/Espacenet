var userChoice=prompt('POST(1) or GET(2) or FAMN(3)','1');

var data='EP1000000';
var url_post="https://worldwide.espacenet.com/3.2/rest-services/published-data/publication/epodoc/biblio";
var url_get=`https://worldwide.espacenet.com/3.2/rest-services/published-data/publication/docdb/EP1000000/biblio`;
var url_famn=`https://worldwide.espacenet.com/3.2/rest-services/published-data/search?q=famn=`;

var init_get={
	method: 'GET', // *GET, POST, PUT, DELETE, etc.
	headers: {'Content-Type': 'application/exchange+xml'},
	//body: data	// body data type must match "Content-Type" header
};

var init_post={
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	headers: {'Content-Type': '*/*'},
	body: 'CN104799959B, CN110063806, DE102015203031, US2014134566, US2014106303, US2008153063, DE102014226497, US2007281283, EP0847732, US5219286, US2013171586, US2003108845, WO2006038877, US6692254, US2017202646, WO2011035398, WO2009033297, EP1709940, EP1709939, ES2201906, WO02062257, US2019254785, WO2017203463, US2017056134, US2018104030, EP0393324,CN104799959B, CN110063806, DE102015203031, US2014134566, US2014106303, US2008153063, DE102014226497, US2007281283, EP0847732, US5219286, US2013171586, US2003108845, WO2006038877, US6692254, US2017202646, WO2011035398, WO2009033297, EP1709940, EP1709939, ES2201906, WO02062257, US2019254785, WO2017203463, US2017056134, US2018104030, EP0393324,CN104799959B, CN110063806, DE102015203031, US2014134566, US2014106303, US2008153063, DE102014226497, US2007281283, EP0847732, US5219286, US2013171586, US2003108845, WO2006038877, US6692254, US2017202646, WO2011035398, WO2009033297, EP1709940'
};

var init_famn={
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	headers: {'Content-Type': '*/*'},
	body: '74766924, 32297916'
};

switch (userChoice){
	case "1": url=url_post; init=init_post;break;
	case "2": url=url_get; init=init_get;break;
	case "3": url=url_famn; init=init_famn;break;
	default: url=url_post; init=init_post;break;
}

  await fetch(url,init)
  .then((response)=>{return response.text()})
  .then((data)=>{console.clear();console.log(data)})
  .catch(err=>console.log(err));
