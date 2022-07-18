// collection of all checked boxes
var checkedBoxes = [];

// shows ticked posts after loading
$(document).ready(
	function showContentBeginning(){
		// hide all posts
		$(".post").hide();
		
		// for each checkbox check if it is checked
		$(".checkbox-header").each(function() {
			// checkbox id and name of checkbox that got checked/ unchecked
			var checkedId = "#" + $(this).attr("id")
			var checkedName = $(this).attr("name")
			
			// add (checked) or delete (unchecked) from active checkboxes
			if($(checkedId).is(":checked")) {
				checkedBoxes.push(checkedName);
				
				// iterate over each post
				$('.post').each(function() {
					var showPost = false
					var postId = "#" + $(this).attr("id")
					// check if post has checked/ unchecked checkbox
					if($(this).hasClass(checkedName)) {
						// check the which list item has the checked/ unchecked checkbox
						$(this).find('li').each(function() {
							// classes in li
							var elementClasses = $(this).attr("class").split(" ");
							var showLi = false
							for(var i = 0; i < elementClasses.length; i++) {
								// one of li's classes is in checked boxes --> show li
								if($.inArray(elementClasses[i], checkedBoxes) != -1) {
									$(postId).show()
									$(this).show()
									showLi = true
									showPost = true
									break;
								}
							}
							// none of li's classes is in checked boxes --> don't show li
							if(!showLi) {
								$(this).hide()
							}
							
						});
						if(!showPost) {
							$(this).hide()
						}
					}
					
				});
			} 
			
		
		});
	}
);

// function when checkbox gets checked 
$(document).ready(
	function checkboxUpdate(){
		// checkbox in header gets checked/ unchecked
		$(".checkbox-header").change(function() {
			// checkbox id and name of checkbox that got checked/ unchecked
			var checkedId = "#" + $(this).attr("id")
			var checkedName = $(this).attr("name")
			
			// add (checked) or delete (unchecked) from active checkboxes
			if($(checkedId).is(":checked")) {
				checkedBoxes.push(checkedName);
			} else {
				checkedBoxes.splice( $.inArray(checkedName, checkedBoxes), 1 );
			}

			// iterate over each post
			$('.post').each(function() {
				var showPost = false
				var postId = "#" + $(this).attr("id")
				// check if post has checked/ unchecked checkbox
				if($(this).hasClass(checkedName)) {
					// check the which list item has the checked/ unchecked checkbox
					$(this).find('li').each(function() {
						// classes in li
						var elementClasses = $(this).attr("class").split(" ");
						var showLi = false
						for(var i = 0; i < elementClasses.length; i++) {
							// one of li's classes is in checked boxes --> show li
							if($.inArray(elementClasses[i], checkedBoxes) != -1) {
								$(postId).fadeIn("slow")
								$(this).fadeIn("slow")
								showLi = true
								showPost = true
								break;
							}
						}
						// none of li's classes is in checked boxes --> don't show li
						if(!showLi) {
							$(this).hide()
						}
						
					});
					if(!showPost) {
						$(this).hide()
					}
				}
					
			});
			
		
		});
	}
);

// clear button
$(document).ready(
	function ClearPage(){
		$("#clearButton").click(
			function(){
				$(".post").hide();
				$(".checkbox-header").each(function() {
					$(this).prop( "checked", false );
				});
				checkedBoxes = [];
				console.log("here")
			}
		);
	}
);

// like button
$(document).ready(
	function likeUpdate(){
		$(".like").click(
			function(){
				var $this = $(this);
				var likes = $this.parent().parent().prev().find('.stats-total')
				if ($this.hasClass('liked')) {
					$this.removeClass('liked');
					var updatedLikes = parseInt(likes.text())-1
					likes.text(updatedLikes)
				} else {
					$this.addClass('liked');
					var updatedLikes = parseInt(likes.text())+1
					likes.text(updatedLikes)
				}
			}
		);
	}
);


// share button
$(document).ready(
	function sendEmail(){
		$(".share").click(
			function (event) {
				event.preventDefault();
				var email = '';
				var subject = 'Tim Bastian CV';
				var url = window.location.href; 
				var emailBody = 'Look at this CV: '+url;
				
				window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
			}
		);
	}
);

// comment button
$(document).ready(
	function commentAlert(){
		$(".comment").click(
			function (event) {
				alert("Comment deactivated")
			}
		);
	}
);


// project button
$(document).ready(
	function showProjects(){
		$("#project-button").click(
			function(){
				$(".post").hide();
				$(".checkbox-header").each(function() {
					$(this).prop( "checked", false );
				});
				checkedBoxes = [];
				$(".projects").fadeIn("slow")
			}
		);
	}
);



// function when coding gets clicked 
$(document).ready(
	function showCoding(){
		$("#coding-button").click(function() {

			checkedBoxes = []
			checkedBoxes.push("python");
			checkedBoxes.push("rprog");
			$(".checkbox-header").each(function() {
					$(this).prop( "checked", false );
			});
			$("#python-check").prop("checked", true);
			$("#rprog-check").prop("checked", true);
			$(".post").hide();
			
			// iterate over each post
			$('.post').each(function() {
				var showPost = false
				var postId = "#" + $(this).attr("id")
				// check if post has checked/ unchecked checkbox
				if(($(this).hasClass("python") || $(this).hasClass("rprog"))) {
					// check the which list item has the checked/ unchecked checkbox
					$(this).find('li').each(function() {
						// classes in li
						var elementClasses = $(this).attr("class").split(" ");
						var showLi = false
						for(var i = 0; i < elementClasses.length; i++) {
							// one of li's classes is in checked boxes --> show li
							if($.inArray(elementClasses[i], checkedBoxes) != -1) {
								$(postId).fadeIn("slow")
								$(this).fadeIn("slow")
								showLi = true
								showPost = true
								break;
							}
						}
						// none of li's classes is in checked boxes --> don't show li
						if(!showLi) {
							$(this).hide()
						}
						
					});
					if(!showPost) {
						$(this).hide()
					}
				}
					
			});
		
		});
	}
);

