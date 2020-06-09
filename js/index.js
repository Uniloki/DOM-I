const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//NAV BAR
const navList = document.querySelectorAll('a');
navList[0].textContent = siteContent.nav["nav-item-1"];
navList[1].textContent = siteContent.nav["nav-item-2"];
navList[2].textContent = siteContent.nav["nav-item-3"];
navList[3].textContent = siteContent.nav["nav-item-4"];
navList[4].textContent = siteContent.nav["nav-item-5"];
navList[5].textContent = siteContent.nav["nav-item-6"];




//CTA HEADER
const ctaHeader = document.querySelector('.cta-text h1')
ctaHeader.textContent = siteContent.cta.h1;
//CTA BUTTON
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent.cta.button;
//CTA IMAGE
const ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent.cta['img-src']);

//MAIN CONTENT
//MAIN CONTENT TOP
const headList = document.querySelectorAll('.text-content h4');
headList[0].textContent = siteContent['main-content']['features-h4'];
headList[1].textContent = siteContent['main-content']['about-h4'];

const paraList = document.querySelectorAll('.text-content p');
paraList[0].textContent = siteContent['main-content']['features-content'];
paraList[1].textContent = siteContent['main-content']['about-content'];

//MAIN CONTENT IMAGE
const mainContentImg = document.getElementById('middle-img');
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//MAIN CONTENT BOTTOM
headList[2].textContent = siteContent['main-content']['services-h4'];
headList[3].textContent = siteContent['main-content']['product-h4'];
headList[4].textContent = siteContent['main-content']['vision-h4'];
paraList[2].textContent = siteContent['main-content']['services-content'];
paraList[3].textContent = siteContent['main-content']['product-content'];
paraList[4].textContent = siteContent['main-content']['vision-content'];


//CONTACT

const contactHead = document.querySelector('.contact h4');
const contactPara = document.querySelectorAll('.contact p');

contactHead.textContent = siteContent['contact']['contact-h4'];
contactPara[0].textContent = siteContent['contact']['address'];
contactPara[1].textContent = siteContent['contact']['phone'];
contactPara[2].textContent = siteContent['contact']['email'];

//FOOTER

const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];