//for button click
let search = 0;
//for link
let link;
//for title
let title;
//for year
let year;
$(document).ready(() =>{
	//if first(title) search is clicked
	$('#search1').click(() =>{
		search = 1;
		checkValidation();
	});
	//if second(title & year) search is clicked
	$('#search2').click(() =>{
		search = 2;
		checkValidation();
	});
	//if third(id) search is clicked
	$('#search3').click(() =>{
		search = 3;
		checkValidation();
	});
})
//to check validations and creating links
let checkValidation = () =>{
	//for search by title
	if(search == 1){
		//fetching title entered
		title = $('#title1').val();
		//validation
		if(title == ""){
			alert("Enter movie title");
		}
		//assigning link and calling getMovieDetails()
		else{
			//to add '+' in place of space
			title = title.split(' ').join('+');
			link = `https://www.omdbapi.com/?apikey=2ea2f91b&t=${title}`;
			getMovieDetails();
		}
	}
	//for search by title & year
	else if(search == 2){
		title = $('#title2').val();
		year =  $('#year').val();
		//validation
		if(title == "" && year ==""){
			alert("Enter movie title and year");
		}
		else if(title == ""){
			alert("Enter movie title");
		}
		else if(year == ""){
			alert("Enter movie year");
		}
		//assigning link and calling getMovieDetails()
		else{
			//to add '+' in place of space
			title = title.split(' ').join('+');
			link = `https://www.omdbapi.com/?apikey=2ea2f91b&t=${title}&y=${year}`;
			getMovieDetails();
		}
	}
	//for id
	else if(search == 3){
		id = $('#id').val();
		//validation
		if(id == ""){
			alert("Enter movie id");
		}
		//assigning link and calling getMovieDetails()
		else{
			link = `https://www.omdbapi.com/?apikey=2ea2f91b&i=${id}`;
			getMovieDetails();
		}
	}
}






