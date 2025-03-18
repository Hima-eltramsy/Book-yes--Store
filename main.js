document.querySelector("button").style.backgroundColor += "#000"
    document.querySelector("button").style.color += "#fff"
    function f1(){
        x=document.getElementById("is").value;
        if (x == 1236) {
            alert("password 1236...")
            document.getElementById("title").style.display = "block";
            document.getElementById("is").style.display = "none";
            document.getElementById("ip").style.display = "none";
            document.body.style.backgroundColor = "#000"

            // alert("password = 1236 yes")
        } 
        else  if (x > 3000){
            alert( "you are not the user");
            // window.close()
        }
        else  if (x = 3000){
            console.log("adam")
            document.getElementById("is").style.display = "none";
            document.getElementById("ip").style.display = "none";
            alert( "you are not the user")
        }
        else  if (x <3000){
            alert( "you are not the user")
        }
        
        else {
            alert( "you are not the user")
            document.getElementById("title").style.display = "none";
        }
    }
   function f2(){
    if(x == 1236){
            
            // $("button").css("background" , "blue");
        document.querySelector("button").style.backgroundColor = "blue"
        
    }
   }
    // password
    







