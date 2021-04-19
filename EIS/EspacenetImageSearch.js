#ImageSearch for Espacenet
javascript:(function(){  
/*VERSION: 2.0*/
  var img=document.querySelectorAll("img"); 

/*Get Titles*/
  var arrayTI=[]; 
  img.forEach(function(item,index){
     x=item.parentElement.parentElement.parentElement.parentElement.parentElement.textContent;
     arrayTI.push(x.substr(x.indexOf(".")+1));});

/*arrayTI.push(item.parentElement.parentElement.parentElement.parentElement.parentElement.textContent.split('.')[1])});*/  

/*Create a new Window!*/
EIS_Window = window.open("", "EIS_Window", "scrollbars,resizable");
/*EIS_Window = window.open("", "EIS_Window", "width=800,height=800,   top=0,left=0,scrollbars,resizable");*/


/*Create the CSS-Style and document frame*/
EIS_Window.document.write(`<html><head><style>
* {box-sizing: border-box}

/*Faster loading of the page*/
.img {
loading:lazy
}

/* Container needed to position the overlay. Adjust the width as needed */
.container {
  float: left;
  position: relative;
  width: 50%;
  max-width: 300px;
}

/* Make the image to responsive */
.image {
  display: block;
  width: 100%;
  height: auto;
}

/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

/* When you mouse over the container, fade in the overlay title */
.container:hover .overlay {
  opacity: 1;
}</style></head><body>
<h1><a href="${window.location.href}">Searched for: ${decodeURIComponent(window.location.search.substr(1))}</a></h1>
</body></html>
`);



/*Get Images*/

img.forEach((item,index)=>{
if (index>1){ 
tempElement=document.createElement("div");
tempElement.classList.add("container");
tempElement.appendChild(item);
tempElement.innerHTML+='<div class="overlay">'+'ti=%22'+`${arrayTI[index]}`+'%22</div>';

EIS_Window.document.body.appendChild(tempElement);
};
});  
})()
