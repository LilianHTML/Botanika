// Ajouter ce script à la fin de votre fichier HTML, juste avant la fermeture </body>
document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton hamburger
    const nav = document.querySelector('nav');
    const hamburgerButton = document.createElement('button');
    hamburgerButton.className = 'hamburger';
    hamburgerButton.innerHTML = '<span></span><span></span><span></span>';
    
    // Insérer le bouton dans la navigation
    nav.insertBefore(hamburgerButton, nav.querySelector('ul'));
    
    // Gestion du menu hamburger
    const menuList = document.querySelector('nav ul');
    hamburgerButton.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuList.classList.remove('active');
        });
    });
    
    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target)) {
            menuList.classList.remove('active');
        }
    });
});