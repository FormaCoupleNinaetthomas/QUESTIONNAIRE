document.addEventListener('DOMContentLoaded', () => {
    // Liste complète des catégories et questions
    const questionsData = [
        {
            category: "A. Communication",
            questions: [
                "Je me sens à l'aise pour exprimer mes pensées et mes émotions à mon/ma partenaire.",
                "Je pense que mon/ma partenaire est à l'aise pour exprimer ses pensées et ses émotions.",
                "Mon/ma partenaire écoute attentivement ce que je dis.",
                "Je pense que j'écoute attentivement ce que mon/ma partenaire dit.",
                "Nous discutons ouvertement des problèmes avant qu'ils ne deviennent graves.",
                "Mon/ma partenaire pense que nous discutons ouvertement des problèmes avant qu'ils ne deviennent graves.",
                "Je me sens compris(e) par mon/ma partenaire.",
                "Mon/ma partenaire se sent compris(e) par moi."
            ]
        },
        {
            category: "B. Confiance et Engagement",
            questions: [
                "J'ai confiance en mon/ma partenaire.",
                "Mon/ma partenaire a confiance en moi.",
                "Je ressens de la jalousie dans notre relation.",
                "Mon/ma partenaire ressent de la jalousie dans notre relation.",
                "Nous sommes tous deux engagés à faire fonctionner notre relation.",
                "Mon/ma partenaire est engagé à faire fonctionner notre relation.",
                "Je me sens en sécurité dans notre relation.",
                "Mon/ma partenaire se sent en sécurité dans notre relation."
            ]
        },
        {
            category: "C. Intimité et Affection",
            questions: [
                "Je me sens connecté(e) émotionnellement à mon/ma partenaire.",
                "Mon/ma partenaire se sent connecté(e) émotionnellement à moi.",
                "Nous passons suffisamment de temps de qualité ensemble.",
                "Mon/ma partenaire pense que nous passons suffisamment de temps de qualité ensemble.",
                "Notre relation intime est satisfaisante.",
                "Mon/ma partenaire pense que notre relation intime est satisfaisante.",
                "Nous exprimons régulièrement notre affection l'un envers l'autre.",
                "Mon/ma partenaire pense que nous exprimons régulièrement notre affection l'un envers l'autre."
            ]
        },
        {
            category: "D. Conflits et Résolution",
            questions: [
                "Nous résolvons nos désaccords de manière constructive.",
                "Mon/ma partenaire pense que nous résolvons nos désaccords de manière constructive.",
                "Les conflits entre nous sont fréquents.",
                "Mon/ma partenaire pense que les conflits entre nous sont fréquents.",
                "Je ressens de la rancune à propos de conflits passés non résolus.",
                "Mon/ma partenaire pense que je ressens de la rancune à propos de conflits passés non résolus.",
                "Nous arrivons à trouver des compromis satisfaisants pour les deux parties.",
                "Mon/ma partenaire pense que nous arrivons à trouver des compromis satisfaisants pour les deux parties."
            ]
        },
        {
            category: "E. Valeurs et Objectifs Communs",
            questions: [
                "Nous partageons les mêmes valeurs fondamentales.",
                "Mon/ma partenaire pense que nous partageons les mêmes valeurs fondamentales.",
                "Nos objectifs de vie sont alignés.",
                "Mon/ma partenaire pense que nos objectifs de vie sont alignés.",
                "Nous avons des projets communs pour l'avenir.",
                "Mon/ma partenaire pense que nous avons des projets communs pour l'avenir.",
                "Nous accordons une importance similaire à nos carrières respectives.",
                "Mon/ma partenaire pense que nous accordons une importance similaire à nos carrières respectives."
            ]
        },
        {
            category: "F. Partenariat et Responsabilités",
            questions: [
                "Les tâches domestiques sont réparties équitablement entre nous.",
                "Mon/ma partenaire pense que les tâches domestiques sont réparties équitablement entre nous.",
                "Je reçois le soutien émotionnel dont j'ai besoin de mon/ma partenaire.",
                "Mon/ma partenaire reçoit le soutien émotionnel dont il/elle a besoin de ma part.",
                "Nous formons une équipe efficace pour gérer les responsabilités familiales.",
                "Mon/ma partenaire pense que nous formons une équipe efficace pour gérer les responsabilités familiales.",
                "Je me sens valorisé(e) et apprécié(e) dans notre relation.",
                "Mon/ma partenaire se sent valorisé(e) et apprécié(e) dans notre relation."
            ]
        },
        {
            category: "G. Finance",
            questions: [
                "Nous gérons bien nos finances ensemble.",
                "Mon/ma partenaire pense que nous gérons bien nos finances ensemble.",
                "Nous discutons ouvertement de nos préoccupations financières.",
                "Mon/ma partenaire pense que nous discutons ouvertement de nos préoccupations financières.",
                "Nos habitudes de dépense sont compatibles.",
                "Mon/ma partenaire pense que nos habitudes de dépense sont compatibles.",
                "Les finances causent des tensions dans notre relation.",
                "Mon/ma partenaire pense que les finances causent des tensions dans notre relation."
            ]
        },
        {
            category: "H. Influences Extérieures",
            questions: [
                "Le stress lié au travail impacte négativement notre relation.",
                "Mon/ma partenaire pense que le stress lié au travail impacte négativement notre relation.",
                "Les opinions de nos familles respectives influencent notre relation.",
                "Mon/ma partenaire pense que les opinions de nos familles respectives influencent notre relation.",
                "Nous gérons bien les pressions extérieures ensemble.",
                "Mon/ma partenaire pense que nous gérons bien les pressions extérieures ensemble.",
                "Notre environnement social (amis, communauté) soutient notre relation.",
                "Mon/ma partenaire pense que notre environnement social (amis, communauté) soutient notre relation."
            ]
        },
        {
            category: "I. Habitudes et Styles de Vie",
            questions: [
                "Nos habitudes de vie (sommeil, loisirs) sont compatibles.",
                "Mon/ma partenaire pense que nos habitudes de vie (sommeil, loisirs) sont compatibles.",
                "Nous avons des hobbies ou des intérêts communs.",
                "Mon/ma partenaire pense que nous avons des hobbies ou des intérêts communs.",
                "Nous apprécions le même type d'activités sociales.",
                "Mon/ma partenaire pense que nous apprécions le même type d'activités sociales.",
                "Nos routines quotidiennes s'harmonisent bien.",
                "Mon/ma partenaire pense que nos routines quotidiennes s'harmonisent bien."
            ]
        }
    ];

    const questionnaireContainer = document.getElementById('questionnaire-container');
    let questionCounter = 0; // Start from 0
    const totalQuestions = questionsData.reduce((sum, category) => sum + category.questions.length, 0);
    let answers = new Array(totalQuestions).fill(null);

    // Génère dynamiquement le HTML pour chaque catégorie de questions
    questionsData.forEach((categoryData) => {
        categoryData.questions.forEach((questionText, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            if (questionCounter === 0) {
                questionDiv.classList.add('active');
            }

            const questionTitle = document.createElement('p');
            questionTitle.textContent = questionText;
            questionDiv.appendChild(questionTitle);

            const scaleDiv = document.createElement('div');
            scaleDiv.classList.add('scale');

            const negativeLabel = document.createElement('span');
            negativeLabel.textContent = "-10 (Négatif)";
            scaleDiv.appendChild(negativeLabel);

            for (let i = -10; i <= 10; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                circle.dataset.value = i;
                circle.textContent = i;
                circle.addEventListener('click', () => {
                    // Remove 'selected' class from all circles
                    Array.from(scaleDiv.getElementsByClassName('circle')).forEach(c => c.classList.remove('selected'));
                    // Add 'selected' class to clicked circle
                    circle.classList.add('selected');
                    answers[questionCounter] = i;
                });
                scaleDiv.appendChild(circle);
            }

            const positiveLabel = document.createElement('span');
            positiveLabel.textContent = "+10 (Positif)";
            scaleDiv.appendChild(positiveLabel);

            questionDiv.appendChild(scaleDiv);

            const nextButton = document.createElement('button');
            nextButton.textContent = "Suivant";
            nextButton.classList.add('next');
            nextButton.addEventListener('click', () => {
                if (answers[questionCounter] === null) {
                    alert("Veuillez sélectionner une valeur avant de continuer.");
                } else {
                    // Move to the next question
                    questionDiv.classList.remove('active');
                    if (questionCounter + 1 < totalQuestions) {
                        questionCounter++;
                        updateProgress();
                        const nextQuestionDiv = questionnaireContainer.querySelectorAll('.question')[questionCounter];
                        nextQuestionDiv.classList.add('active');
                    } else {
                        // All questions answered, show submit button
                        document.getElementById('submit').style.display = 'block';
                    }
                }
            });

            questionDiv.appendChild(nextButton);
            questionnaireContainer.appendChild(questionDiv);
            questionCounter++;
        });
    });

    // Start Questionnaire button click
    document.getElementById('start-questionnaire').addEventListener('click', () => {
        // Ensure initial questions are valid
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
        document.querySelectorAll('.question')[0].classList.add('active'); // Show the first question

        console.log('Début du questionnaire - première question affichée');
    });

    // Submit button event
    document.getElementById('submit').addEventListener('click', () => {
        // Calculer les moyennes des réponses
        const oddAnswers = answers.filter((_, index) => index % 2 === 0); // questions impaires
        const evenAnswers = answers.filter((_, index) => index % 2 !== 0); // questions paires

        const oddAverage = oddAnswers.reduce((sum, val) => sum + val, 0) / oddAnswers.length;
        const evenAverage = evenAnswers.reduce((sum, val) => sum + val, 0) / evenAnswers.length;

        // Calculer la note sur 20
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
            Co-habitation: ${document.getElementById('cohabitation').value}
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
