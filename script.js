
function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        alert("Enter a Positive Number");
    }else{
        console.log(principal);
        var rate = document.getElementById("rate").value;
        console.log(rate);
        var years = document.getElementById("years").value;
        console.log(years);
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
    
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }

}

    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;


}
   