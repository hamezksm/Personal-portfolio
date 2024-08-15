function openGmail() {
  // Get input values directly
  var firstName = document.querySelector(".first");
  var secondName = document.querySelector(".second");
  var subjectSender = document.getElementById("subjectSender");
  var messageSender = document.getElementById("message");
  var fname = firstName.value;
  var sname = secondName.value;
  var subject = subjectSender.value;
  var message = messageSender.value;

  // Validate input (add your own validation logic)
  if (fname && sname && subject && message) {
    var recipient = encodeURIComponent("jamcav097@gmail.com");
    var name = fname + " " + sname;
    var subjectMatter = encodeURIComponent(subject);
    var content =
      "Hello, my name is " + name + ". " + message + "......From portfolio";
    var body = encodeURIComponent(content);

    var gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      recipient +
      "&su=" +
      subjectMatter +
      "&body=" +
      body;

    // Open the Gmail compose window in a new tab
    window.open(gmailURL, "_blank");
  } else {
    alert("Please fill in all fields.");
  }
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: [
      "am a full stack Engineer",
      "create backend servers APIs, develop Frontend web and mobile applications",
      "love coding during my free time",
      "am currently working on nurturing skills in Machine Learning and IOT",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    fadeOut: true,
  });
  var typed = new Typed(".typing-2", {
    strings: [
      "am a Mobile app developer",
      "code during my free time",
      "love coding!",
      "specifically dev flutter apps",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
