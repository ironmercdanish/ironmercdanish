var m ,s ;
m = document.querySelector("#menu");
s = document.querySelector(".sidebar");
function Chat(){
      window.open(  "https://wa.me/918969248180?text=" +
         'Hello, I visited your  Website. So, Would you like to be my friend ? '
         , '_blank').focus();
    }
m.onclick = function(){
    s.classList.toggle("on");
}
function Myvoic() {
    document.getElementById("play").innerHTML = "<audio src='iamsud.mp3' autoplay></audio>"
}