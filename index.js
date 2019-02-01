function changeicone(x){  
     document.getElementById(x).classList.toggle("fas")
}

var t=[]
function calculatePrice(x,y){
    var p=Number(y)
    var q = 0 
    var sum=0
    q = document.getElementById("quantity-"+x).value;
    document.getElementById("price-"+x).innerHTML = q*p+" dt"
    t[x-1]=p*q
    for (var i=0;i<t.length;i++){
        sum=sum+t[i]
        document.getElementById("Title").innerHTML = "9offa Shopping total :"+sum+"dt"
    }
    
    

}

