var margin = 0

function myFunction(e){
    
 //   console.log(e.deltaY)
        //console.log(margin)
        // Set the CSS `transform`, using calculated values
        console.log(margin)
        if(e.deltaY < 0){
            if (margin < 200){
            margin += 20;
            }
        }
        if(e.deltaY > 0){
            if (margin >= 220){
            margin -= 20;
            }
        }
        document.getElementById("scroll-image").style.marginLeft = margin + "px";
  }
  
    window.addEventListener("wheel", myFunction);