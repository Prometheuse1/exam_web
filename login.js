const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('btn');

button.addEventListener('click', function() {
    const mail = email.value;
    const pass = password.value;

    if (mail === '' || pass === '') {
        alert('Veuillez remplir tous les champs');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Rechercher l'utilisateur par son email
    const user = users.find(u => u.email === mail);

    if (!user) {
        // Gère le cas où l'utilisateur n'existe pas
        alert('Utilisateur introuvable');
    } else if (user.password !== pass) {
        // Gère le cas où le mot de passe est incorrect
        alert('Mot de passe incorrect');
    } else {
        // Succès
        alert('Connexion réussie ! Bienvenue ' + user.nom);
        // Possibilité de rediriger vers une page d'accueil
        // window.location.href = 'home.html';
    }
});
