    /*************** Back Icon *********************/
         function backIcon(){
             window.location.href ="../symptoms/Symptoms.html";
         }

    /***************Dark Mode***********************/
        var icon = document.getElementById("icon");
        icon.onclick = function(){
            document.body.classList.toggle("dark-mode");
            if ( document.body.classList.contains("dark-mode")) {
                icon.src="../assets/sun.svg";
            }else{
                icon.src="../assets/dark-mode.png";
            }
        }
    /***************** Next Button ******************/
        function reDirect(){
            window.location.href ="../contact/contact.html";
        }