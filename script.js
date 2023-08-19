// Get input values directly
var fromName = document.getElementById("fromName");
var emailSender = document.getElementById("emailSender");
var subjectSender = document.getElementById("subjectSender");
var messageSender = document.getElementById("message");





function openGmail() {
    // Validate input (add your own validation logic)
    if (fromName.value && emailSender.value && subjectSender.value && messageSender.value) {
        var recipient = encodeURIComponent("jamcav097@gmail.com");
        var name = fromName.value;
        var subject = subjectSender.value;
        var subjectMatter = encodeURIComponent(subject);
        var message = messageSender.value;
        var content = 'Hello, my name is ' +name +'. '+ message;
        alert(content);
        var body = encodeURIComponent(content);
    
        var gmailURL = 'https://mail.google.com/mail/?view=cm&fs=1&to='+recipient+'&su='+subjectMatter+'&body='+body;
    
        // Open the Gmail compose window in a new tab
        window.open(gmailURL, "_blank");
    } else{
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
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings: ["am a Mobile applications developer","am also a Django developer","love coding during my free time","am currently working on Flutter applications development"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        fadeOut: true,
        
    });
    var typed = new Typed(".typing-2",{
        strings: [" am a Mobile app developer","code during my free time","love coding!","specifically dev flutter apps"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

     // Scroll to top button script
      const btnScrollToTop = document.querySelector("#btnScrollToTop");

      btnScrollToTop.addEventListener("click", function(){
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });