import left_image from "../../Assets/slider/left_image.png";
import middle_image from "../../Assets/slider/middle_image.png";
import right_image from "../../Assets/slider/right_image.png";
import match_image from "../../Assets/slider/match_image.png";
import left from "../../Assets/slider/left.png";
import table_image from "../../Assets/slider/table_image.png";


export const next=()=>{
    let i =1
    const data = [ match_image,match_image,match_image]
    const arr =[table_image,table_image,table_image,table_image]
    if (i > 1) {
      i = 0;
    }
    let image = document.getElementById("matches")
    let poster = document.getElementById("table_image")
    image.setAttribute('src', arr[i]);
    poster.setAttribute("src", data[i]);
  
    i++;
  }
  
  export const  changelft=()=>{
    // const lft = [left_image,right_image,table_image, 
    let i =1
    const data = [match_image,left,match_image, match_image.png,match_image,match_image,match_image,match_image]
    const arr =[match_image,right_image,match_image, match_image.png,match_image,match_image,match_image,match_image]
    if (i > 4) {
      i = 0;
    }
    let image = document.getElementById("matches")
    let poster = document.getElementById("table_image")
    image.setAttribute('src', arr[i]);
    poster.setAttribute("src", data[i]);
  
    i++;
  }

  

    
