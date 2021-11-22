  // author: Dhiraj Shrestha
  //    Date: 2020/05/27
    function formvalid(){
      var FULLNAME=document.getElementById("NAME").value;  //Assigning variable value get from the field for name using unique ID
      var EMAIL=document.getElementById("EMAIL").value; //Assigning variable value get from the field for email using unique ID
      var REVIEW=document.getElementById("MESSAGE").value; //Assigning variable value get from the field for message using unique ID-->

      if(FULLNAME!=""  && EMAIL!="" && MESSAGE!=""){ //if field are not empty -->
        alert("Thank you for your time");
      }
    } 
