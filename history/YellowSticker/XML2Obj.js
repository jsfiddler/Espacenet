/*XML-Parser for extracting notes from YellowStickers*/

var importedXML={};
importedXML.PN=[];
importedXML.FAMN=[];
importedXML.YS=[];

/*open a window to place an input-element inside for file-selection of a local .xml-file*/
	XMLwindow=window.open('','XMLwindow','width=500, height=500, top=0, left=0');
	
	/*anonymous function expression*/
	var openFile=function(e){
		/*Creating an instance of the FileReader*/
		reader=new FileReader();
		reader.readAsText(e.target.files[0],'ISO-8859-4');
		/*If the file was read successfully*/
		reader.onload=() => {
			data=reader.result;
			XMLwindow.close();
			
			/*Use a DOMParser to get YellowSticker content*/
			parser = new DOMParser();
			x = parser.parseFromString(data, 'text/xml');

			pns = x.querySelectorAll('snapshot[name]');
			for (i = 0; i < pns.length; i++) {
			/*=====PNs=====*/
				importedXML.PN[i]=pns[i].getAttribute('name');				
			/*=====FAMN=====*/
				z=pns[i].querySelector('field[name="FAMN"]');
				z ? importedXML.FAMN[i]=z.textContent : console.log(i,'no famn');
			/*=====YS=====*/
				sticker=pns[i].querySelector('sticker');
				sticker ? importedXML.YS[i]=sticker.textContent : console.log(i,'no YellowSticker')
			};
		};
		
	};
	
	input_element=document.createElement('input');
		input_element.type='file';
		input_element.accept='.xml';
		input_element.addEventListener('change',function(e){openFile(e);},false);
	XMLwindow.document.body.appendChild(input_element);

/*
*//*create localStorage. Best used when ESPACENET is open...*//*

for (i=0;i<importedXML.PN.length;i++) {
	if (importedXML.FAMN[i] && importedXML.YS[i]){
		key=importedXML.FAMN[i].padStart(9,'0')+'_notes';
		value=importedXML.YS[i].replaceAll('|','<br>');
		localStorage.setItem(key,value);
		console.log(i,'added YS for: '+importedXML.PN[i]);
		} else {console.log('no YS or FAMN for: '+importedXML.PN[i])};
}
*/
