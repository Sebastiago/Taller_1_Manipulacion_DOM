//longitud
let p =document.getElementById("palabra")
let btn=document.getElementById("longitud")
console.log(p)
    function longitud(){
        let c = p.value.length
        alert(c)
    }


    btn.addEventListener('click', longitud)

//mayuscula
let my =document.getElementById("palabra")
let btn2 =document.getElementById("mayus")
console.log(my)
    function mayus(){
        let e = my.value.toUpperCase()
        alert(e)
    }


    btn2.addEventListener('click', mayus)

//minuscula
let mn =document.getElementById("palabra")
let btn3 =document.getElementById("minus")
console.log(mn)
    function minus(){
        let e = mn.value.toLowerCase()
        alert(e)
    }


    btn3.addEventListener('click', minus)


//primera letra
let pr =document.getElementById("palabra")
let btn4 =document.getElementById("pletra")
console.log(pr)
    function primeraLetra(){
        let e = pr.value.charAt(0)
        alert(e)
    }


    btn4.addEventListener('click', primeraLetra)