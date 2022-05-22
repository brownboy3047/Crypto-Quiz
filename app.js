const correctAnswers = ['B', 'B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;

    const usersAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    // check answer
    usersAnswers.forEach((answer, index) => {

        if (answer === correctAnswers[index]) {

            score += 20;
        }
    });

    scrollTo(0, 0);

    result.querySelector('span').textContent = `${score}%`
    result.classList.remove('d-none');
});


