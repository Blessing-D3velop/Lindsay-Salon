document.querySelectorAll(".js-book-button")
  .forEach(btn => {
    btn.addEventListener("click", () => {

      const message = `Hi, I would like to book an appointment at Sky Angels Kiddies Hair Salon.`;

      const whatsappURL = `https://wa.me/27618602648?text=${encodeURIComponent(message)}`;

      window.open(whatsappURL, "_blank");
    });
  });

  document.querySelectorAll(".js-view-hairstyles-button")
  .forEach(btn => {
    btn.addEventListener("click", () => {

      const section = document.getElementById("products-section-id");

      section.scrollIntoView({
        behavior: "smooth"
      });

    });
  });