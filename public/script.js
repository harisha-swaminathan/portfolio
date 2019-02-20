$(document).ready(function() {
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 500) {
      $('body').addClass('changeColor');
      $('.about').addClass('about-title');
      
    } else {
      $('body').removeClass('changeColor');
      $('.about').removeClass('about-title');
      
    }
  });
});


function urbanOnclick(){
  var newv= document.getElementById("utext");
  newv.innerHTML= ">Urban";
  document.getElementById("ptext").innerHTML="Portraiture"
  document.getElementById("stext").innerHTML="Street"
  document.getElementById("ttext").innerHTML="travel"
}
function portOnclick(){
  var newv= document.getElementById("ptext");
  newv.innerHTML= ">Portraiture";
  document.getElementById("utext").innerHTML="Urban"
  document.getElementById("stext").innerHTML="Street"
  document.getElementById("ttext").innerHTML="travel"
}
function streetOnclick(){
  var newv= document.getElementById("stext");
  newv.innerHTML= ">Street";
  document.getElementById("ptext").innerHTML="Portraiture"
  document.getElementById("utext").innerHTML="Urban"
  document.getElementById("ttext").innerHTML="travel"
}
function travelOnclick(){
  var newv= document.getElementById("ttext");
  newv.innerHTML= ">Travel";
  document.getElementById("ptext").innerHTML="Portraiture"
  document.getElementById("stext").innerHTML="Street"
  document.getElementById("utext").innerHTML="Urban"
}
$('#urban').on('click',function(){
    $('#urbanA').show();
    $('#streetA').hide();
    $('#portraitA').hide();
    $('#modal').hide();
    $('#travelA').hide();
    $('#portmodal').hide();
    $('#travelmodal').hide();
    $('#urbanmodal').hide();
});
$('#travel').on('click',function(){
  $('#travelA').show();
  $('#urbanA').hide();
  $('#streetA').hide();
  $('#portraitA').hide();
  $('#modal').hide();
  $('#portmodal').hide();
    $('#travelmodal').hide();
    $('#urbanmodal').hide();
});
$('#street').on('click',function(){
    $('#streetA').show();
    $('#urbanA').hide();
    $('#portraitA').hide();
    $('#modal').hide();
    $('#travelA').hide();
    $('#portmodal').hide();
    $('#travelmodal').hide();
    $('#urbanmodal').hide();
});
$('#portrait').on('click',function(){
    $('#portraitA').show();
    $('#streetA').hide();
    $('#urbanA').hide();
    $('#modal').hide();
    $('#travelA').hide();
    $('#portmodal').hide();
    $('#travelmodal').hide();
    $('#urbanmodal').hide();
});

window.onload = function(){ 
  document.getElementById("home").onclick = function () {
    location.replace("index.html")
  };
};
  // modal
function openModal() {
document.getElementById('modal').style.display = "block";
$('#urbanA').hide();
$('#streetA').hide();
$('#portraitA').hide();
$('#image').hide();
}

function closeModal() {
document.getElementById('modal').style.display = "none";
$('#streetA').show();
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("slides");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
}

x[slideIndex-1].style.display = "block";

}
  // end of  modal

// Urban modal
function openModalu() {
  document.getElementById('urbanmodal').style.display = "block";
  $('#urbanA').hide();
  $('#streetA').hide();
  $('#portraitA').hide();
  $('#travelA').hide();
  }
function closeModalu() {
  document.getElementById('urbanmodal').style.display = "none";
  $('#streetA').show();
  }
  var slideIndex = 1;
  displayurban(slideIndex);
  
  function nexturban(n) {
    displayurban(slideIndex += n);
  }
  
  function currenturban(n) {
    displayurban(slideIndex = n);
  }
  
  function displayurban(n) {
  var i;
  var x = document.getElementsByClassName("urbanslides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
  
  }

  // end of Urban modal


  // portrait modal
function openModalp() {
  document.getElementById('portmodal').style.display = "block";
  $('#urbanA').hide();
  $('#streetA').hide();
  $('#portraitA').hide();
  $('#travelA').hide();
  }
function closeModalp() {
  document.getElementById('portmodal').style.display = "none";
  $('#streetA').show();
  }
  var slideIndex = 1;
  displayport(slideIndex);
  
  function nextport(n) {
    displayport(slideIndex += n);
  }
  
  function currentport(n) {
    displayport(slideIndex = n);
  }
  
  function displayport(n) {
  var i;
  var x = document.getElementsByClassName("portslides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
  
  }

  // end of portrait modal

  // travel modal
function openModalt() {
  document.getElementById('travelmodal').style.display = "block";
  $('#urbanA').hide();
  $('#streetA').hide();
  $('#portraitA').hide();
  $('#travelA').hide();
  
  }
function closeModalt() {
  document.getElementById('travelmodal').style.display = "none";
  $('#streetA').show();
  }
  var slideIndex = 1;
  displaytravel(slideIndex);
  
  function nexttravel(n) {
    displaytravel(slideIndex += n);
  }
  
  function currenttravel(n) {
  
    displaytravel(slideIndex = n);
  }
  
  function displaytravel(n) {

  var i;
  var x = document.getElementsByClassName("travelslides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
  
  }

  // end of portrait modal


