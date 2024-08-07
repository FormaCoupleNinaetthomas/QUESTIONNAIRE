document.addEventListener('DOMContentLoaded', () => {
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

    const questionnaireContainer = document.getElementById('questionnaire-container'); // Conteneur du questionnaire
    const instruction = document.getElementById('instruction'); // Instruction pour remplir le questionnaire
    let questionCounter = 0; // Démarre à 0 pour le compteur de questions
    const totalQuestions = questionsData.reduce((sum, category) => sum + category.questions.length, 0); // Calcule le nombre total de questions
    let answers = new Array(totalQuestions).fill(null); // Initialise les réponses avec des valeurs null

    // Génère dynamiquement le HTML pour chaque catégorie de questions
    questionsData.forEach((categoryData) => {
        categoryData.questions.forEach((questionText, index) => {
            const questionDiv = document.createElement('div'); // Crée un élément div pour chaque question
            questionDiv.classList.add('question'); // Ajoute la classe "question"

            const questionTitle = document.createElement('p'); // Crée un élément paragraphe pour le titre de la question
            questionTitle.textContent = questionText; // Définit le texte de la question
            questionDiv.appendChild(questionTitle); // Ajoute le titre à la div question

            const scaleDiv = document.createElement('div'); // Crée un élément div pour l'échelle
            scaleDiv.classList.add('scale'); // Ajoute la classe "scale" à la div

            const negativeLabel = document.createElement('span'); // Crée un élément span pour le label négatif
            negativeLabel.textContent = "NÉGATIF"; // Définit le texte du label négatif
            negativeLabel.classList.add('negative'); // Ajoute la classe "negative"
            scaleDiv.appendChild(negativeLabel); // Ajoute le label à la div de l'échelle

            for (let i = -10; i <= 10; i++) {
                const circle = document.createElement('div'); // Crée un élément div pour chaque cercle
                circle.classList.add('circle'); // Ajoute la classe "circle"
                circle.dataset.value = i; // Définit la valeur de chaque cercle
                circle.addEventListener('click', () => { // Ajoute un écouteur d'événement pour le clic sur le cercle
                    Array.from(scaleDiv.getElementsByClassName('circle')).forEach(c => c.classList.remove('selected')); // Supprime la classe "selected" des autres cercles
                    circle.classList.add('selected'); // Ajoute la classe "selected" au cercle cliqué
                    answers[questionCounter] = i; // Enregistre la réponse sélectionnée
                });
                scaleDiv.appendChild(circle); // Ajoute le cercle à la div de l'échelle
            }

            const neutralLabel = document.createElement('span'); // Crée un élément span pour le label neutre
            neutralLabel.textContent = "Neutre"; // Définit le texte du label neutre
            neutralLabel.classList.add('neutral'); // Ajoute la classe "neutral"
            scaleDiv.appendChild(neutralLabel); // Ajoute le label neutre à la div de l'échelle

            const positiveLabel = document.createElement('span'); // Crée un élément span pour le label positif
            positiveLabel.textContent = "POSITIF"; // Définit le texte du label positif
            positiveLabel.classList.add('positive'); // Ajoute la classe "positive"
            scaleDiv.appendChild(positiveLabel); // Ajoute le label positif à la div de l'échelle

            questionDiv.appendChild(scaleDiv); // Ajoute l'échelle à la div question

            const nextButton = document.createElement('button'); // Crée un élément bouton pour passer à la question suivante
            nextButton.textContent = "Suivant"; // Définit le texte du bouton
            nextButton.classList.add('next'); // Ajoute la classe "next" au bouton
            nextButton.addEventListener('click', () => { // Ajoute un écouteur d'événement pour le clic sur le bouton
                if (answers[questionCounter] === null) { // Vérifie si une réponse a été sélectionnée
                    alert("Veuillez sélectionner une valeur avant de continuer."); // Alerte si aucune réponse n'est sélectionnée
                } else {
                    questionDiv.classList.remove('active'); // Masque la question actuelle
                    if (questionCounter + 1 < totalQuestions) { // Vérifie s'il y a encore des questions
                        questionCounter++; // Passe à la question suivante
                        updateProgress(); // Met à jour la progression
                        const nextQuestionDiv = questionnaireContainer.querySelectorAll('.question')[questionCounter]; // Sélectionne la prochaine question
                        nextQuestionDiv.classList.add('active'); // Affiche la prochaine question
                    } else {
                        document.getElementById('submit').style.display = 'block'; // Affiche le bouton de soumission si toutes les questions sont répondues
                    }
                }
            });

            questionDiv.appendChild(nextButton); // Ajoute le bouton à la div question
            questionnaireContainer.appendChild(questionDiv); // Ajoute la question au conteneur du questionnaire
        });
    });

    document.getElementById('start-questionnaire').addEventListener('click', () => { // Écouteur d'événement pour commencer le questionnaire
        const prenom = document.getElementById('prenom').value; // Récupère la valeur du prénom
        const age = document.getElementById('age').value; // Récupère l'âge
        const sexe = document.getElementById('sexe').value; // Récupère le sexe
        const situationProfessionnelle = document.getElementById('situation-professionnelle').value; // Récupère la situation professionnelle
        const situationFamiliale = document.getElementById('situation-familiale').value; // Récupère la situation familiale
        const dureeRelation = document.getElementById('duree-relation').value; // Récupère la durée de la relation
        const cohabitation = document.getElementById('cohabitation').value; // Récupère la cohabitation
        const cohabitationDetails = document.getElementById('cohabitation-details').value; // Récupère les détails de la cohabitation
        const stress = document.getElementById('stress').value; // Récupère le niveau de stress
        const satisfaction = document.getElementById('satisfaction').value; // Récupère le niveau de satisfaction
        const tensions = document.getElementById('tensions').value; // Récupère les tensions
        const relationFamille = document.getElementById('relation-famille').value; // Récupère la relation avec la famille

        if (!prenom || !age || !sexe || !situationProfessionnelle || !situationFamiliale || !dureeRelation || !cohabitation || !cohabitationDetails || !stress || !satisfaction || !tensions || !relationFamille) {
            alert("Veuillez remplir toutes les informations personnelles avant de commencer."); // Vérifie que toutes les informations personnelles sont complètes
            return;
        }

        document.querySelector('.initial-questions').style.display = 'none'; // Masque les questions initiales
        instruction.style.display = 'block'; // Affiche les instructions
        document.getElementById('questionnaire-container').style.display = 'block'; // Affiche le conteneur du questionnaire

        const firstQuestionDiv = questionnaireContainer.querySelectorAll('.question')[0]; // Sélectionne la première question
        firstQuestionDiv.classList.add('active'); // Affiche la première question

        console.log('Début du questionnaire - première question affichée'); // Message de débogage
    });

    document.getElementById('cohabitation').addEventListener('change', function () { // Écouteur d'événement pour la sélection de cohabitation
        const detailsInput = document.getElementById('cohabitation-details'); // Récupère l'input des détails de cohabitation
        detailsInput.style.display = 'block'; // Affiche le champ de texte pour les détails
    });

    document.getElementById('submit').addEventListener('click', () => { // Écouteur d'événement pour soumettre le questionnaire
        const oddAnswers = answers.filter((_, index) => index % 2 === 0); // Filtre les réponses aux questions impaires
        const evenAnswers = answers.filter((_, index) => index % 2 !== 0); // Filtre les réponses aux questions paires

        const oddAverage = oddAnswers.reduce((sum, val) => sum + val, 0) / oddAnswers.length; // Calcule la moyenne des réponses impaires
        const evenAverage = evenAnswers.reduce((sum, val) => sum + val, 0) / evenAnswers.length; // Calcule la moyenne des réponses paires

        const averageScore = answers.reduce((sum, val) => sum + val, 0) / answers.length; // Calcule la moyenne générale
        const noteSur20 = ((averageScore + 10) / 20) * 20; // Convertit la moyenne en une note sur 20

        const resultText = `
            Informations Personnelles :
            Prénom : ${document.getElementById('prenom').value}
            Âge : ${document.getElementById('age').value}
            Sexe : ${document.getElementById('sexe').value}
            Situation Professionnelle : ${document.getElementById('situation-professionnelle').value}
            Situation Familiale : ${document.getElementById('situation-familiale').value}
            Durée de la Relation : ${document.getElementById('duree-relation').value}
            Co-habitation : ${document.getElementById('cohabitation').value}, Détails : ${document.getElementById('cohabitation-details').value}
            Niveau de Stress Actuel : ${document.getElementById('stress').value}
            Niveau de Satisfaction Actuel : ${document.getElementById('satisfaction').value}
            Sources de Tension : ${document.getElementById('tensions').value}
            Relation avec la Famille du Partenaire : ${document.getElementById('relation-famille').value}

            Résultats du Questionnaire :
            Moyenne des réponses impaires : ${oddAverage.toFixed(2)}
            Moyenne des réponses paires : ${evenAverage.toFixed(2)}
            Note sur 20 : ${noteSur20.toFixed(2)}

            Réponses complètes : ${answers.join(' - ')}
        `;

        const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' }); // Crée un fichier texte avec les résultats
        const link = document.createElement('a'); // Crée un lien pour le téléchargement
        link.href = URL.createObjectURL(blob); // Définit l'URL du fichier texte
        link.download = 'resultats_questionnaire.txt'; // Définit le nom du fichier texte
        link.click(); // Clique sur le lien pour déclencher le téléchargement

        alert('Questionnaire terminé! Vos réponses ont été enregistrées.'); // Alerte à la fin du questionnaire
    });

    function updateProgress() { // Fonction pour mettre à jour la progression du questionnaire
        console.log(`Progression: Question ${questionCounter + 1} sur ${totalQuestions}`); // Affiche la progression dans la console
    }
});
