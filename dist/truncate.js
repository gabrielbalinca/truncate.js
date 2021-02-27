'use strict'
truncate(400);
function truncate(length){
  // Variable for saving the original content
  var originalText = [];
  // Saving the original content for later use
  for(var i = 0; i < document.getElementsByClassName('truncate').length; i++){
    originalText[i] = document.getElementsByClassName('truncate')[i].querySelector('p').textContent;
  }
  // Truncate
  for(var i = 0; i < document.getElementsByClassName("truncate").length; i++){
  	document.getElementsByClassName("truncate")[i].querySelector("p").textContent = document.getElementsByClassName("truncate")[i].querySelector("p").textContent.substring(0, length);
  	moreAnchor(document.getElementsByClassName("truncate")[i]);
  }
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
  // Event listeners
  // Event listener for more
  for(let i = 0; i < document.getElementsByClassName("truncate").length; i++){
  	document.getElementsByClassName("truncate")[i].addEventListener("click", function(e){
  		if(e.target.classList.contains("more")){
        			e.target.remove();
        			document.getElementsByClassName("truncate")[i].querySelector("p").textContent = originalText[i];
        			lessAnchor(document.getElementsByClassName("truncate")[i]);
      		}
    	});
  }
  // Event listener for less
  document.body.addEventListener("click", function(e){
  	if(e.target.classList.contains("less")){
      		e.target.parentNode.querySelector("p").textContent = e.target.parentNode.querySelector("p").textContent.substring(0, length);
      		moreAnchor(e.target.parentNode);
      		e.target.parentNode.querySelector("a.less").remove();
    	}
  });
}
