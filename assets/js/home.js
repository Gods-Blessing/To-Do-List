var category = document.getElementsByClassName('ccate');


var color = function(){
    for(let i = 0; i< category.length; i++){
    if(category[i].innerText == "School"){
        category[i].parentElement.style.backgroundColor = "#F63D16";
        // console.log(temp);
    }
    if(category[i].innerText == "Home"){
        category[i].parentElement.style.backgroundColor = "#32A106 ";
    }
    if(category[i].innerText == "Office"){
        category[i].parentElement.style.backgroundColor = "#2849F0";
    }
    if(category[i].innerText == "Outdoor"){
        category[i].parentElement.style.backgroundColor = "#D17D04";
    }
}
}

color();
