let btn = document.getElementById("btn")

function temperatura(){
    let gra = document.getElementById("grados").value
    gra = parseInt(gra)
    let select1 = document.getElementById("select1").value
    select1 = parseInt(select1)
    let select2 = document.getElementById("select2").value
    select2 = parseInt(select2)
    let result 

    if (select1==1 && select2==2) {
        result = ((gra-32)/1.8).toFixed(2)
        alert (result)
    }
    else if (select1==1 && select2==3){
        result = ((gra-32)* 5/9 + 273.15).toFixed(2)
        alert (result)
    }
    else if(select1==2 && select2==1){
        result = ((gra * 9/5)+32).toFixed(2)
        alert (result)
    }
    else if(select1==2 && select2==3){
        result = (gra + 273.15).toFixed(2)
        alert (result)
    }
    else if(select1==3 && select2==1){
        result = (( gra - 273.15) * 9/5 + 32).toFixed(2)
        alert (result)
    }
    else if(select1==3 && select2==2){
        result = (gra - 273.15).toFixed(2)
        alert (result)
    }

}


btn.addEventListener('click', temperatura)