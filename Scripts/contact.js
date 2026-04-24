const phoneNumber = "27618602648";

/* WHATSAPP BUTTON */
document.querySelector(".js-whatsapp").addEventListener("click", () => {

  const message = "Hi, I want to book an appointment at Sky Angels Kids Salon.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});


/* SEND FORM BUTTON */
document.querySelector(".js-send").addEventListener("click", () => {

  const name = document.querySelector(".js-name").value;
  const email = document.querySelector(".js-email").value;
  const phone = document.querySelector(".js-phone").value;
  const message = document.querySelector(".js-message").value;

  if(!name || !phone || !message){
    alert("Please fill in required fields!");
    return;
  }

  const whatsappMessage =
`Hi, I want to book an appointment:

Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank");
});