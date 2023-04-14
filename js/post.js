const ajaxCall = (name, lastName, email, message) => {
    const number = 999;
  
    const data = new URLSearchParams();
    data.append("name", name);
    data.append("last_name", lastName);
    data.append("email", email);
    data.append("number", number);
    data.append("message", message.join(" "));
  
    fetch("/includes/post.php", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          window.location.reload();
        } else {
          throw new Error(`The request failed! Status code was ${response.status}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const getText = () => {
    const text = document.getElementById("message").value;
    return text.split(/\s+/);
  };
  
  const validateForm = () => {
    const nameInput = document.querySelector('input[name="name"]');
    const lastNameInput = document.querySelector('input[name="last_name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const captchaInput = document.querySelector('input[name="captcha"]');
    const message = getText();
  
    const name = nameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const captcha = captchaInput.value.trim();
  
    if (name !== "" && lastName !== "" && email !== "" && captcha !== "") {
      if (captcha === "32") {
        ajaxCall(name, lastName, email, message);
      } else {
        alert("Incorrect captcha, please try again.");
      }
    } else {
      alert("Oops, there was a problem. Please fill in all required fields and enter the correct captcha.");
    }
  };
  
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    validateForm();
  });
  