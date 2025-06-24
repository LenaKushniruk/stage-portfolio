document.addEventListener("DOMContentLoaded", () => {
  const scrollTo = (btnId, targetId) => {
    document.getElementById(btnId).addEventListener("click", () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  scrollTo("aboutme-button", "about");
  scrollTo("skills-button", "skills");
  scrollTo("projects-button", "projects");
  scrollTo("contact-button", "contact");
});

const linkedin = document.getElementById('linkedin-contact');

linkedin.addEventListener('click', function(){
  window.open('https://www.linkedin.com/in/lena-kushniruk-939a36302/');
  console.log(linkedin);
})

const github = document.getElementById('github-contact');

github.addEventListener('click', function(){
  window.open('https://github.com/LenaKushniruk');
  console.log(github);
})

const projectLinks = [
  {
    githubId: "github-icon1",
    githubUrl: "https://github.com/LenaKushniruk/MarvelWebsite",
    websiteId: "website-icon1",
    websiteUrl: "https://34978.hosts1.ma-cloud.nl/MarvelWebsite/"
  },
  {
    githubId: "github-icon2",
    githubUrl: "https://github.com/LenaKushniruk/VRMinebox",
    websiteId: "website-icon2",
    websiteUrl: "https://34978.hosts1.ma-cloud.nl/VR%20minebox"
  },
  {
    githubId: "github-icon3",
    githubUrl: "https://github.com/LenaKushniruk/VRTekenen",
    websiteId: "website-icon3",
    websiteUrl: "https://34978.hosts1.ma-cloud.nl/Tekenen%20in%20VR/"
  },
  {
    githubId: "github-icon4",
    githubUrl: "https://github.com/LenaKushniruk/SocialMedia",
    websiteId: "website-icon4",
    websiteUrl: "https://34978.hosts1.ma-cloud.nl/SocialMedia/"
  },
  {
    githubId: "github-icon5",
    githubUrl: "https://github.com/LenaKushniruk/stage-opdracht1",
    websiteId: "website-icon5",
    websiteUrl: "https://34978.hosts1.ma-cloud.nl/stage-opdracht1/"
  }
];

projectLinks.forEach(({ githubId, githubUrl, websiteId, websiteUrl }) => {
  const githubIcon = document.getElementById(githubId);
  const websiteIcon = document.getElementById(websiteId);

  if (githubIcon) {
    githubIcon.addEventListener("click", () => window.open(githubUrl, "_blank"));
  }

  if (websiteIcon) {
    websiteIcon.addEventListener("click", () => window.open(websiteUrl, "_blank"));
  }
});
