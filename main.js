const toggleSkillsBtn = document.getElementById("toggleSkills");
const skillsList = document.querySelector("#skills ul");

toggleSkillsBtn.addEventListener("click", () => {
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
  } else {
    skillsList.style.display = "none";
  }
});

const profilePic = document.getElementById("profilePic");

profilePic.addEventListener("mouseover", () => {
  profilePic.style.transform = "scale(1.1)";
});

profilePic.addEventListener("mouseout", () => {
  profilePic.style.transform = "scale(1)";
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Message sent!");
  contactForm.reset();
});