let getMovieDetails = () =>{
	$.ajax({
		type:'GET',
		dataType:'json',
		async: true,
		url: link,
		success: (response) =>{
			//only when response is true
			if(response.Response == "True"){
				$("#container1").css("display","block");
				$("#container2").css("display","block");
				$(".icon-group").css("display","block");
				$("hr").css("display","block");
				if ($(window).width() <= 768) {
					$("#containerM").show();
					
				}
				// $("#searchNotFound").css("display","block");
				//poster
				if(response.Poster == "N/A"){
					$("#poster").html(`<img src="posterSubstitute.jpg" style="margin-left: 2rem;margin-top: -4rem;height:50vh;width:18vw;border: 1px solid white;padding: 0.5rem; background-color: white;">`);
					$("#pCon").html(`<img src="posterSubstitute.jpg" style="margin-left: 2rem;height:50vh;border: 1px solid white;padding: 0.5rem; background-color: white;">`);
				}
				else{
					$("#poster").html(`<img src="${response.Poster}" style="margin-left: 2rem;margin-top: -4rem;height:50vh;width:18vw;border: 1px solid white;padding: 0.5rem; background-color: white;">`);
					$("#pCon").html(`<img src="${response.Poster}" style="margin-left: 2rem;height:50vh;border: 1px solid white;padding: 0.5rem; background-color: white;">`);

				}
				$("#rating0").empty();
				$("#source0").empty();
				$("#rating1").empty();
				$("#source1").empty();
				$("#rating2").empty();
				$("#source2").empty();
				$(".line1").css("display","none");
				$(".line2").css("display","none");
				//ratings

				if(response.Ratings.length == 1){
					$("#rating1").html(`${response.Ratings[0].Value}`);
					$("#source1").html(`${response.Ratings[0].Source}`);

				}
				else if(response.Ratings.length == 0){
					$("hr").css("display","none");
				}
				else{
					for(let i = 0;i<response.Ratings.length;i++){
						$(`#rating${i}`).html(`${response.Ratings[i].Value}`);
						$(`#source${i}`).html(`${response.Ratings[i].Source}`);
						$(`.line${i}`).css("display","block");


					}
				}
				//movie title & type
				$("#movieName").html(`<h3>${response.Title}</h3>
					<h4>(${response.Type})</h4>`);
				//movie rated
				$("#rated").html(`${response.Rated}`);
				//movie date
				$("#date").html(`${response.Released}`);
				//movie language
				$("#language").html(`${response.Language}`);
				//movie time
				$("#time").html(`${response.Runtime}`);
				//movie genre
				$("#type").html(`${response.Genre}`);
				//movie plot
				if(response.Plot == null || response.Plot == "" || response.Plot == undefined){
					$("#plot").html("Plot not found");
				}
				else{
					$("#plot").html(`${response.Plot}`);
				}
				//movie actors
				if(response.Actors == null || response.Actors == "" || response.Actors == undefined){
					$("#actors").html("Actors not found");
				}
				else{
					$("#actors").html(`${response.Actors}`);
				}
				//movie director
				if(response.Director == null || response.Director == "" || response.Director == undefined){
					$("#director").html("Director not found");
				}
				else{			
					$("#director").html(`${response.Director}`);
				}
				//movie writer
				if(response.Writer == null || response.Writer == "" || response.Writer == undefined){
					$("#writer").html("Writer not found");
				}
				else{
					$("#writer").html(`${response.Writer}`);
				}
				//movie year
				if(response.Year == null || response.Year == "" || response.Year == undefined){
					$("#year1").html("Year not found");
				}
				else{
					$("#year1").html(`${response.Year}`);
				}
				//movie Id
				if(response.imdbID == null || response.imdbID == "" || response.imdbID == undefined){
					$("#imdbId").html("ImdbID not found");
				}
				else{
					$("#imdbId").html(`${response.imdbID}`);
				}
				//movie imdb rating
				if(response.imdbRating == null || response.imdbRating == "" || response.imdbRating == undefined){
					$("#imdbRating").html("ImdbRating not found");
				}
				else{
					$("#imdbRating").html(`${response.imdbRating}`);
				}
				//movie imdb votes
				if(response.imdbVotes == null || response.imdbVotes == "" || response.imdbVotes == undefined){
					$("#imdbVotes").html("ImdbVotes not found");
				}
				else{
					$("#imdbVotes").html(`${response.imdbVotes}`);
				}
				//movie metascore
				if(response.Metascore == null || response.Metascore == "" || response.Metascore == undefined){
					$("#metascore").html("Metascore not found");
				}
				else{
					$("#metascore").html(`${response.Metascore}`);
				}
				//movie country
				if(response.Country == null || response.Country == "" || response.Country == undefined){
					$("#country").html("Country not found");
				}
				else{
					$("#country").html(`${response.Country}`);
				}
				//movie awards
				if(response.Awards == null || response.Awards == "" || response.Awards == undefined){
					$("#awards").html("Awards not found");
				}
				else{
					$("#awards").html(`${response.Awards}`);
				}
				//if movie type is movie as it has few different data
				if(response.Type == "movie"){
					$(".ifSeason").show();
					if(response.DVD == null || response.DVD == "" || response.DVD == undefined){
						$("#totalSeasons").html(`Dvd:`);
						$("#dvd").html("DVD not found");
					}
					else{
						$("#totalSeasons").html(`Dvd:`);
						$("#dvd").html(`${response.DVD}`);
					}
					if(response.BoxOffice == null || response.BoxOffice == "" || response.BoxOffice == undefined){
						$("#boxoffice").html("BoxOffice not found");
					}
					else{
						$("#boxOffice").html(`${response.BoxOffice}`);
					}
					if(response.Production == null || response.Production == "" || response.Production == undefined){
						$("#production").html("Production not found");
					}
					else{
						$("#production").html(`${response.Production}`);
					}

					if(response.Website == "N/A"){
						$("#website").html(`<p>${response.Website}</p>`);
					}
					else if(response.Website == null || response.Website == "" || response.Website == undefined){
						$("#website").html(`<p>Website not found</p>`);
					}
					else{
						$("#website").html(`<a href=${response.Website} target ="-blank">${response.Website}</a>`);
					}
				}
				//if movie type is series as it has total seasons
				else if(response.Type == "series"){
					$("#totalSeasons").html(`Total Seasons:`);
					$("#dvd").html(`${response.totalSeasons}`);
					$(".ifSeason").hide();


				}
		 	}//
		 	else{
		 		$("#container1").css("display","none");
		 		$("#container2").css("display","none");
		 		if ($(window).width() <= 768) {
		 			$("#containerM").hide();
		 			
		 		}



		 		// $("#containerM").hide(() =>{

		 		// });
		 		$("#searchNotFound").css("display","block");

		 	}	
		 },
		 error: (request,type,sd) => {
		 	if(request.responseJSON == undefined){
		 		alert("Check your internet connectivity");
		 	}else{

		 		alert(err.responseJSON.error.message)
		 	}
		 },
        beforeSend: () => { // while request is processing.
        	$("#container1").css("display","none");
        	$("#container2").css("display","none");
        	if ($(window).width() <= 768) {
        		$("#containerM").hide();
        		
        	}
        	$("#searchNotFound").css("display","none");
        	$(".loader").css("display","block");
        },
        complete: () => {
        	$(".loader").css("display","none");

        },
        timeout:9000
    })

}