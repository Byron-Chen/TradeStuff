auctiondatalist = [[5, 23, "Jimmy L."], [3, 23, "John S."], [10, 23, "Adam T."]]
colours = ["#e6261f","#eb7532","#f7d038","#a3e048","#49da9a","#34bbe6","#4355db","#d23be7"]
auctionitemamountcount = 0

lastpoint = 0


function getrealdate(){
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date();
    let day = days[d.getDay()];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let month = months[d.getMonth()];
    return day + " " + d.getDate() + "th " + month + ", " + d.getHours() + ":" + d.getMinutes()
}

function init(){
    var inputamount = document.getElementById("inputamount")
    var inputprice = document.getElementById("inputprice")
    var button = document.getElementById("auctionbidbutton")
    button.addEventListener("click",function(){
        if (inputamount.value != "" && inputprice.value != ""){
            
            inputamount.value = ""
            inputprice.value = ""
        }
        
    })

    initauction(34)
}

function initauction(auctionitemamount){
    //reset
    document.getElementById("auctionbidschart").innerHTML ="";
    lastpoint = 0
    auctionitemamountcount = auctionitemamount

    console.log(document.getElementById("auctionbidschart").innerHTML)
    rowamount = Math.ceil(auctionitemamount/10)
    countitemamount = auctionitemamount
    for (let i = 0; i < rowamount; i++){
        var aucdiv = document.createElement('div')
        aucdiv.id = "auctionrow" + i.toString()
        aucdiv.className = "aucdivrow"
        document.getElementById("auctionbidschart").appendChild(aucdiv)
        
        if ( countitemamount > 10){
            for (let j = 0; j < 10; j++){
                var itemdiv = document.createElement('div')
                itemdiv.id = "item" + i.toString() + j.toString()
                itemdiv.className = "auctionitemdiv"
                document.getElementById(aucdiv.id).appendChild(itemdiv)
            }
        } else{
            for (let j = 0; j < countitemamount; j++){
                var itemdiv = document.createElement('div')
                itemdiv.id = "item" + i.toString() + j.toString()
                itemdiv.className = "auctionitemdiv"
                document.getElementById(aucdiv.id).appendChild(itemdiv)
            }
        

        }
        countitemamount -= 10
    }
    changecolours()
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

function onhoverchangecolor(num){
    findcolour = document.getElementById("item" + pad(num).toString()).style.backgroundColor
    var finddivs = document.getElementsByClassName("auctionitemdiv");
    for (let i = 0; i < finddivs.length; i++){
        var finddiv = finddivs[i]
        if (finddiv.style.backgroundColor == findcolour && finddiv.style.backgroundColor != ""){
            finddiv.style.filter ="brightness(0.7)";
        }
    }
}

function outhoverchangecolor(num){
    findcolour = document.getElementById("item" + pad(num).toString()).style.backgroundColor
    var finddivs = document.getElementsByClassName("auctionitemdiv");
    for (let i = 0; i < finddivs.length; i++){
        var finddiv = finddivs[i]
        if (finddiv.style.backgroundColor == findcolour){
            finddiv.style.filter ="brightness(1)";
        }
    }
}

function changecolours(){
    for (let i = 0; i < auctiondatalist.length; i ++){
        for (j = 0; j < auctiondatalist[i][0]; j ++){
            document.getElementById("item" + pad(lastpoint).toString()).style.backgroundColor = colours[i]
            lastpoint++
        }
    }

    var hoverdivs = document.getElementsByClassName("auctionitemdiv");
    for (let h = 0; h < hoverdivs.length; h++){
        var cdiv = hoverdivs[h];

        cdiv.addEventListener("mouseover", function(){
            onhoverchangecolor(h)
        })
        cdiv.addEventListener("mouseout", function(){
            outhoverchangecolor(h)
        })
    }
}

function displaybids(){
    for (let i = 0; i < auctiondatalist.length; i++){
        var parentelement = document.getElementById("auctionbidlist")
        var insertelement = document.createElement("li")

        //insertelement.innerHTML = '<div class="auctionbiddetails"><p style="float: left;">'+inputamount.value + ' x $' +  inputprice.value +'</p><p style="margin: 0 auto;"><b>You</b></p><p style="float: right;">'+ getrealdate() +'</p></div>'
        insertelement.innerHTML = '<div class="auctionbiddetails"><p style="float: left;">'+auctiondatalist[i][0] + ' x $' +  auctiondatalist[i][1] +'</p><p style="margin: 0 auto;">' + auctiondatalist[i][2] + '</p></div>'
        parentelement.insertBefore(insertelement, parentelement.firstChild)
        console.log(inputamount.value, inputprice.value)
    }
}



window.onload = init;