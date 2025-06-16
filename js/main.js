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

