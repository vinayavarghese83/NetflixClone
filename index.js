
function change(button){
    var icon=button.querySelector("i");
    if(icon.classList.contains("bi-plus-lg")){
        icon.classList.remove("bi-plus-lg");
        icon.classList.add("bi-x-lg");
    }
    else{
        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-plus-lg");
    }
}