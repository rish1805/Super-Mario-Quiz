const correctAnswers = ['B', 'B', 'A', 'A']; 
const form = document.querySelector('.quiz-form'); 
const result = document.querySelector('.result');

form.addEventListener('submit', events => {
    events.preventDefault(); // we don't want the page to refresh 

    let score = 0; 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; 

    // checking of answers 
    userAnswers.forEach( (userAnswers, index) => {
        if (userAnswers === correctAnswers[index]){
            score += 25; 
        } 
    });

    // show result on page 
    scrollTo(0, 0);
    result.classList.remove('d-none');

    
    // score animator 
    let output = 0; 
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`; 
        if (output === score){
            clearInterval(timer); 
        } else {
            output++; 
        }
    }, 10 ); 
});


