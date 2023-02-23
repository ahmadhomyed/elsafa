// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 30.044420, lng: 31.235712 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

let nav = document.getElementById("navbar");
let toTop = document.querySelector(".top-top");
window.onscroll = function(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        nav.style.opacity =".7";
        toTop.style.display = "flex";
    }else{
        nav.style.opacity = "1";
        toTop.style.display ="none"
    }
  window.addEventListener('click',function(){
      toTop.onclick = function () {
           document.body.scrollTop = 0;
           document.documentElement.scrollTop = 0;
      };
  })
}