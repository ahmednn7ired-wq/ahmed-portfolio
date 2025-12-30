const btnProjects = document.getElementById("btnProjects");
const btnContact = document.getElementById("btnContact");

const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

btnProjects.addEventListener("click", () => {
  projects.classList.toggle("hidden");
  projects.scrollIntoView({ behavior: "smooth" });
});

btnContact.addEventListener("click", () => {
  contact.classList.toggle("hidden");
  contact.scrollIntoView({ behavior: "smooth" });
});
