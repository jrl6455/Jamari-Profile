
const toggleSkillsBtn = document.getElementById("toggleSkills");
const skillsList = document.querySelector("#skills ul");

toggleSkillsBtn.addEventListener("click", () => {
  if (skillsList.style.display === "none" || skillsList.style.display === "") {
    skillsList.style.display = "block";
    toggleSkillsBtn.textContent = "Hide Skills";
  } else {
    skillsList.style.display = "none";
    toggleSkillsBtn.textContent = "Show Skills";
  }
});


const profilePic = document.getElementById("profilePic");


profilePic.style.transition = "transform 0.3s ease";

profilePic.addEventListener("mouseover", () => {
  profilePic.style.transform = "scale(1.1)";
});

profilePic.addEventListener("mouseout", () => {
  profilePic.style.transform = "scale(1)";
});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you! Your message has been received.");
  contactForm.reset();
});
