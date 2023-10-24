

let text=document.getElementById("text")
let search=document.getElementById("submit")
let more=document.getElementById("more")
let accesskey="XolXticsAO-zSnK40NWLACRnXD6IqkqbPYFV5ZL7EeI";
let page=1;
let word;


more.style.display='none';

search.addEventListener("click",function(e){
    e.preventDefault();
     word=document.getElementById("text").value;
    if(word!==""){
      document.querySelector(".content").innerHTML="";
      searchingine(word);
    }
})


async function searchingine(){
    const url =  `https://api.unsplash.com/search/photos?page=${page}&query=${word}&per_page=12&client_id=${accesskey}`;
    let response=await fetch(url);
    let json=await response.json();
     adding_images(json.results);
}

function adding_images(data){
   data.forEach(element => {
     let image=create(element.urls.small,element.links.html);
     document.querySelector(".content").appendChild(image);
   });
   more.style.display='block';
}

function create(url,link){
    let a=document.createElement("a");
    a.href=link;
    a.target='_blank';
    let div=document.createElement("div");
    div.className='image';
    let img=document.createElement("img");
    img.src=url;
    div.appendChild(img);
    let p=document.createElement("p");
    p.textContent="download image";   
    a.appendChild(div);
    a.append(p);
    return a;
}


more.addEventListener("click",function(){
    page++;
    searchingine();
})



