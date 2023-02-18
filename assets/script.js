function check()
{
  if(!document.getElementById("subscribe-email").checkValidity())
  {

    const changeColor = document.getElementById("subscribe-email");
    changeColor.style.border = "1px solid hsl(354, 100%, 66%)";

    const errorMessage = document.getElementById("hidden");
    errorMessage.textContent = "Please provide a valid email address";

  }else
  {
    alert("Your email address submitted. Thank you for the interest!");
  }
}

