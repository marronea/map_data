const key = 'pk.eyJ1IjoidG9ueWhvbXkiLCJhIjoiY2ttYmRyczRuMDMxdDJubzZtd2E3MWkzeiJ9.98683cE6QU_b7OHDKxej0A';

const options = {
  lat: 50,
  lng: -50,
  zoom: 2,
  style: 'mapbox://styles/tonyhomy/ckmbdso2p86de17qqvo17hdmo',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}


function draw() {
   clear();
  //noFill();
  stroke(0);
  strokeWeight(5);
  const zoom = myMap.zoom();
  const aruba = myMap.latLngToPixel(12.4902998,-69.9609842);
  ellipse(aruba.x, aruba.y, 10 * zoom, 10 * zoom);
  if (dist(aruba.x, aruba.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Aruba",aruba.x,aruba.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
    const uk = myMap.latLngToPixel(53.3781,-1.4360);
  ellipse(uk.x, uk.y, 10 * zoom, 10 * zoom);
  if (dist(uk.x, uk.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("England",uk.x,uk.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
 
  const jamaica = myMap.latLngToPixel(17.9,-77.2975);
  ellipse(jamaica.x, jamaica.y, 10 * zoom, 10 * zoom);
  if (dist(jamaica.x, jamaica.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Jamaica",jamaica.x,jamaica.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
    const mexico = myMap.latLngToPixel(20,-100.2975);
  ellipse(mexico.x, mexico.y, 10 * zoom, 10 * zoom);
  if (dist(mexico.x, mexico.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Mexico",mexico.x,mexico.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
      const switzerland = myMap.latLngToPixel(47,7.8);
  ellipse(switzerland.x, switzerland.y, 10 * zoom, 10 * zoom);
  if (dist(switzerland.x, switzerland.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Switzerland",switzerland.x,switzerland.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
     const italy = myMap.latLngToPixel(43,12.8);
  ellipse(italy.x, italy.y, 10 * zoom, 10 * zoom);
  if (dist(italy.x, italy.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Italy",italy.x,italy.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
     const austria = myMap.latLngToPixel(47.5,15.3);
  ellipse(austria.x, austria.y, 10 * zoom, 10 * zoom);
  if (dist(austria.x, austria.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Austria",austria.x,austria.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
    const germany = myMap.latLngToPixel(50,10);
  ellipse(germany.x, germany.y, 10 * zoom, 10 * zoom);
  if (dist(germany.x, germany.y, mouseX, mouseY) < (zoom * 10) / 2) {
   
     textSize(32);
    fill(255);
      strokeWeight(2);

    text("Germany",germany.x,germany.y);
     
     fill(0, 100);
  } else {
    fill(255, 100);
  }
  
  
}

$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});