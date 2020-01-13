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

//This Way Up Fade In
			setTimeout(function(){
				$(document).ready(function(){
				$('.thisway').addClass('fadein2')
			})
			},2000);
			
//Smooth Scroll
			setTimeout(function(){
				$(document).ready(function(){
				$('html').addClass('smooth')
			})
			},500);

//Image Grid
		/*	$(document).ready(function(){
				$(".img-1").on("click", function(){
					$(".img-1").toggleClass("fullscreen");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-2").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("fullscreen");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-3").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("fullscreen");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-4").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("fullscreen");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-5").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("fullscreen");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-6").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("fullscreen");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-7").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("fullscreen");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-8").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("fullscreen");
					$(".img-9").toggleClass("hide");
				})
			})
			$(document).ready(function(){
				$(".img-9").on("click", function(){
					$(".img-1").toggleClass("hide");
					$(".img-2").toggleClass("hide");
					$(".img-3").toggleClass("hide");
					$(".img-4").toggleClass("hide");
					$(".img-5").toggleClass("hide");
					$(".img-6").toggleClass("hide");
					$(".img-7").toggleClass("hide");
					$(".img-8").toggleClass("hide");
					$(".img-9").toggleClass("fullscreen");
				})
			})*/