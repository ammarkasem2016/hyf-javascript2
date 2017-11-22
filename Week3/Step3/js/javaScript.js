let button1 = document.getElementById("button1");
button1.addEventListener("click", xmlFunOne);
let button2 = document.getElementById("button2");
button2.addEventListener("click", xmlFunTwo);
let button3 = document.getElementById("button3");
button3.addEventListener("click", xmlFunThree);
let inPut = document.getElementById("inPut");
let boxFound = document.getElementById("boxFound");
let boxLinkData = document.getElementById("boxLinkData");

//

function xmlFunOne () {  
    let url = 'https://api.github.com/orgs/HackYourFuture/repos';
    let xmlHtml = new XMLHttpRequest();
    xmlHtml.open("GET", url, false);
      xmlHtml.onload = function (){
      if (xmlHtml.status === 200 && xmlHtml.readyState === 4){
          let repositories = JSON.parse(xmlHtml.response);
          dataRepos(repositories);
        }
      }    
      xmlHtml.send();
}

function dataRepos (data) {
    for (let i = 0; i < data.length; i++){
        button1.innerHTML += "<ul><li><span>" + "<a href ='" + data[i].html_url+"'>" +  data[i].name + "</a>" + "</span></li></ul>";
    }
}

//

function xmlFunTwo () {
    let apiLink = 'https://api.github.com/repos/HackYourFuture/';
    let repositoriesName = inPut.value;
    let url = apiLink + repositoriesName;
    let xmlHtml = new XMLHttpRequest();
    xmlHtml.open("GET", url, false);
    xmlHtml.send();
    if (xmlHtml.status == 200 && xmlHtml.readyState === 4){
        let repositories = JSON.parse(xmlHtml.response);   
        search(repositories);
        }
    else {
        alert("Not Found !!!!! Please !!!!! Write Good Repository Name !!!!! Check First Good writing !!!!!")
    }
    
};

function search (data){
        boxFound.innerHTML += "<ul><li><span>" + "Repository Name:  " + data.name + "</li><li>" + "Repository Description:  " + data.description +"</li><li>" + "Stargazers Count:  " + data.stargazers_count + "</li><li>" + "Watchers Count:  " + data.watchers_count + "</li><li>" + " Languag:  " + data.language + "</li><li>" + "Forks:  " + data.forks + "</span></li></ul>";
}

//

function xmlFunThree () {
    let apiLink = 'https://api.github.com/repos/HackYourFuture/';
    let contributors = '/contributors';
    let pageName = inPut.value;
    let url = apiLink + pageName + contributors;
    let xmlHtml = new XMLHttpRequest();
    xmlHtml.open("GET", url, false);
    xmlHtml.send(); 
    let repositories = JSON.parse(xmlHtml.response);
    if (xmlHtml.status === 200 && xmlHtml.readyState === 4){
        for (let i = 0; i < repositories.length; i++){
            boxLinkData.innerHTML += "<ul><li><span>" + "<a href = '" + repositories[i].html_url + "'>" + repositories[i].login + "</a>" + "</span></li></ul>";
        }           
    }
    else {
        alert("Not Found !!!!! Please !!!!! Write Good Repository Name !!!!! Check First Good writing !!!!!");
    }
}

//////////////////////////////////////////////////////////////////////