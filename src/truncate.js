class Truncate {
    constructor(truncateTag, truncateLength){
        this.truncateDiv = document.getElementsByClassName(truncateTag);
        this.originalText = [];

        if(truncateLength != null) this.length = truncateLength;
        else this.length = 400;

        for(let i = 0; i < this.truncateDiv.length; i++){
            this.originalText[i] = this.truncateDiv[i].querySelector('p').textContent;
        }

        for(let i = 0; i < this.truncateDiv.length; i++){
            this.truncateDiv[i].querySelector('p').textContent = this.truncateDiv[i].querySelector('p').textContent.substring(0, this.length);
            this.more(this.truncateDiv[i]);
        }

        for(let i = 0; i < this.truncateDiv.length; i++){
            this.truncateDiv[i].addEventListener('click', event => {
                if(event.target.classList.contains('more')){
                    event.target.remove();
                    event.currentTarget.querySelector("p").textContent = this.originalText[i];
                    this.less(this.truncateDiv[i]);
                }
            });
        }

        document.body.addEventListener('click', event => {
            if(event.target.classList.contains('less')){
                event.target.parentNode.querySelector('p').textContent = event.target.parentNode.querySelector('p').textContent.substring(0, this.length);
                this.more(event.target.parentNode);
                event.target.parentNode.querySelector('a.less').remove();
            }
        });
    }

    less(text){
        let lessAnchor = document.createElement("a");
        lessAnchor.setAttribute("href", "javascript:void(0);");
        lessAnchor.setAttribute("class", "less");
        lessAnchor.textContent = "Less";
        text.appendChild(lessAnchor);
        return text;
    }

    more(text){
        let moreAnchor = document.createElement("a");
        moreAnchor.setAttribute("href", "javascript:void(0)");
        moreAnchor.setAttribute("class", "more");
        moreAnchor.textContent = " ... more";
        text.appendChild(moreAnchor);
        return text;
    }
}



