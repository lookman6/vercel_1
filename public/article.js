//API Used: http://newsapi.org/s/india-news-api
const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
// "in" stands for India 
// api-key: c02096b305514586bb93fd081b3d8671
const country = "in";
/*const options = [
  "general",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];*/
/*const options = [
  "business",
];*/

//100 requests per day
let requestURL;
//Create cards from data
const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container padd">
    <img src="${item.urlToImage || "./newspaper.jpg"}" alt="" />
    </div>
    <p>
       
    </p>
    <div class="news-content padd">
      <div class="news-title">
        ${item.title}
      </div>
      <p>
       
      </p>
      <div class="news-description padd">
      ${item.description || item.content || ""}
      </div>
      <p>
       
      </p>
      <a href="${item.url}" target="_blank" class="view-button"><button class="button">Details</button></a>
    </div>`;
    container.appendChild(card);
  }
};
//News API Call
const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  /*if (!response.ok) {
    console.log(requestURL);
    console.log(response.json());
    alert("Data unavailable at the moment. Please try again later");
    return false;
  }*/
  /*let data = await response.json();*/
  let data = [
    { title: "Fatal Tesla Cybertruck crash in Piedmont being reviewed by federal agency",
      description: "A fatal Tesla Cybertruck incident in Piedmont is being investigated by the National Highway and Traffic Safety Administration and California Highway Patrol after three Piedmont high school graduates died and another was hospitalized.\nThe NHTSA said it is work…",
      content: "A fatal Tesla Cybertruck incident in Piedmont is being investigated by the National Highway and Traffic Safety Administration and California Highway Patrol after three Piedmont high school graduates … [+145 chars]", 
      url: "https://www.cnbc.com/2024/12/03/jim-cramer-us-may-have-reached-high-water-mark-in-china-tensions.html",
      urlToImage: "https://image.cnbcfm.com/api/v1/image/106349568-1579719779301img_3380r.jpg?v=1693521799&w=1920&h=1080"
    },
    /*{ title: '12/1/2011', description: 3, content: 20055, urlToImage: },
    { title: '12/1/2011', description: 3, content: 20055, urlToImage: }*/
];
  /*generateUI(data.articles);*/
  generateUI(data);
};
//Category Selection
const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((element) => {
    element.classList.remove("active");
  });
  //requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
  requestURL = `https://newsapi.org/v2/everything?q=tesla&from=2024-11-01&sortBy=publishedAt&apiKey=c02096b305514586bb93fd081b3d8671`;
  e.target.classList.add("active");
  getNews();
};
//Options Buttons
const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${
      i == "general" ? "active" : ""
    }" onclick="selectCategory(event,'${i}')">${i}</button>`;
  }
};
const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};
window.onload = () => {
    //requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
  requestURL = `https://newsapi.org/v2/everything?q=tesla&from=2024-11-01&sortBy=publishedAt&apiKey=c02096b305514586bb93fd081b3d8671`;
  init();
};