// function when checkbox gets checked 
$(document).ready(
	function showTrading(){
		$("#trading-button").click(function() {

			var checkedName = "trading"
			checkedBoxes = []
			checkedBoxes.push("trading");
			$(".checkbox-header").each(function() {
					$(this).prop( "checked", false );
			});
			$("#trading-check").prop("checked", true);
			$(".post").hide();
			
			// iterate over each post
			$('.post').each(function() {
				var showPost = false
				var postId = "#" + $(this).attr("id")
				// check if post has checked/ unchecked checkbox
				if($(this).hasClass(checkedName)) {
					// check the which list item has the checked/ unchecked checkbox
					$(this).find('li').each(function() {
						// classes in li
						var elementClasses = $(this).attr("class").split(" ");
						var showLi = false
						for(var i = 0; i < elementClasses.length; i++) {
							// one of li's classes is in checked boxes --> show li
							if($.inArray(elementClasses[i], checkedBoxes) != -1) {
								$(postId).fadeIn("slow")
								$(this).fadeIn("slow")
								showLi = true
								showPost = true
								break;
							}
						}
						// none of li's classes is in checked boxes --> don't show li
						if(!showLi) {
							$(this).hide()
						}
						
					});
					if(!showPost) {
						$(this).hide()
					}
				}
					
			});


			
		
		});
	}
);

// function when data gets clicked 
$(document).ready(
	function showData(){
		$("#data-button").click(function() {

			checkedBoxes = []
			checkedBoxes.push("dataviz");
			checkedBoxes.push("dataman");
			checkedBoxes.push("dataopt");
			checkedBoxes.push("databases");
			$(".checkbox-header").each(function() {
					$(this).prop( "checked", false );
			});
			$("#dataviz-check").prop("checked", true);
			$("#dataman-check").prop("checked", true);
			$("#dataopt-check").prop("checked", true);
			$("#databases-check").prop("checked", true);
			$(".post").hide();
			
			// iterate over each post
			$('.post').each(function() {
				var showPost = false
				var postId = "#" + $(this).attr("id")
				// check if post has checked/ unchecked checkbox
				if(($(this).hasClass("dataviz") || $(this).hasClass("dataman") || $(this).hasClass("dataopt") || $(this).hasClass("databases"))) {
					// check the which list item has the checked/ unchecked checkbox
					$(this).find('li').each(function() {
						// classes in li
						var elementClasses = $(this).attr("class").split(" ");
						var showLi = false
						for(var i = 0; i < elementClasses.length; i++) {
							// one of li's classes is in checked boxes --> show li
							if($.inArray(elementClasses[i], checkedBoxes) != -1) {
								$(postId).fadeIn("slow")
								$(this).fadeIn("slow")
								showLi = true
								showPost = true
								break;
							}
						}
						// none of li's classes is in checked boxes --> don't show li
						if(!showLi) {
							$(this).hide()
						}
						
					});
					if(!showPost) {
						$(this).hide()
					}
				}
					
			});
		
		});
	}
);

// function when data gets clicked 
$(document).ready(
	function showData(){
		$("#math-button").click(function() {

			checkedBoxes = []
			checkedBoxes.push("calc");
			checkedBoxes.push("la");
			checkedBoxes.push("comp");
			checkedBoxes.push("stats");
			checkedBoxes.push("logic");
			$(".checkbox-header").each(function() {
					$(this).prop( "checked", false );
			});
			$("#calc-check").prop("checked", true);
			$("#la-check").prop("checked", true);
			$("#comp-check").prop("checked", true);
			$("#stats-check").prop("checked", true);
			$("#logic-check").prop("checked", true);
			$(".post").hide();
			
			// iterate over each post
			$('.post').each(function() {
				var showPost = false
				var postId = "#" + $(this).attr("id")
				// check if post has checked/ unchecked checkbox
				if(($(this).hasClass("calc") || $(this).hasClass("la") || $(this).hasClass("comp") || $(this).hasClass("stats") || $(this).hasClass("logic"))) {
					// check the which list item has the checked/ unchecked checkbox
					$(this).find('li').each(function() {
						// classes in li
						var elementClasses = $(this).attr("class").split(" ");
						var showLi = false
						for(var i = 0; i < elementClasses.length; i++) {
							// one of li's classes is in checked boxes --> show li
							if($.inArray(elementClasses[i], checkedBoxes) != -1) {
								$(postId).fadeIn("slow")
								$(this).fadeIn("slow")
								showLi = true
								showPost = true
								break;
							}
						}
						// none of li's classes is in checked boxes --> don't show li
						if(!showLi) {
							$(this).hide()
						}
						
					});
					if(!showPost) {
						$(this).hide()
					}
				}
					
			});
		
		});
	}
);

// searchbar 
$(document).ready(function(){
  $("#searchbar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
	$(".post").show();
	$('.post').each(function() {
		$(this).toggle($(this).html().toLowerCase().indexOf(value) > -1)
	});
  });
});