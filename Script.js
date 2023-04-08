$(document).ready(function() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $(document).ready(function() {
        $('.carousel').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000
        });
    
        // Cachez la section "Prochainement" au chargement de la page
        document.getElementById('coming-soon').style.display = 'none';
    
        // Ajoutez la classe 'active' au lien "Films à l'affiche" par défaut
        document.getElementById('now-showing-link').classList.add('active');
    
        // Afficher la section "Jeunesse" au chargement de la page
        document.getElementById('youth').style.display = 'none';
        
        // Ajouter l'écouteur d'événement pour le lien "Films à l'affiche"
        document.getElementById('now-showing-link').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('now-showing').style.display = 'block';
            document.getElementById('youth').style.display = 'none';
    
            // Activez le lien "Films à l'affiche" et désactivez le lien "Jeunesse"
            this.classList.add('active');
            document.getElementById('youth-link').classList.remove('active');
        });
    
        // Ajouter l'écouteur d'événement pour le lien "Jeunesse"
        document.getElementById('youth-link').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('now-showing').style.display = 'none';
            document.getElementById('youth').style.display = 'block';
    
            // Activez le lien "Jeunesse" et désactivez le lien "Films à l'affiche"
            this.classList.add('active');
            document.getElementById('now-showing-link').classList.remove('active');
        });
   
    
    });
    
      
    });




