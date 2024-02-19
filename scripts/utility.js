function bgColor(property){
    document.getElementById(property).style.backgroundColor = "green";
}

function bgRemoveColor(property){
    document.getElementById(property).addEventListener('click',function(){
        this.style.backgroundColor= "";
    });
}