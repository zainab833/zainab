function loaded(){

    alert("loaded");
}
/*
function typingName() {
    alert("typing Name");
} */

function typingName(e){
    console.log(e);
    document.getElementById("name-helper").innerHTML = e.value;
    if(e.value === "zainab"){
        alert("Good girl");
        
        function confirmpass(e){
            //console.log(e.value);
            var password = document. getElementById("password").value;
            var confirm = e.value;
        }
    }
}