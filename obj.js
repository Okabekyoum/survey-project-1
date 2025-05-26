


function submitSurvey() {
    const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');

    let yesCount = 0;
    let noCount = 0;

    selectedAnswers.forEach(answer => {
      if (answer.value === "yes") {
        yesCount++;
      } else if (answer.value === "no") {
        noCount++;
      }
    });

    localStorage.setItem('yesCount', yesCount);
    localStorage.setItem('noCount', noCount);

    window.location.href = "New.html";
  }
