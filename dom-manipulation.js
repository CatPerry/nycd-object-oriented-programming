 class Classic {
  constructor(art_url = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", frame = "black") {
    this.art_url = art_url;
    this.frame = frame;
  }
  
get render() {
    var newImg = document.createElement("img"); //create img on DOM
    newImg.src = this.art_url; //set img url
    newImg.setAttribute("class", this.frame); //set class and frame
    // newImg.className += this.frame;
    document.body.appendChild(newImg); //append img to body
  }
 }


var newClassic = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg", "black-border");
newClassic.render
var newClassic2 = new Classic("https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", "black-border");
newClassic2.render
var newClassic3 = new Classic("abstract-art-black-784935.jpg", "black-border");
newClassic3.render

 
// console.log(newClassic.render);
