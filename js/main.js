// JavaScript Document

//Mobile Menu Interaction
			$(document).ready(function(){
				$(".hamburger").on("click", function(){
					$(".hamburger, .hamburger--collapse").toggleClass("is-active");
				})
			})
			$(document).ready(function(){
				$(".hamburger").on("click", function(){
					$("nav ul").toggleClass("showing");
				})
			})
			$(document).ready(function(){
				$(".contact-menu").on("click", function(){
					$("nav ul").toggleClass("showing");
					$(".hamburger, .hamburger--collapse").toggleClass("is-active");
				})
			})

			
//Smooth Scroll
			setTimeout(function(){
				$(document).ready(function(){
				$('html').addClass('smooth')
			})
			},500);

