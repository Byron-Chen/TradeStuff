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
            var parentelement = document.getElementById("auctionbidlist")
            var insertelement = document.createElement("li")
    
    
            insertelement.innerHTML = '<div class="auctionbiddetails"><p style="float: left;">'+inputamount.value + ' x $' +  inputprice.value +'</p><p style="margin: 0 auto;"><b>You</b></p><p style="float: right;">'+ getrealdate() +'</p></div>'
    
            parentelement.insertBefore(insertelement, parentelement.firstChild)
            console.log(inputamount.value, inputprice.value)
            inputamount.value = ""
            inputprice.value = ""
        }
        
    })
}

window.onload = init;