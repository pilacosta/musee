"use strict";
var btn_menu = document.getElementById("btn-menu");
var nav_menu = document.getElementById("nav");

btn_menu.addEventListener('click', function(){
   nav_menu.classList.toggle('afficher')
})