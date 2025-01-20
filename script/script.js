document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.elements');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
});





document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});


const parentContainer = document.querySelector(".read-more-container");
parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const isReadMoreBtn = current.className.includes("read-more");
  if (!isReadMoreBtn) return;
  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("Read More")
    ? "Read Less..."
    : "Read More";
});

function toggleReadMore(id) {
  let reviewText = document.getElementById(id);
  let btn = reviewText.nextElementSibling;

  if (reviewText.classList.contains("expanded")) {
    reviewText.classList.remove("expanded");
    reviewText.innerHTML = reviewText.getAttribute("data-short-text");
    btn.textContent = "Read More";
  } else {
    reviewText.classList.add("expanded");
    reviewText.setAttribute("data-short-text", reviewText.innerHTML);
    btn.textContent = "Read Less";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');

  if (logo) {
      logo.addEventListener('click', (event) => {
          event.preventDefault();
          sessionStorage.setItem('scrollToTop', 'true');
          location.reload();
      });
  }
  if (sessionStorage.getItem('scrollToTop') === 'true') {
      sessionStorage.removeItem('scrollToTop'); 
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
});

$(document).ready(function () {
  $(".navbar-nav a, .navbar-nav button").on("click", function (e) {
    if (!$(this).hasClass("dropdown-toggle")) {
      $(".navbar-collapse").collapse("hide");
    }
  });
});

document.getElementById('vid1').addEventListener('loadedmetadata', function() {
  this.currentTime = 1;
}, false);


document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    once:true,
    duration: 1200,
  });
});



document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("tSr3jHOvVSSg1jkfL")

  const btn = document.getElementById("button");

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_f2qot76";
    const templateID = "template_v0h4dql";

    const companyName = document.getElementById("name").value;
    const emailId = document.getElementById("email_id").value;
    document.getElementById("from_name").value = companyName;
    document.getElementById("replyto").value = emailId;

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "SUBMIT";
        showAlert("Your message has been successfully sent.", "success");
        document.getElementById("form").reset();
      },
      (err) => {
        btn.value = "SUBMIT";
        showAlert("Failed to send your message. Please try again.", "danger");
      }
    );
  });
  
  function showAlert(message, type) {
    const alertPlaceholder = document.getElementById("alert-placeholder");
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.role = "alert";
    alertDiv.textContent = message;

    alertPlaceholder.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.classList.remove("show");
      alertDiv.classList.add("hide");
      setTimeout(() => {
        alertDiv.remove();
      }, 500); 
    }, 3000); 
  }
});

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('contextmenu', event => event.preventDefault());
});



document.querySelectorAll('.faq4_icon').forEach((question) => {
  question.addEventListener('click', () => {
    const icon = question.querySelector('.faq4_icon i');
    if (icon.classList.contains('bi-plus')) {
      icon.classList.remove('bi-plus');
      icon.classList.add('bi-dash');
    } else {
      icon.classList.remove('bi-dash');
      icon.classList.add('bi-plus');
    }
  });
});



function animateCounter(element, target) {
  let count = 0;
  const speed = target / 80; 
  
  const updateCount = () => {
    count += speed;
    if (count <= target) {
      element.textContent = Math.ceil(count) + ''; 
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target + '+'; 
    }
  };

  updateCount();
}

function startCounters() {
  document.querySelectorAll('.style_moving_info_number__vI1ou, .style_moving_info_number__vI2ou').forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    animateCounter(counter, target);
  });
}

const observerOptions = {
  root: null, 
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounters();
      observer.disconnect();
    }
  });
}, observerOptions);

document.querySelectorAll('.style_moving_info_number__vI1ou, .style_moving_info_number__vI2ou').forEach(counter => {
  observer.observe(counter);
});


let dropdownElements = document.querySelectorAll('.dropdown-toggle');
  dropdownElements.forEach(function (dropdown) {
    dropdown.addEventListener('click', function (e) {
      var currentDropdown = this;
      if (currentDropdown.classList.contains('show')) {
        currentDropdown.classList.remove('show');
      } 
      else {
        currentDropdown.classList.add('show');
      }
    });
  });


    function closeOffcanvas() {
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvasInstance) {
          offcanvasInstance.hide();
      }
  }
