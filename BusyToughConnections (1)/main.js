// JavaScript para o botão "Hire Me" fixo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var hireMeButton = document.querySelector(".hire-me");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    hireMeButton.classList.add("fixed");
  } else {
    hireMeButton.classList.remove("fixed");
  }
}

// JavaScript para animação de escrita no título
document.addEventListener("DOMContentLoaded", function () {
  const introText = "Artur Vivacqua";
  let i = 0;
  function typeWriter() {
    if (i < introText.length) {
      document.getElementById("intro-text").innerHTML += introText.charAt(i);
      i++;
      setTimeout(typeWriter, 200);
    }
  }
  typeWriter();
});

// JavaScript para enviar e-mail usando EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os dados do formulário
    var name = event.target.name.value;
    var email = event.target.email.value;
    var message = event.target.message.value;
    var recaptchaResponse = grecaptcha.getResponse();

    if (recaptchaResponse.length === 0) {
        alert("Por favor, complete o CAPTCHA.");
        return;
    }

    // Configuração do e-mail usando EmailJS
    emailjs.send("service_4ivey8f","template_3wl1pql", {
        from_name: name,
        from_email: email,
        message: message,
        'g-recaptcha-response': recaptchaResponse
    }).then(
      function(response) {
          console.log("Mensagem enviada com sucesso!", response);
          alert("Mensagem enviada com sucesso!");
      },
      function(error) {
          console.error("Falha no envio da mensagem.", error);
          alert("Falha no envio da mensagem.");
      }
    );
});
