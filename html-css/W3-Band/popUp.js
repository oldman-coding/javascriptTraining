function popUpShow() {
  var popup = document.getElementById('popup');
  if (popup) 
    {console.log("Found")}
  else 
    {console.log("not found");} 

  popup.classList.toggle("popup--show");
  console.log("showed Popup");
}

function removePopUp() {
    var popup = document.getElementById('popup');
    if (popup) 
      {console.log("Found")}
    else 
      {console.log("not found");} 
  
    popup.classList.toggle("popup--show");
    console.log("showed Popup");
  } 
