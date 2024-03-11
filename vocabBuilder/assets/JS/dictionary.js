let searchInput = document.getElementById("searchInput");
let search_Btn = document.getElementById("searchBtn");


const getData = async (searchValue) => {

   try{
       let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
       let jsonData =await data.json();
       console.log(jsonData);
   
       document.querySelector(".text").innerHTML="";
       let div = document.createElement("div");
       div.classList.add("details");
       div.innerHTML=`
       <h2 id="word">Word : <span>${jsonData[0].word} </span></h2>
       <p id="type" ><span>${jsonData[0].meanings[0].partOfSpeech} </span></p>
       <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
       <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example === undefined ? "Not Found" : jsonData[0].meanings[0].definitions[0].example}</span></p>
       <p>Synonyms : <span> ${jsonData[0].meanings[0].synonyms[0] === undefined ? "Not Found" : jsonData[0].meanings[0].synonyms[0]}</span></p>
       `
       document.querySelector(".text").appendChild(div);
   }
   catch(error){
       document.querySelector(".text").innerHTML="<h1>Not Found</h1>"
   }


}

search_Btn.addEventListener("click", function(){
   let searchValue = searchInput.value;
   if(searchValue == ""){
       alert("First Enter Something")
   }else{
       getData(searchValue)
   }
})


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})



/* Sign Up */
