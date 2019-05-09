$(document).ready(function(){
  $(".key").click(function(){
    console.log($(this).text());
  });

  class KeyboardController {
      constructor(target) {
          this.target= $(target);
          this.element = document.getElementById("WriteRow");
          this.shift = 0
      }

      TouchKey(key) {
          if (key.text().includes("Enter")){
            this.element.innerHTML += "<br>"
          }
          else if (key.text().includes("Tab")){
            this.element.innerHTML += "&nbsp;&nbsp;&nbsp";
          }
          else if (key.text().includes("Bksp")){
            var Element1 = this.element.innerHTML
            var Element1length = this.element.innerHTML.length
            if (Element1.length > 0){
              this.element.innerHTML = Element1.substring(0, Element1.length - 1);
            }
            var Element1length2 = this.element.innerHTML.length
            if (Element1length2 == Element1length){
              var Element2 = this.element.innerHTML.lastIndexOf('&nbsp;');
              this.element.innerHTML = this.element.innerHTML.substring(0,Element2) + this.element.innerHTML.substring(Element2+6);
            }
          }
          else if (key.hasClass("key-space")){
            this.element.innerHTML += "&nbsp"
          }
          else if (key.text().includes("Shift")){
            this.shift = 1
          }
          else{
            var dsa = key.text().trim()
            if (this.shift == 0){
              dsa = dsa.toLowerCase()
              this.element.innerHTML += dsa
            }
            if (this.shift == 1){
              this.element.innerHTML += dsa
              this.shift = 0
            }
          }
      }
  }

  var KBC1 = new KeyboardController("WriteRow")

  $(".key").click(function(){
    KBC1.TouchKey($(this))
  });
});
