document.addEventListener('DOMContentLoaded', () => {
    const questionsData = [
        // Vos catégories et questions
    ];

    const questionnaireContainer = document.getElementById('questionnaire-container');
    let questionCounter = 0; // Start from 0
    const totalQuestions = questionsData.reduce((sum, category) => sum + category.questions.length, 0);
    let answers = new Array(totalQuestions).fill(null);

    // Génère dynamiquement le HTML pour chaque catégorie de questions
    questionsData.forEach((categoryData, categoryIndex) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');

        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryData.category;
        categoryDiv.appendChild(categoryTitle);

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
                    Array.from(scaleDiv.getElementsByClassName('circle')).forEach(c => c.classList.remove('selected'));
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
                        document.getElementById('submit').style.display = 'block';
                    }
                }
            });

            questionDiv.appendChild(nextButton);
            categoryDiv.appendChild(questionDiv);
            questionCounter++;
        });

        questionnaireContainer.appendChild(categoryDiv);
    });

    document.getElementById('start-questionnaire').addEventListener('click', () => {
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
        document.querySelectorAll('.question')[0].classList.add('active');
    });

    document.getElementById('submit').addEventListener('click', () => {
        const oddAnswers = answers.filter((_, index) => index % 2 === 0);
        const evenAnswers = answers.filter((_, index) => index % 2 !== 0);

        const oddAverage = oddAnswers.reduce((sum, val) => sum + val, 0) / oddAnswers.length;
        const evenAverage = evenAnswers.reduce((sum, val) => sum + val, 0) / evenAnswers.length;

        const averageScore = answers.reduce((sum, val) => sum + val, 0) / answers.length;
        const noteSur20 = ((averageScore + 10) / 20) * 20;

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

        const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resultats_questionnaire.txt';
        link.click();

        alert('Questionnaire terminé! Vos réponses ont été enregistrées.');
    });

    function updateProgress() {
        console.log(`Progression: Question ${questionCounter + 1} sur ${totalQuestions}`);
    }
});
