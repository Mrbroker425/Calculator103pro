let results = document.getElementById("TAKE");

let calculator=(number)=>{
     results.value+=number;
}
let Results=()=>{
    try {
        results.value=eval(results.value)
    } catch (error) {
        alert("Error please try again")
    }
}
function clr(){
    results.value="";
}
function del(){
    results.value=results.value.slice(0,-1);
}