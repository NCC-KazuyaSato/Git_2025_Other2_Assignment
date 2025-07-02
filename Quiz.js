function answerQuiz() {
    const quiz = document.getElementById('quiz');
    if (quiz.answer.value == 'd') {
        alert('正解!');
    } else {
        alert('不正解!');
    }
}
