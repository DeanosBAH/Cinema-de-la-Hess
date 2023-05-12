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
        title: 'Film 1', 
        img: 'FILM1.jpg', 
        seances: [
            { time: '14:00', salle: 'Salle 1' },
            { time: '16:00', salle: 'Salle 2' },
            { time: '18:00', salle: 'Salle 3' },
        ]
    },
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
        title: 'Film 1', 
        img: 'FILM1.jpg', 
        seances: [
            { time: '14:00', salle: 'Salle 1' },
            { time: '16:00', salle: 'Salle 2' },
            { time: '18:00', salle: 'Salle 3' },
        ]
    },
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
        title: 'Film 1', 
        img: 'FILM1.jpg', 
        seances: [
            { time: '14:00', salle: 'Salle 1' },
            { time: '16:00', salle: 'Salle 2' },
            { time: '18:00', salle: 'Salle 3' },
        ]
    },
    { 
        title: 'Film 1', 
        img: 'FILM1.jpg', 
        seances: [
            { time: '14:00', salle: 'Salle 1' },
            { time: '16:00', salle: 'Salle 2' },
            { time: '18:00', salle: 'Salle 3' },
        ]
    },
    // Le reste de vos objets de film...
];

function renderSeances() {
    const seanceContainer = document.getElementById('seanceContainer');

    // Clear the seanceContainer before appending new films
    seanceContainer.innerHTML = '';

    seances.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.classList.add('filmElement');

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

        


// Appel de la fonction pour générer le contenu à partir des données
renderSeances();
document.getElementById('loginButton').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const password = document.getElementById('pwd').value;

    if (password.length < 6) {
        event.preventDefault(); // Annule la soumission du formulaire
        alert('Le mot de passe doit contenir au moins 6 caractères');
    }
});

$(document).ready(function() {
    // votre code ici ...

    document.getElementById('loginButton').addEventListener('click', function() {
        document.getElementById('loginForm').style.display = 'block';
    });
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        const password = document.getElementById('pwd').value;
    
        if (password.length < 6) {
            event.preventDefault(); // Annule la soumission du formulaire
            alert('Le mot de passe doit contenir au moins 6 caractères');
        }
    });
    document.getElementById("connectButton").addEventListener("click", function(){
        document.getElementById("connectForm").style.display = "block";
    });
    
    document.getElementById("connectForm").addEventListener("submit", function(event){
        event.preventDefault();
    
        var username = document.getElementById("usernameConnect").value;
        var password = document.getElementById("pwdConnect").value;
    
        if(username == "" || password == ""){
            alert("Veuillez remplir tous les champs.");
        } else {
            alert("Connexion réussie!");
        }
    });
});
