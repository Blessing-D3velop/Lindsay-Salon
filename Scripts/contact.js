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

  const emailMessage =
`Hi, I want to book an appointment:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

  const subject = `New Booking Request from ${name}`;

  const mailtoLink = `mailto:skybeautyhaven@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailMessage)}`;

  window.location.href = mailtoLink;
});