var images = ["1.png","2.png", "3.png" , "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];

var i = 0;
function update()
{
    i++;
    var numbers_of_pages_in_array = 9;
    if(i > numbers_of_pages_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list ofw names in updatedName. Use names[i]
  
 
    document.getElementById("family_member_image").src = updatedImage;
   
}
