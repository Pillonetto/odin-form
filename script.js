document.addEventListener("DOMContentLoaded", function() {
  //Obviously just for styling purposes
  const password = document.querySelector("#password");
  const confirm = document.querySelector("#confirm");

  const validityBox = document.querySelector(".password-info-box");

  confirm.addEventListener("input", (e) => {
    let pass = password.value;
    let conf = confirm.value;
  
    if(pass != conf || pass == ''){
      confirm.classList.add('error');
      confirm.classList.remove('valid');
      validityBox.classList.remove('hidden');
    }
    else{
      confirm.classList.remove('error');
      confirm.classList.add('valid');
      validityBox.classList.add('hidden');
    }
  });


});

