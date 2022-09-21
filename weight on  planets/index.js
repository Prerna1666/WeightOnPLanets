function mercury(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter Valid Weight!")
    }else{
        var weight=w*.38;
        document.getElementById("output").innerHTML=weight;
    }
}

function venus(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter numerical Value!")
    }else{
        var weight=w*.91;
        document.getElementById("output").innerHTML=weight;
    }
}

function mars(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter numerical Value!")
    }else{
        
        var weight=w*.38;
        document.getElementById("output").innerHTML=weight;
    }
}

function jupiter(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter numerical Value!")
    }else{
        
        var weight=w*2.34;
        document.getElementById("output").innerHTML=weight;
    }
}

function saturn(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter numerical Value!")
    }else{
        
        var weight=w*.93;
        document.getElementById("output").innerHTML=weight;
    }
}

function uranus(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter numerical Value!")
    }else{
        
        var weight=w*.92;
        document.getElementById("output").innerHTML=weight;
    }
}

function neptune(){
    var w=document.getElementById('weight').value;
    if(isNaN(w) || w==''){
        alert("Enter numerical Value!")
    }else{
        
        var weight=w*1.28;
        document.getElementById("output").innerHTML=weight;
    }
}


