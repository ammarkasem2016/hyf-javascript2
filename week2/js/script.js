var nameMovie = [
                 'TheRedPill',
                 'BankingOnBitcoin',
                 'TheFarthest',
                 'Unacknowledged',
                 'Earthlings',
                 'WhatTheHealth',
                 'WhitneyCanIBeMe',
                 'Leap',
                 'InsideJob',
                 'Icarus'
                ];


function menuMovie(myArray) {
	
    let list = document.createElement('ol');
	
    for (i in myArray) {
		
        let item = document.createElement('li');
		item.appendChild(document.createTextNode(myArray[i]));
		list.appendChild(item);
	}
	return list;
}


let movies = {
	movie_1: {
		id: 'TheRedPill',
		title: 'The Red Pill',
		director: 'Directors: Cassie Jaye',
		rate: 'Rate : 8.6 / 10',
	},
	movie_2: {
		id: 'BankingOnBitcoin',
		title: 'Banking On Bitcoin',
		director: 'Directors: Christopher Cannucciari',
		rate: 'Rate : 6.6 / 10'
	},
	movie_3: {
		id: 'TheFarthest',
		title: 'The Farthest',
		director: 'Directors: Emer Reynolds',
		rate: 'Rate : 8.2 / 10'
	},
	movie_4: {
		id: 'Unacknowledged',
		title: 'Unacknowledged',
		director: 'Directors: Michael Mazzola',
		rate: 'Rate : 7.2 / 10'
	},
	movie_5: {
		id: 'Earthlings',
		title: 'Earthlings',
		director: 'Directors: Shaun Monson',
		rate: 'Rate : 8.7 / 10'
	},
	movie_6: {
		id: 'WhatTheHealth',
		title: 'What The Health',
		director: 'Directors: Kip Andersen, Keegan Kuhn',
		rate: 'Rate : 8.1 / 10'
	},
	movie_7: {
		id: 'WhitneyCanIBeMe',
		title: 'Whitney : Can I Be Me',
		director: 'Directors: Nick Broomfield, Rudi Dolezal',
		rate: 'Rate : 6.4 / 10'
	},
	movie_8: {
		id: 'Leap',
		title: 'Leap',
		director: 'Directors: Kasia Wezowski, Patryk Wezowski',
		rate: 'Rate : 7.8 / 10'
	},
	movie_9: {
		id: 'InsideJob',
		title: 'Inside Job',
		director: 'Director: Charles Ferguson',
		rate: 'Rate : 8.3 / 10'
	},
	movie_10: {
		id: 'Icarus',
		title: 'Icarus',
		director: 'Director: Bryan Fogel',
		rate: 'Rate : 8.1 / 10'
	}
}


function allMenuMovie(mMovies) {
	let list = document.createElement('ol');
	for (i in mMovies) {
		let item = document.createElement('li');
		item.setAttribute('id', mMovies[i].id);
		let title_ = document.createElement('h1');
		let director_ = document.createElement('h2');
		let rate_ = document.createElement('h3');
		title_.appendChild(document.createTextNode(mMovies[i].title));
		director_.appendChild(document.createTextNode(mMovies[i].director));
		rate_.appendChild(document.createTextNode(mMovies[i].rate));
		item.appendChild(title_);
		item.appendChild(director_);
		item.appendChild(rate_);
		list.appendChild(item);
	}
	return list;
}
document.getElementById('movies').appendChild(allMenuMovie(movies));


let imgMovie = {
	TheRedPill: './imgs/The Red Pill.jpg',
	BankingOnBitcoin: './imgs/Banking on Bitcoin.jpg',
	TheFarthest: './imgs/The Farthest.jpg',
	Unacknowledged: './imgs/Unacknowledged.jpg',
	Earthlings: './imgs/Earthlings.jpg',
	WhatTheHealth: './imgs/What the Health.jpg',
	WhitneyCanIBeMe: './imgs/Whitney Can I Be Me.jpg',
	Leap: './imgs/Leap.jpg',
	InsideJob: './imgs/Inside Job.jpg',
	Icarus: './imgs/Icarus.jpg'
}


let keysArray = Object.keys(imgMovie);

function myImgMovie() {
	for (i of keysArray) {
		let img = document.createElement('img');
		img.setAttribute('src', imgMovie[i]);
		img.setAttribute('alt', i);
		document.getElementById(i).appendChild(img);
	}
}

myImgMovie();


// JASON


var zarJson = document.getElementById("zarJson");
var infoJson = document.getElementById("infoJson");
var pageNum = 1;




zarJson.addEventListener("click", function (){
    
    var xRaq = new XMLHttpRequest();
    xRaq.open('Get','js/movie_' + pageNum +  '.json');
    xRaq.onload = function () {
        var xData = JSON.parse(xRaq.responseText);
        addHtml(xData);
    };
    
    pageNum++;
    xRaq.send();
    
    
    if(pageNum > 5){
        zarJson.classList.add("hide");
        zarJson.style.backgroundColor = '#eee';
        zarJson.style.color = 'lightgray';
    }
    

});

function addHtml(data){
    var htmlText = "";
    
    for (i = 0; i < data.length; i++){
        htmlText += "<span class='black'><p><b>"  + data[i].name  + 
            " Year's "  + 
            data[i].model + "</span></b><br><span class='gold'> Writers:</span><span class='silver'>";
        for ( j = 0; j < data[i].type.writers.length; j++){
            
            if (j == 0) {
                htmlText += data[i].type.writers[j];
            } else{
                htmlText += " and " + data[i].type.writers[j];
            }
        }
        
        htmlText += "</span><br><span class='gold'> Stars : </span>";
        for ( j = 0; j < data[i].type.stars.length; j++){
            
            if (j == 0) {
                htmlText += data[i].type.stars[j];
            } else{
                htmlText += " and " + data[i].type.stars[j];
            }
        }
        
        htmlText += "<br><span class='gold'>Rate : </span><span class='darkred'>For US Box Office : " + data[i].rate + ".";
            
          htmlText  += "</span><hr></p>";
        
    }
   infoJson.insertAdjacentHTML('beforeend',htmlText);
}




