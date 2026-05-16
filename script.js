const nom=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');

const button=document.getElementById('btn');

button.addEventListener('click', function() {
    const name=nom.value;
    const mail=email.value;
    const pass=password.value;

    if (nom.value==='' || email.value==='' || password.value==='') 
    {
        alert('Veuillez remplir tous les champs');
    } 
    else
    {
        const users=JSON.parse(localStorage.getItem('users') || '[]');
        
        // Vérifier si l'utilisateur existe déjà
        const userExists = users.some(u => u.email === mail);
        if (userExists) {
            alert('Cet email est déjà utilisé !');
            return;
        }

        users.push({nom: name,email: mail,password: pass})
        localStorage.setItem('users', JSON.stringify(users))

        alert('Inscription réussie ! Redirection vers la page de connexion...');
        nom.value=email.value=password.value='';
        window.location.href = 'login.html';
    }
});