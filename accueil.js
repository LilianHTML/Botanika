document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM chargé');
    
    const slides = document.querySelectorAll('.clients-slide');
    console.log('Nombre de slides trouvés :', slides.length);
    
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    
    console.log('Bouton précédent :', prevButton);
    console.log('Bouton suivant :', nextButton);
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        slides[index].classList.add('active');
    }
    
    if (prevButton && nextButton) {
        console.log('Les deux boutons sont trouvés, ajout des écouteurs d\'événements');
        
        prevButton.addEventListener('click', function() {
            console.log('Clic sur précédent');
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
        });
        
        nextButton.addEventListener('click', function() {
            console.log('Clic sur suivant');
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        });
    } else {
        console.error('Boutons de navigation non trouvés');
        if (!prevButton) console.error('- Bouton précédent non trouvé');
        if (!nextButton) console.error('- Bouton suivant non trouvé');
    }
});
