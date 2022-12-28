document.getElementById("counter").innerHTML="0"
var currentCount = document.getElementById("counter").innerHTML;

function addCount (){
    currentCount++;
    document.getElementById("counter").innerHTML=`${currentCount}`  
    document.getElementById("error").innerHTML=""  
}
function decreaseCount (){
    if (currentCount <= 0){
        document.getElementById("error").innerHTML="Counter Is Already At 0"
    } else{
        currentCount--;
        document.getElementById("counter").innerHTML=`${currentCount}`
        document.getElementById("error").innerHTML=""
    }
}