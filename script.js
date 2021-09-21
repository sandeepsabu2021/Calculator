function dis(val){
    document.getElementById("display").value+=val
    document.getElementById("display").style.textAlign = "left"
}

function result(){
    let x = document.getElementById("display").value;
    let temp = x.replace("^","**")
    temp = x.replace("%","*(1/100)*")
    let y = eval(temp)
    document.getElementById("display").value = y
    document.getElementById("display").style.textAlign = "right"

    $("#calhistory").append("<li>"+x+" = "+y+"</li>");
}

function clr(){
    document.getElementById("display").value = ""
    document.getElementById("display").style.textAlign = "left"
}

function bspace(){
    let x = document.getElementById("display").value;
    let y = x.slice(0,x.length-1)
    document.getElementById("display").value = y  
}

function delhist(){
    document.getElementById("calhistory").innerHTML = ""
    document.getElementById("display").value = ""
}
