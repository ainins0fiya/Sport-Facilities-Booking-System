const container = document.querySelector(".bekas"),
     pwShowHide = document.querySelectorAll(".showHidePw"),
     pwFields = document.querySelectorAll(".password"),

     // show/hide password and change icon
     pwShowHide.forEach(eyeIcon =>{
          eyeIcon.addEventListener("click", ()=>{
               pwFields.forEach(pwField =>{
                    if(pwField.type === "password"){
                         pwField.type = "text";

                         pwShowHide.forEach(icon =>{
                              pwShowHide.classList.replace("uil-eye-slash", "uil-eye");
                         })
                    }else{
                         pwField.type === "password";

                         pwShowHide.forEach(icon =>{
                              pwShowHide.classList.replace("uil-eye-slash", "uil-eye");
                         })
                    } 
               })
          })
     })