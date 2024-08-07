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
    let questionCounter = 1;

    // Génère dynamiquement le HTML pour chaque catégorie de questions
    questionsData.forEach((categoryData, categoryIndex) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryData.category;
        categoryDiv.appendChild(categoryTitle);

        categoryData.questions.forEach((questionText) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');

            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `${questionText}`; // Masque le numéro de la question
            questionDiv.appendChild(questionTitle);

            const scaleDiv = document.createElement('div');
            scaleDiv.classList.add('scale');

            const negativeLabel = document.createElement('span');
            negativeLabel.classList.add('scale-label');
            negativeLabel.textContent = '-10 (Négatif)';
            scaleDiv.appendChild(negativeLabel);

            // Ajoute les cercles de notation
            for (let i = -10; i <= 10; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
                circle.setAttribute('data-value', i);
                circle.textContent = i;
                scaleDiv.appendChild(circle);
            }

            const positiveLabel = document.createElement('span');
            positiveLabel.classList.add('scale-label');
            positiveLabel.textContent = '+10 (Positif)';
            scaleDiv.appendChild(positiveLabel);

            questionDiv.appendChild(scaleDiv);

            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.name = `q${questionCounter}`; // Utilise le compteur de questions
            questionDiv.appendChild(hiddenInput);

            const nextButton = document.createElement('button');
            nextButton.classList.add('next');
            nextButton.textContent = 'Suivant';
            questionDiv.appendChild(nextButton);

            categoryDiv.appendChild(questionDiv);

            questionCounter++; // Incrémente le compteur de questions
        });

        questionnaireContainer.appendChild(categoryDiv);
    });

    // Cache ou affiche les champs supplémentaires en fonction des sélections de l'utilisateur
    document.getElementById('sexe').addEventListener('change', (event) => {
        const sexeAutre = document.getElementById('sexe-autre');
        sexeAutre.style.display = event.target.value === 'Autre' ? 'block' : 'none';
    });

    document.getElementById('situation-familiale').addEventListener('change', (event) => {
        const details = document.getElementById('situation-familiale-details');
        details.style.display = event.target.value.includes('précisez') ? 'block' : 'none';
    });

    document.getElementById('cohabitation').addEventListener('change', (event) => {
        const details = document.getElementById('cohabitation-details');
        details.style.display = event.target.value.includes('précisez') ? 'block' : 'none';
    });

    document.getElementById('relation-famille').addEventListener('input', (event) => {
        const details = document.getElementById('relation-famille-details');
        details.style.display = event.target.value < 5 ? 'block' : 'none';
    });

    // Bouton pour commencer le questionnaire principal
    document.getElementById('start-questionnaire').addEventListener('click', () => {
        const isValid = validateInitialQuestions();
        if (isValid) {
            document.querySelector('.initial-questions').classList.remove('active');
            document.querySelector('.category').classList.add('active'); // Active la première catégorie
            const firstQuestion = document.querySelector('.category .question');
            firstQuestion.classList.add('active'); // Active la première question
        } else {
            alert('Veuillez remplir tous les champs requis.');
        }
    });

    // Sélectionnez toutes les catégories de questions
    const categories = document.querySelectorAll('.category');
    let currentCategoryIndex = 0;

    // Ajoute un écouteur d'événement à chaque bouton "Suivant"
    const buttons = document.querySelectorAll('.next');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const currentCategory = categories[currentCategoryIndex];
            const currentQuestion = currentCategory.querySelector('.question.active');
            const selectedValue = currentQuestion.querySelector('.circle.selected');

            // Vérifie si une valeur a été sélectionnée
            if (selectedValue) {
                const input = currentQuestion.querySelector('input[type="hidden"]');
                input.value = selectedValue.getAttribute('data-value');

                // Passe à la question suivante
                currentQuestion.classList.remove('active');
                const nextQuestion = currentQuestion.nextElementSibling;

                if (nextQuestion && nextQuestion.classList.contains('question')) {
                    nextQuestion.classList.add('active');
                } else {
                    // Passe à la catégorie suivante
                    currentCategoryIndex++;
                    if (currentCategoryIndex < categories.length) {
                        const nextCategory = categories[currentCategoryIndex];
                        nextCategory.classList.add('active');
                        const firstQuestionOfNextCategory = nextCategory.querySelector('.question');
                        firstQuestionOfNextCategory.classList.add('active');
                    } else {
                        // Affiche le bouton de soumission à la fin
                        document.getElementById('submit').style.display = 'block';
                    }
                }
            } else {
                // Affiche un message d'alerte si aucune valeur n'est sélectionnée
                alert('Veuillez sélectionner une valeur avant de continuer.');
            }
        });
    });

    // Ajoute un écouteur d'événement à chaque cercle de l'échelle
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const currentCategory = categories[currentCategoryIndex];
            const currentQuestion = currentCategory.querySelector('.question.active');
            const selectedCircle = currentQuestion.querySelector('.circle.selected');

            // Désélectionne le cercle précédemment sélectionné
            if (selectedCircle) {
                selectedCircle.classList.remove('selected');
            }

            // Sélectionne le cercle actuel
            circle.classList.add('selected');
        });
    });

    // Gestionnaire d'événement pour le bouton de soumission des réponses
    document.getElementById('submit').addEventListener('click', () => {
        const answers = {}; // Stocke les réponses
        let totalScore = 0; // Somme des notes
        let totalOddScore = 0; // Somme des notes des questions impaires
        let totalEvenScore = 0; // Somme des notes des questions paires
        let oddQuestionCount = 0; // Compte des questions impaires
        let evenQuestionCount = 0; // Compte des questions paires

        // Récupère les réponses initiales
        const initialResponses = {
            prenom: document.getElementById('prenom').value,
            age: document.getElementById('age').value,
            sexe: document.getElementById('sexe').value,
            sexeAutre: document.getElementById('sexe-autre').value,
            situationProfessionnelle: document.getElementById('situation-professionnelle').value,
            situationFamiliale: document.getElementById('situation-familiale').value,
            situationFamilialeDetails: document.getElementById('situation-familiale-details').value,
            dureeRelation: document.getElementById('duree-relation').value,
            cohabitation: document.getElementById('cohabitation').value,
            cohabitationDetails: document.getElementById('cohabitation-details').value,
            stress: document.getElementById('stress').value,
            satisfaction: document.getElementById('satisfaction').value,
            tensions: document.getElementById('tensions').value,
            relationFamille: document.getElementById('relation-famille').value,
            relationFamilleDetails: document.getElementById('relation-famille-details').value,
        };

        // Parcourt chaque catégorie et collecte les réponses
        categories.forEach(category => {
            const inputs = category.querySelectorAll('input[type="hidden"]');
            inputs.forEach((input, index) => {
                const value = parseInt(input.value, 10); // Convertit la valeur en nombre entier
                // Convertit la valeur de l'échelle en une note sur 20
                const scoreOutOf20 = ((value + 10) / 20) * 20;
                totalScore += scoreOutOf20; // Ajoute la note à la somme totale

                // Vérifie si l'index est impair ou pair pour les moyennes
                if ((index + 1) % 2 === 0) {
                    totalEvenScore += scoreOutOf20;
                    evenQuestionCount++;
                } else {
                    totalOddScore += scoreOutOf20;
                    oddQuestionCount++;
                }

                // Ajoute la réponse au tableau des réponses
                answers[input.name] = input.value;
            });
        });

        // Calcule la moyenne des notes sur 20
        const averageScore = (totalScore / (oddQuestionCount + evenQuestionCount)).toFixed(2);
        const averageOddScore = (totalOddScore / oddQuestionCount).toFixed(2);
        const averageEvenScore = (totalEvenScore / evenQuestionCount).toFixed(2);

        // Construit une chaîne de texte pour les résultats
        let resultText = 'Informations Personnelles :\n\n';
        for (const [key, value] of Object.entries(initialResponses)) {
            if (value) {
                resultText += `${key}: ${value}\n`;
            }
        }

        resultText += '\nRéponses au questionnaire :\n\n';
        let categoryLabels = { 
            a: "A. Communication", 
            b: "B. Confiance et Engagement", 
            c: "C. Intimité et Affection", 
            d: "D. Conflits et Résolution", 
            e: "E. Valeurs et Objectifs Communs", 
            f: "F. Partenariat et Responsabilités", 
            g: "G. Finance", 
            h: "H. Influences Extérieures", 
            i: "I. Habitudes et Styles de Vie" 
        };

        let questionIndex = 1;
        for (const [key, value] of Object.entries(answers)) {
            let category = key[0];
            if (questionIndex === 1 || questionIndex % 8 === 1) {
                resultText += `\n${categoryLabels[category]}:\n`;
            }
            resultText += `Question ${questionIndex} = ${value}\n`;
            questionIndex++;
        }

        // Ajoute les moyennes au texte des résultats
        resultText += `\nNote moyenne générale (sur 20) : ${averageScore}`;
        resultText += `\nNote moyenne des questions impaires (sur 20) : ${averageOddScore}`;
        resultText += `\nNote moyenne des questions paires (sur 20) : ${averageEvenScore}`;

        // Crée un fichier Blob avec les résultats et déclenche le téléchargement
        const blob = new Blob([resultText], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'reponses.txt';
        link.click();
    });

    // Fonction de validation des questions initiales
    function validateInitialQuestions() {
        // Vérifie que tous les champs requis sont remplis
        const requiredFields = document.querySelectorAll('.initial-questions input, .initial-questions select');
        for (const field of requiredFields) {
            if (field.hasAttribute('required') && field.value.trim() === '') {
                return false;
            }
        }
        return true;
    }
});
