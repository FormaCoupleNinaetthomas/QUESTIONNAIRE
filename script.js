// script.js

document.addEventListener('DOMContentLoaded', () => {
const questionsData = [
    {
        category: "A. Communication",
        questions: [
            "Je m'exprime librement sur mes pensées et émotions avec mon/ma partenaire.",
            "Mon/ma partenaire semble à l'aise pour partager ses pensées et ses émotions.",
            "Mon/ma partenaire prête une oreille attentive à mes propos.",
            "J'écoute avec attention ce que mon/ma partenaire souhaite exprimer.",
            "Nous abordons les problèmes sans détour avant qu'ils ne s'aggravent.",
            "Mon/ma partenaire estime que nous discutons ouvertement des défis avant qu'ils ne deviennent sérieux.",
            "Je me sens véritablement entendu(e) par mon/ma partenaire.",
            "Mon/ma partenaire se sent écouté(e) et compris(e) par moi."
        ]
    },
    {
        category: "B. Confiance et Engagement",
        questions: [
            "La confiance mutuelle est une pierre angulaire de notre relation.",
            "Mon/ma partenaire me fait entièrement confiance.",
            "Il m'arrive de ressentir de la jalousie dans notre couple.",
            "Mon/ma partenaire éprouve parfois de la jalousie à mon égard.",
            "Nous partageons un engagement fort pour faire prospérer notre relation.",
            "Mon/ma partenaire est résolument engagé(e) à faire fonctionner notre couple.",
            "Je me sens en paix et en sécurité dans notre relation.",
            "Mon/ma partenaire ressent un sentiment de sécurité dans notre relation."
        ]
    },
    {
        category: "C. Intimité et Affection",
        questions: [
            "Je ressens une connexion émotionnelle profonde avec mon/ma partenaire.",
            "Mon/ma partenaire se sent proche de moi, émotionnellement.",
            "Nous savons consacrer du temps de qualité à notre relation.",
            "Mon/ma partenaire apprécie le temps que nous passons ensemble.",
            "Notre intimité est une source de satisfaction pour moi.",
            "Mon/ma partenaire trouve que notre vie intime est épanouissante.",
            "Nous exprimons fréquemment notre affection l'un envers l'autre.",
            "Mon/ma partenaire perçoit notre relation comme affectueuse et tendre."
        ]
    },
    {
        category: "D. Conflits et Résolution",
        questions: [
            "Nos désaccords sont gérés de manière constructive.",
            "Mon/ma partenaire pense que nous résolvons nos conflits de façon positive.",
            "Les conflits surgissent souvent dans notre relation.",
            "Mon/ma partenaire trouve que nos disputes sont fréquentes.",
            "Je garde parfois rancune à propos de conflits non résolus.",
            "Mon/ma partenaire ressent que je conserve des ressentiments sur des conflits passés.",
            "Nous parvenons à des compromis qui satisfont les deux parties.",
            "Mon/ma partenaire estime que nous trouvons des compromis équitables."
        ]
    },
    {
        category: "E. Valeurs et Objectifs Communs",
        questions: [
            "Nous partageons les mêmes valeurs fondamentales dans notre couple.",
            "Mon/ma partenaire et moi sommes alignés sur nos valeurs essentielles.",
            "Nos objectifs de vie convergent naturellement.",
            "Mon/ma partenaire et moi avons des objectifs de vie similaires.",
            "Nous avons une vision commune pour notre avenir.",
            "Mon/ma partenaire voit l'avenir de la même manière que moi.",
            "Nous accordons une importance comparable à nos carrières respectives.",
            "Mon/ma partenaire et moi avons des priorités professionnelles alignées."
        ]
    },
    {
        category: "F. Partenariat et Responsabilités",
        questions: [
            "Les tâches domestiques sont réparties de manière équitable entre nous.",
            "Mon/ma partenaire et moi partageons les responsabilités de la maison équitablement.",
            "Je reçois le soutien émotionnel dont j'ai besoin de mon/ma partenaire.",
            "Mon/ma partenaire trouve qu'il/elle reçoit le soutien émotionnel nécessaire de ma part.",
            "Nous formons une équipe efficace pour gérer nos responsabilités familiales.",
            "Mon/ma partenaire et moi travaillons en tandem pour gérer la famille.",
            "Je me sens valorisé(e) et apprécié(e) dans notre relation.",
            "Mon/ma partenaire se sent valorisé(e) et reconnu(e) dans notre couple."
        ]
    },
    {
        category: "G. Finance",
        questions: [
            "Nous gérons nos finances de manière harmonieuse.",
            "Mon/ma partenaire trouve que nous gérons bien nos finances ensemble.",
            "Nous discutons ouvertement de nos préoccupations financières.",
            "Mon/ma partenaire estime que nous abordons les sujets financiers avec transparence.",
            "Nos habitudes de dépense s'harmonisent bien.",
            "Mon/ma partenaire pense que nos styles de dépense sont compatibles.",
            "Les questions financières créent des tensions dans notre relation.",
            "Mon/ma partenaire pense que les finances sont une source de tension entre nous."
        ]
    },
    {
        category: "H. Influences Extérieures",
        questions: [
            "Le stress professionnel a un impact négatif sur notre relation.",
            "Mon/ma partenaire trouve que le travail affecte notre relation.",
            "Les opinions de nos familles influencent notre couple.",
            "Mon/ma partenaire pense que les avis familiaux jouent un rôle dans notre relation.",
            "Nous gérons bien les pressions extérieures ensemble.",
            "Mon/ma partenaire estime que nous faisons face aux pressions extérieures de manière solidaire.",
            "Notre entourage social soutient notre relation.",
            "Mon/ma partenaire pense que notre cercle social renforce notre couple."
        ]
    },
    {
        category: "I. Habitudes et Styles de Vie",
        questions: [
            "Nos modes de vie sont compatibles (sommeil, loisirs).",
            "Mon/ma partenaire trouve que nos habitudes de vie s'accordent bien.",
            "Nous partageons des hobbies ou des intérêts communs.",
            "Mon/ma partenaire et moi avons des passions communes.",
            "Nous apprécions les mêmes types d'activités sociales.",
            "Mon/ma partenaire et moi aimons les mêmes sorties sociales.",
            "Nos routines quotidiennes s'harmonisent bien.",
            "Mon/ma partenaire trouve que nos routines s'accordent bien."
        ]
    }
];
    
    const questionnaireContainer = document.getElementById('questionnaire-container');
    const instruction = document.getElementById('instruction');
    let questionCounter = 0; // Démarrer à la première question
    const totalQuestions = questionsData.reduce((sum, category) => sum + category.questions.length, 0);
    let answers = new Array(totalQuestions).fill(null);

    // Générer dynamiquement le HTML pour chaque catégorie de questions
    questionsData.forEach((categoryData) => {
        categoryData.questions.forEach((questionText, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionTitle = document.createElement('p');
            questionTitle.textContent = questionText;
            questionDiv.appendChild(questionTitle);

            const scaleDiv = document.createElement('div');
            scaleDiv.classList.add('scale');

            const negativeLabel = document.createElement('span');
            negativeLabel.textContent = "NE PENSE PAS >";
            negativeLabel.classList.add('negative-label');
            scaleDiv.appendChild(negativeLabel);

            for (let i = -5; i <= 5; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                circle.dataset.value = i;
                circle.addEventListener('click', () => {
                    // Enlever la classe 'selected' de tous les cercles
                    Array.from(scaleDiv.getElementsByClassName('circle')).forEach(c => c.classList.remove('selected'));
                    // Ajouter la classe 'selected' au cercle cliqué
                    circle.classList.add('selected');
                    answers[questionCounter] = i;
                });
                scaleDiv.appendChild(circle);
            }

            const positiveLabel = document.createElement('span');
            positiveLabel.textContent = "<  JE LE PENSE";
            positiveLabel.classList.add('positive-label');
            scaleDiv.appendChild(positiveLabel);

            questionDiv.appendChild(scaleDiv);

            const nextButton = document.createElement('button');
            nextButton.textContent = "Suivant";
            nextButton.classList.add('next');
            nextButton.addEventListener('click', () => {
                if (answers[questionCounter] === null) {
                    alert("Veuillez sélectionner une valeur avant de continuer.");
                } else {
                    // Passer à la question suivante
                    questionDiv.classList.remove('active');
                    questionCounter++;
                    if (questionCounter < totalQuestions) {
                        updateProgress();
                        const nextQuestionDiv = questionnaireContainer.querySelectorAll('.question')[questionCounter];
                        nextQuestionDiv.classList.add('active');
                    } else {
                        // Toutes les questions ont été répondues, montrer le bouton de soumission
                        document.getElementById('submit').style.display = 'block';
                    }
                }
            });

            questionDiv.appendChild(nextButton);
            questionnaireContainer.appendChild(questionDiv);
        });
    });

    // Bouton de démarrage du questionnaire
    document.getElementById('start-questionnaire').addEventListener('click', () => {
        // Vérification des informations initiales
        const prenom = document.getElementById('prenom').value;
        const age = document.getElementById('age').value;
        const sexe = document.getElementById('sexe').value;
        const situationProfessionnelle = document.getElementById('situation-professionnelle').value;
        const situationFamiliale = document.getElementById('situation-familiale').value;
        const dureeRelation = document.getElementById('duree-relation').value;
        const cohabitation = document.getElementById('cohabitation').value;
        const stress = document.getElementById('stress').value;
        const satisfaction = document.getElementById('satisfaction').value;
        const tensions = document.getElementById('tensions').value;
        const relationFamille = document.getElementById('relation-famille').value;

        if (!prenom || !age || !sexe || !situationProfessionnelle || !situationFamiliale || !dureeRelation || !cohabitation || !stress || !satisfaction || !tensions || !relationFamille) {
            alert("Veuillez remplir toutes les informations personnelles avant de commencer.");
            return;
        }

        document.querySelector('.initial-questions').style.display = 'none';
        instruction.style.display = 'block';
        document.getElementById('questionnaire-container').style.display = 'block';

        // Afficher la première question
        const firstQuestionDiv = questionnaireContainer.querySelectorAll('.question')[0];
        firstQuestionDiv.classList.add('active');
    });

    // Gestion de la sélection de cohabitation pour afficher le champ de texte
    document.getElementById('cohabitation').addEventListener('change', function () {
        const detailsInput = document.getElementById('cohabitation-details');
        detailsInput.style.display = 'block';
    });

    // Bouton de soumission
    document.getElementById('submit').addEventListener('click', () => {
        // Calcul des moyennes des réponses
        const oddAnswers = answers.filter((_, index) => index % 2 === 0); // questions impaires
        const evenAnswers = answers.filter((_, index) => index % 2 !== 0); // questions paires

        const oddAverage = oddAnswers.reduce((sum, val) => sum + val, 0) / oddAnswers.length;
        const evenAverage = evenAnswers.reduce((sum, val) => sum + val, 0) / evenAnswers.length;

        // Calcul de la note sur 20
        const averageScore = answers.reduce((sum, val) => sum + val, 0) / answers.length;
        const noteSur20 = ((averageScore + 10) / 20) * 20; // Convertir -10 à 10 en 0 à 20

        const resultText = `
            Informations Personnelles:
            Prénom: ${document.getElementById('prenom').value}
            Âge: ${document.getElementById('age').value}
            Sexe: ${document.getElementById('sexe').value}
            Situation Professionnelle: ${document.getElementById('situation-professionnelle').value}
            Situation Familiale: ${document.getElementById('situation-familiale').value}
            Durée de la Relation: ${document.getElementById('duree-relation').value}
            Co-habitation: ${document.getElementById('cohabitation').value}, Détails: ${document.getElementById('cohabitation-details').value}
            Niveau de Stress Actuel: ${document.getElementById('stress').value}
            Niveau de Satisfaction Actuel: ${document.getElementById('satisfaction').value}
            Sources de Tension: ${document.getElementById('tensions').value}
            Relation avec la Famille du Partenaire: ${document.getElementById('relation-famille').value}

            Résultats du Questionnaire:
            Moyenne des réponses impaires: ${oddAverage.toFixed(2)}
            Moyenne des réponses paires: ${evenAverage.toFixed(2)}
            Note sur 20: ${noteSur20.toFixed(2)}

            Réponses complètes: ${answers.join(', ')}
        `;

        // Téléchargement du fichier .txt
        const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resultats_questionnaire.txt';
        link.click();

        alert('Questionnaire terminé! Vos réponses ont été enregistrées.');
    });

    // Fonction pour mettre à jour la progression
    function updateProgress() {
        console.log(`Progression: Question ${questionCounter + 1} sur ${totalQuestions}`);
    }
});
