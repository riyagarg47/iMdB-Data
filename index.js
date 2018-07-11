$(document).ready(()=>{

	//location.reload();
    $(".intro-div").show();

	$('.loader').hide();  // hiding progress bar
	$("#exampleModalCenter").hide();   //hiding modal


	$('#inputTitle, #searchByTitle').show();
	$('#inputID, #searchByID').hide();
	$('#inputYear1, #inputYear2, #searchByTitleNYear').hide();


	$(".modalbtn").click(()=>{
		location.reload();
	});
 	 $(".main-div").hide();


	/* To change placeholders for different search items*/
	$("#title").click(()=>{
		$('#inputTitle, #searchByTitle').show();
		$('#inputID, #searchByID').hide();
		$('#inputYear1, #inputYear2, #searchByTitleNYear').hide();
	});

	$("#imdbID").click(()=>{
		$('#inputID, #searchByID').show();
		$('#inputTitle, #searchByTitle').hide();
		$('#inputYear1, #inputYear2, #searchByTitleNYear').hide();
		
	});

	$("#year").click(()=>{
		$('#inputYear1, #inputYear2, #searchByTitleNYear').show();
		$('#inputID, #searchByID').hide();
		$('#inputTitle, #searchByTitle').hide();
	});



	/*To reload entire page*/
	$("#main-title").click(() => {
		location.reload();
	});

	/*Fetching input from searchbar starts*/

    /*Taking Title input value and passing it as parameter in function*/
	$("#searchByTitle").click(()=>{
		if($('#inputTitle').val() == ''){
			alert("Please enter Movie Title.");
		}
		else
		{
			let myTitle = document.getElementById("inputTitle").value;
			console.log(myTitle);
			//console.log("hello");
			getresponse(myTitle, 1);
			$('#inputTitle').val('');
		}
		
	});


	/*Taking ID input value and passing it as parameter in function*/
	$("#searchByID").click(()=>{
		if($('#inputID').val() == '')
		{
			alert("Please enter Movie ID.")
		}
		else{
			let myID = document.getElementById("inputID").value;
			console.log(myID);
			getresponse(myID, 2);
			$('#inputID').val('');
		}
	});


	/*Taking Year input value and passing it as parameter in function*/
	$("#searchByTitleNYear").click(()=>{
	
		if($('#inputYear1').val() == '' && $('#inputYear2').val() !== '')
		{
      		alert("Please enter Movie Title.");
   		} 
   		else if($('#inputYear1').val() !== '' && $('#inputYear2').val() == '')
   		{
   			alert("Please enter Movie Year.");
		} 
		else if($('#inputYear1').val() == '' && $('#inputYear2').val() == '')
		{
			alert("Please enter Movie Title & Year.");
		} 
		else
		{
			let myTitle = document.getElementById("inputYear1").value;
			let myYear = document.getElementById("inputYear2").value;
			getresponse(myTitle, myYear);
			$('#inputYear1').val('');
			$('#inputYear2').val('');
		}
	});
});




	/*Fetching input from searchbar ends*/

	let getresponse = (x, num) =>{
			console.log("function");
			var link ="";

			if(x !== undefined && num == 1)
			{ 
				link+=`https://www.omdbapi.com/?t=${x}&apikey=dae05981`;
				console.log("title link")
			}
			else if(x !== undefined && num == 2)
			{
				link+=`https://www.omdbapi.com/?i=${x}&apikey=dae05981`;
			}
			else if((x !== undefined && num!== 1) && (x !== undefined && num!== 2))
			{
				link+=`https://www.omdbapi.com/?t=${x}&y=${num}&apikey=dae05981`;
			}
			else{}

				// To get response
				$.ajax({
					type:"GET",
					url:link,
					success: (response) => {
 							console.log("hello");
						/*Condition to be executed when response is true*/	
						if(response.Response !== "False"){
                               console.log("response is true");
                               $(".intro-div").hide();
							$(".main-div").show();

							/*To fetch Title*/
							if(response.Title !== undefined && response.Title !== null)
								{
									$("#movieTitle").text(response.Title);
								}
							else{}

							/*To fetch Released*/
							if(response.Released !== undefined && response.Released !== null)
								{
									$("#movieReleased").text(response.Released);
								}
							else{}

							/*To fetch ID*/
							if(response.imdbID !== undefined && response.imdbID !== null)
								{
									$("#movieID").text(response.imdbID);
								}
							else{}
							/*To fetch Type*/
							if(response.Type !== undefined && response.Type !== null)
								{
									$("#movieType").text(response.Type);
								}
							else{}

							/*To fetch Year*/
							if(response.Year !== undefined && response.Year !== null)
								{
									$("#movieYear").text(response.Year);
								}
							else{}

							/*To fetch Rated*/
							if(response.Rated !== undefined && response.Rated !== null)
								{
									$("#movieRated").text(response.Rated);
								}
							else{}
								/*To fetch Runtime*/
							if(response.Runtime !== undefined && response.Runtime !== null)
								{
									$("#movieRuntime").text(response.Runtime);
								}
							else{}

							/*To fetch Genre*/
							if(response.Genre !== undefined && response.Genre !== null)
								{
									$("#movieGenre").text(response.Genre);
								}
							else{}

							/*To fetch Director*/
							if(response.Director !== undefined && response.Director !== null)
								{
									$("#movieDirector").text(response.Director);
								}
							else{}
							/*To fetch Actors*/
							if(response.Actors !== undefined && response.Actors !== null)
								{
									$("#movieActor").text(response.Actors);
								}
							else{}
							/*To fetch Writer*/
							if(response.Writer !== undefined && response.Writer !== null)
								{
									$("#movieWriter").text(response.Writer);
								}
							else{}

							/*To fetch Plot*/
							if(response.Plot !== undefined && response.Plot !== null)
								{
									$("#moviePlot").text(response.Plot);
								}
							else{}

							/*To fetch Language*/
							if(response.Language !== undefined && response.Language !== null)
								{
									$("#movieLanguage").text(response.Language);
								}
							else{}
							/*To fetch Country*/
							if(response.Country !== undefined && response.Country !== null)
								{
									$("#movieCountry").text(response.Country);
								}
							else{}

							/*To fetch Awards*/
							if(response.Awards !== undefined && response.Awards !== null)
								{
									$("#movieAwards").text(response.Awards);
								}
							else{}
							/*To fetch Poster*/
							if(response.Poster !== undefined && response.Poster !== null)
								{
									$("#moviePoster").attr('src',response.Poster);
								}
							else{}
								/*To fetch default Poster*/
							if(response.Poster == undefined && response.Poster == null)
								{
									$("#moviePoster").attr('src',dummy.jpg);
								}
							else{}

							/*To fetch Metascore*/
							if(response.Metascore !== undefined && response.Metascore !== null)
								{
									$("#movieMetascore").text(response.Metascore);
								}
							else{}

							/*To fetch imdbRating*/
							if(response.imdbRating !== undefined && response.imdbRating !== null)
								{
									$("#movieImdbRating").text(response.imdbRating);
								}
							else{}
							/*To fetch imdbVotes*/
							if(response.imdbVotes !== undefined && response.imdbVotes !== null)
								{
									$("#movieImdbVotes").text(response.imdbVotes);
								}
							else{}
							/*To fetch DVD*/
							if(response.DVD !== undefined && response.DVD !== null)
								{
									$("#movieDVD").text(response.DVD);
								}
							else{}
							/*To fetch BoxOffice*/
							if(response.BoxOffice !== undefined && response.BoxOffice !== null)
								{
									$("#movieBoxOffice").text(response.BoxOffice);
								}
							else{}

							/*To fetch Production*/
							if(response.Production !== undefined && response.Production !== null)
								{
									$("#movieProduction").text(response.Production);
								}
							else{}
							/*To fetch Website*/
							if(response.Website !== undefined && response.Website !== null)
								{
									$("#movieWebsite").text(response.Website);
								}
							else{}
							/*To fetch Response*/
							if(response.Response !== undefined && response.Response !== null)
								{
									$("#movieResponse").text(response.Response);
								}
							else{}

							/*To fetch Ratings with source & value*/
							if(response.Ratings !== undefined && response.Ratings !== null)
								{
									let allRatings = "";
									let theRatings = response.Ratings;
									for(r of theRatings)
									{
										allRatings+= (r.Source +" ("+r.Value+") | ");
										console.log(allRatings);
									}
									$("#movieRatings").text(allRatings);
								}
							else{}


						}
						
						/*Condition to be executed when response is false*/
						else{
							$(".main-div").hide();
							$("#exampleModalCenter").modal('show');
							
						}
					},




					timeout:10000,

					error: (request, errorType, errorMessage) => {
						console.log("error caught");
						 if(errorType==="timeout")
						  	{
						 	alert("Request timed out.");      
				        	} 
				        else {
				            console.log("success");
				        	}
					},

					beforeSend: () => {
						console.log("before send");
						$('.loader').show();
						//$('#inputTitle, #searchByTitle').show();
						//$('#inputID, #searchByID').hide();
						//$('#inputYear1, #inputYear2, #searchByTitleNYear').hide();
						console.log("Sending Req");
					},

					complete : () => {
							console.log("complete");
							$('.loader').hide();
			               	//$('#inputTitle, #searchByTitle').show();
							//$('#inputYear1, #inputYear2, #searchByTitleNYear').hide();
							//$('#inputID, #searchByID').hide();

			      }



		});


	}





/*
Ratings > Source
*/