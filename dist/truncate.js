'use strict'
// Length
var textTruncateLength = 400;

// More anchor
function moreAnchor(text){
    var moreAnchor = document.createElement("a");
    moreAnchor.setAttribute("href", "javascript:void(0)");
    moreAnchor.setAttribute("class", "more");
    moreAnchor.textContent = " ... more";
    text.appendChild(moreAnchor);
    return text;
}

// Less anchor
function lessAnchor(text){
    var lessAnchor = document.createElement("a");
    lessAnchor.setAttribute("href", "javascript:void(0);");
    lessAnchor.setAttribute("class", "less");
    lessAnchor.textContent = "Less";
    text.appendChild(lessAnchor);
    return text;
}

// Get the content
var div = document.getElementsByClassName("truncate");

// Duplicating the text
var originalText = [];
for(var i = 0; i < div.length; i++){
	originalText[i] = div[i].querySelector("p").textContent;
}

// Truncate
for(var i = 0; i < div.length; i++){
	div[i].querySelector("p").textContent = div[i].querySelector("p").textContent.substring(0, textTruncateLength);
	moreAnchor(div[i]);
}

// Event listeners
// Event listener for more
for(let i = 0; i < div.length; i++){
	div[i].addEventListener("click", function(e){
		if(e.target.classList.contains("more")){
      			e.target.remove();
      			div[i].querySelector("p").textContent = originalText[i];
      			lessAnchor(div[i]);
    		}
  	});
}
// Event listener for less
document.body.addEventListener("click", function(e){
	if(e.target.classList.contains("less")){
    		e.target.parentNode.querySelector("p").textContent = e.target.parentNode.querySelector("p").textContent.substring(0, textTruncateLength);
    		moreAnchor(e.target.parentNode);
    		e.target.parentNode.querySelector("a.less").remove();
  	}
});
