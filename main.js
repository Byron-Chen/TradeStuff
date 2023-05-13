function init() {
    var input = document.getElementById("commentinput1")
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var parentelement = document.getElementById("commentsitem1");
            var childinput = document.getElementById("commentinput1")
            var newcomment = document.createElement("p")
            newcomment.setAttribute("class", "indented")
            newcomment.textContent = "You"+ " - " + input.value
            parentelement.insertBefore(newcomment, childinput)
            document.getElementById("commentinput1").value = "";
        }
    });

    var input2 = document.getElementById("commentinput2")
    input2.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var parentelement = document.getElementById("commentsitem2");
            var childinput = document.getElementById("commentinput2")
            var newcomment = document.createElement("p")
            newcomment.setAttribute("class", "indented")
            newcomment.textContent = "You"+ " - " + input2.value
            parentelement.insertBefore(newcomment, childinput)
            document.getElementById("commentinput2").value = "";
        }
    });

}

window.onload = init;