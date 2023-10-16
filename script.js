function validerFormulaire() {
  // Récupérer les valeurs des champs
  var nom = document.getElementById("Nom").value;
  var email = document.getElementById("Prenom").value;
  var message = document.getElementById("Email").value;

  // Vérifier si les champs sont vides
  if (nom === "" || email === "" || message === "") {
      alert("Tous les champs doivent être remplis !");
      return false; // Empêcher la soumission du formulaire
  }
  // Si les champs ne sont pas vides, le formulaire est soumis
  return true;
}

const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toggleNav);

function toggleNav(){
  hamburgerButton.classList.toggle("active")
  navigation.classList.toggle("active")
};