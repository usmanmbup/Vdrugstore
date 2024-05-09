const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Données fictives de médicaments
const medicamentsData = [
    { id: 1, nom: "Paracétamol", description: "Pour la douleur et la fièvre", photo: "paracetamol.jpg" },
    { id: 2, nom: "Ibuprofène", description: "Pour la douleur et l'inflammation", photo: "ibuprofen.jpg" },
    { id: 3, nom: "Aspirine", description: "Pour la douleur, la fièvre et l'inflammation", photo: "aspirin.jpg" }
];

// Route pour gérer les requêtes de recherche de médicaments
app.get('/medicaments', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = medicamentsData.filter(medicament =>
        medicament.nom.toLowerCase().includes(query)
    );
    res.json(results);
});

// Port d'écoute
const port = 5000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
