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

   
const seances = [
    { 
        title: 'Film 1', 
        img: 'FILM1.jpg', 
        seances: [
            { time: '14:00', salle: 'Salle 1' },
            { time: '16:00', salle: 'Salle 2' },
            { time: '18:00', salle: 'Salle 3' },
        ]
    },
    { 
        title: 'Film 2', 
        img: 'FILM2.jpg',
        seances: [
            { time: '10:00', salle: 'Salle 1' },
            { time: '13:00', salle: 'Salle 2' },
            { time: '20:00', salle: 'Salle 3' },
        ]
    },
    { 
        title: 'Film 2', 
        img: 'FILM8.jpg',
        seances: [
            { time: '11:00', salle: 'Salle 1' },
            { time: '14:00', salle: 'Salle 2' },
            { time: '21:30', salle: 'Salle 3' },
        ]
    },{ 
        title: 'Film 2', 
        img: 'FILM3.webp',
        seances: [
            { time: '10:00', salle: 'Salle 1' },
            { time: '13:00', salle: 'Salle 2' },
            { time: '20:00', salle: 'Salle 3' },
        ]
    },{ 
        title: 'Film 2', 
        img: 'FILM4.jpg',
        seances: [
            { time: '10:00', salle: 'Salle 1' },
            { time: '13:00', salle: 'Salle 2' },
            { time: '20:00', salle: 'Salle 3' },
        ]
    },{ 
        title: 'Film 2', 
        img: 'FILM5.jpg',
        seances: [
            { time: '10:00', salle: 'Salle 1' },
            { time: '13:00', salle: 'Salle 2' },
            { time: '20:00', salle: 'Salle 3' },
        ]
    },{ 
        title: 'Film 2', 
        img: 'FILM6.jpg',
        seances: [
            { time: '10:00', salle: 'Salle 1' },
            { time: '13:00', salle: 'Salle 2' },
            { time: '20:00', salle: 'Salle 3' },
        ]
    },{ 
        title: 'Film 2', 
        img: 'FILM7.jpg',
        seances: [
            { time: '10:00', salle: 'Salle 1' },
            { time: '13:00', salle: 'Salle 2' },
            { time: '20:00', salle: 'Salle 3' },
        ]
    },
    // Ajoutez autant de films que nécessaire.
];

function renderSeances() {
    const seanceContainer = document.getElementById('seanceContainer');
    seances.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.innerHTML = `
            <h3>${film.title}</h3>
            <img src="${film.img}" alt="${film.title}">
            <ul>
                ${film.seances.map(seance => `<li>${seance.time} - ${seance.salle}</li>`).join('')}
            </ul>
        `;
        seanceContainer.appendChild(filmElement);
    });
}

document.getElementById('horaires-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('horaires').style.display = 'block';
    renderSeances();
});

$(document).ready(function() {
    $('#horaires-link').click(function(e) {
        e.preventDefault();
        $('#seanceContainer').show();
    });

    $('#now-showing-link, #coming-soon-link, #tarifs-link, #contact-link').click(function(e) {
        e.preventDefault();
        $('#seanceContainer').hide();
    });
});
$(document).ready(function() {
    $('#tarifs-link').click(function(e) {
        e.preventDefault();
        $('#now-showing').hide();
        $('#seanceContainer').hide();
        $('#tarifs').show();
    });
    $('#now-showing-link').click(function(e) {
        e.preventDefault();
        $('#now-showing').show();
        $('#seanceContainer').hide();
        $('#tarifs').hide();
    });
});







