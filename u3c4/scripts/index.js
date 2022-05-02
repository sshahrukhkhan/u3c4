// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


// link=https://masai-mock-api.herokuapp.com/news/top-headlines?country=

import{ navbar } from "../news.js"
let n=document.getElementById("navbar");
n.innerHTML = navbar();

import{ searchimages, append} from "../search.js"
if(e.key === "search"){
    let value=document.getElementById(search_input).value;
    searchimages(API, value).then(data)
        console.log(data)
        let news=document.getElementById("news").value;
        append(data.result,news);
    }

}
