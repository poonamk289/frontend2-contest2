let arr=[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];
const divdetail = document.getElementsByClassName("food");
console.log(divdetail);
const arr2=JSON.stringify(arr);
const obj=JSON.parse(arr2);


const image=document.getElementsByClassName("rec-image");
const category =document.getElementsByClassName("category");
const title =document.getElementsByClassName("title");
const time =document.getElementsByClassName("time");
const rating =document.getElementsByClassName("rating");
const heart =document.getElementsByClassName("heart");





for(const x in obj){
   image[x].src=obj[x].imageSrc;
   category[x].innerHTML=obj[x].type;
   title[x].innerHTML=obj[x].name;
   time[x].innerHTML=obj[x].time;
   rating[x].innerText=obj[x].rating;
   if(obj[x].isLiked===true){
    console.log(obj[x].isLiked)
    heart[x].style.color="red";
   }
}

// for(const x in obj){
// console.log(category[x].parentElement);
// if(obj[x].type==="veg"){
// category[x].parentElement.style.display="none";
// }
// }

const vbutton= document.getElementById("vegonly");
vbutton.addEventListener("click",()=>{
    for(const x in obj){
        
        if(obj[x].type==="non-veg"){
        category[x].parentElement.style.display="none";
        }else{
            category[x].parentElement.style.display="block";
        }
    }
})

const nvbutton= document.getElementById("non-vegonly");
nvbutton.addEventListener("click",()=>{
    for(const x in obj){
        
        if(obj[x].type==="veg"){
        category[x].parentElement.style.display="none";
        }
        else{
            category[x].parentElement.style.display="block";
        }
    }
})


const bothnv= document.getElementById("bothnv");
bothnv.addEventListener("click",()=>{
    for(const x in obj){
        
        if(obj[x].type==="veg" || obj[x].type==="non-veg"){
        category[x].parentElement.style.display="block";
        }
        
    }
})

const abovecheck =document.querySelector("input[name=abovecheck]");
abovecheck.addEventListener("change",()=>{
    if (abovecheck.checked) {
        // console.log("Checkbox is checked..");
        for(const x in obj){
             if(obj[x].rating<4){
            category[x].parentElement.style.display="none";
            }
            
        }

      } else {
        // console.log("Checkbox is not checked..");
        for(const x in obj){
            if(obj[x].rating<4){
           category[x].parentElement.style.display="block";
           }
           
       }
      }
})

const belowcheck=document.querySelector("input[name=belowcheck]")
belowcheck.addEventListener("change",()=>{
    if (belowcheck.checked) {
        // console.log("Checkbox is checked..");
        for(const x in obj){
             if(obj[x].rating>4){
            category[x].parentElement.style.display="none";
            }
            
        }

      } else {
        // console.log("Checkbox is not checked..");
        for(const x in obj){
            if(obj[x].rating>4){
           category[x].parentElement.style.display="block";
           }
           
       }
      }
})
const recipeSearch = document.querySelector("input[name=recipe-search]");
console.log(recipeSearch);
recipeSearch.addEventListener("keyup",()=>{
    console.log(recipeSearch.value);
    let str=recipeSearch.value.toUpperCase();
    console.log(str);

    for(const x in obj){
        // for(let i=0;i<str.length;i++){
            let len=str.length;
            console.log(obj[x].name,len);

            console.log((obj[x].name).substring(0,len).toUpperCase());
            const str2=(obj[x].name).substring(0,len).toUpperCase();
            console.log(str2===str)
        if(str2===str){
       category[x].parentElement.style.display="block";
       
    }else{
        category[x].parentElement.style.display="none";
    }
   }

})
