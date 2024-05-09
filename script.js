// Fonction pour envoyer une requête AJAX et afficher les résultats de la recherche
function searchMedicament() {
    var query = document.getElementById("searchInput").value.trim();

    if (query === "") {
        alert("Veuillez entrer un nom de médicament.");
        return;
    }

    // Ici, vous pouvez remplacer cette partie de code par la logique d'envoi de la requête AJAX vers votre serveur
    // Cela dépendra de la structure et de la logique de votre serveur

    // Pour simuler la recherche côté client, nous utiliserons une fonction de recherche locale

    // Remplacez cette ligne par l'appel à votre API ou à votre serveur
    displayResults(searchLocalProducts(query));
}

// Fonction pour rechercher localement les médicaments dans le tableau productsData
function searchLocalProducts(query) {
    query = query.toLowerCase();
    return productsData.filter(function(product) {
        return product.nom.toLowerCase().includes(query);
    });
}

// Gestionnaire d'événement pour écouter les touches pressées dans le champ de recherche
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    // Vérifier si la touche pressée est la touche "Entrée" (code 13)
    if (event.key === "Enter") {
        // Appeler la fonction de recherche
        searchMedicament();
    }
});

// Fonction pour afficher les résultats de la recherche
function displayResults(results) {
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.innerHTML = "Aucun médicament trouvé.";
        return;
    }

    results.forEach(function(medicament) {
        var medicamentDiv = document.createElement("div");
        medicamentDiv.innerHTML = `
            <h3>${medicament.nom}</h3>
            <img src="${medicament.photo}" alt="${medicament.nom}" class="medicament-image">
            <p>${medicament.description}</p>
            <p><strong>Prix:</strong> ${medicament.prix} €</p>
            <p><strong>Posologie:</strong> ${medicament.posologie}</p>
        `;
        resultsDiv.appendChild(medicamentDiv);
    });
}

// Tableau de produits (simulant une base de données)
var productsData = [
    { id: 1, nom: "Paracétamol", description: "Pour la douleur et la fièvre", photo: "paracetamol.jpg", prix: 5.99, posologie: "Prendre 1 comprimé toutes les 4 heures maximum." },
    { id: 2, nom: "Ibuprofène", description: "Pour la douleur et l'inflammation", photo: "ibuprofen.jpg", prix: 6.99, posologie: "Prendre 1 comprimé toutes les 6 heures maximum." },
    { id: 3, nom: "Aspirine", description: "Pour la douleur, la fièvre et l'inflammation", photo: "aspirin.jpg", prix: 4.99, posologie: "Prendre 1 comprimé toutes les 8 heures maximum." }
    // Vous pouvez ajouter d'autres médicaments ici
];

// Function to access the camera
function accessCamera() {
    // Get the video element and camera frame container
    var videoElement = document.getElementById('cameraFeed');
    var cameraFrame = document.getElementById('cameraFrame');

    // Check if getUserMedia is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request access to the camera
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Display the camera stream in the video element
                videoElement.srcObject = stream;
                videoElement.play();

                // Show the camera frame
                cameraFrame.style.display = 'block';
            })
            .catch(function(error) {
                console.error('Error accessing the camera: ', error);
            });
    } else {
        console.error('getUserMedia is not supported');
    }
}
