 // Global Variables
  let currentQuestion = 0;
  let answers = [];
  let scores = [0,0,0,0];
  let questions ;
  let results;

  //Fetch the Questions, options and scores for all the CMS
  async function fetchQuestionsData() {
    try {
      
      //testing local setup
      const response = await fetch("https://saurabh-code21.github.io/CMS-Recommendation/src/assets/questions.json");
      //const response = await fetch("./src/assets/questions.json");
      
      questions =  await response.json();
      console.log(questions);
      displayQuestion();
    }
    catch(error){
      console.error("Unable to fetch data:", error);    
    }   
  }

  //Fetch the Results
  async function fetchResultsData() {
    try {
      
      //testing local setup
      const response = await fetch("https://saurabh-code21.github.io/CMS-Recommendation/src/assets/results.json");
      //const response = await fetch("./src/assets/results.json");
      
      results =  await response.json();
      console.log(results);
    }
    catch(error){
      console.error("Unable to fetch data:", error);    
    }   
  }
  
  // Function to initialize the quiz
  function initializeQuiz() {
    currentQuestion = 0;
    answers = []; 
    scores = [0,0,0,0];
    fetchQuestionsData();
    fetchResultsData();   
  }
  
  // Function to display the current question
  function displayQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const question = questions[currentQuestion];

    const resultContainer = document.getElementById("result-container");
    resultContainer.classList.add("hide");
    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-btn");
    if(questionContainer.classList.contains("hide")) {
      questionContainer.classList.remove("hide");
    }
    if(nextButton.classList.contains("hide")) {
      nextButton.classList.remove("hide");
    }    
  
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";
  
    question.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option.text;
      optionButton.onclick = () => {
        selectOption(option);
      };
      optionsContainer.appendChild(optionButton);
    });
  }
  
  // Function to display the current question
  function hideQuestions() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.classList.add("hide");
  }

  // Function to handle option selection
  function selectOption(option) {

    // update scores
    scores[0] = scores[0] + option.sitecore;
    scores[1] = scores[1] + option.umbraco;
    scores[2] = scores[2] + option.kontentai;
    scores[3] = scores[3] + option.wordpress;

    console.log(scores);
    
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {      
      showResult();
    }
    
  }
  
  // Function to display the recommendation based on user responses
  function showResult() {

    hideQuestions();
    const resultContainer = document.getElementById("result-container");
    // const resultTitle = document.getElementById("result-title");
    // const resultText = document.getElementById("result-text");
    // const resultImage = document.getElementById("result-image");
    // const resultLinks = document.getElementsByClassName("result-link");

    if(resultContainer.classList.contains("hide")) {
      resultContainer.classList.remove("hide");
    }

    // Calculate recommendation based on user responses
    let highestScoreIndex = -1;
    let highestScore = -1;
    let i = 0;
    scores.forEach(cms => {
      if(cms > highestScore)
        {
          highestScore = cms;
          highestScoreIndex = i;
        }
        i++;
    });
    
    if(highestScore != -1 && highestScoreIndex != -1){
      switch(highestScoreIndex) {
        case 0 :  resultContentUpdate( results[0]);
                  // resultTitle.textContent = results[0].name;
                  // resultText.textContent = results[0].text;
                  // resultImage.src = results[0].image;
                  // Array.from(resultLinks).forEach( resultLink => {resultLink.href = results[0].link});
                  break;
        case 1 :  resultContentUpdate( results[1]);
                  // resultTitle.textContent = results[1].name;
                  // resultText.textContent = results[1].text;
                  // resultImage.src = results[1].image;
                  // Array.from(resultLinks).forEach( resultLink => {resultLink.href = results[1].link});
                  break;
        case 2 :  resultContentUpdate( results[2]);
                  // resultTitle.textContent = results[2].name;
                  // resultText.textContent = results[2].text;
                  // resultImage.src = results[2].image;
                  // Array.from(resultLinks).forEach( resultLink => {resultLink.href = results[2].link});
                  break;
        case 3 :  resultContentUpdate( results[3]);
                  // resultTitle.textContent = results[3].name;
                  // resultText.textContent = results[3].text;
                  // resultImage.src = results[3].image;
                  // Array.from(resultLinks).forEach( resultLink => {resultLink.href = results[3].link});
                  break;
        default : resultText.textContent = "No recommendation found.";
                  break;
      }
    } 
    
    //resultText.textContent = recommendedCMS ? `${recommendedCMS}: ${recommendations[recommendedCMS].description}` : "No recommendation found.";
    // resultContainer.style.display = "block";
    
  }
  
  function resultContentUpdate( result){

    //const resultContainer = document.getElementById("result-container");
    const resultTitle = document.getElementById("result-title");
    const resultText = document.getElementById("result-text");
    const resultImage = document.getElementById("result-image");
    const resultLinks = document.getElementsByClassName("result-link");

    resultTitle.textContent = results.name;
    resultText.textContent = results.text;
    resultImage.src = results.image;
    Array.from(resultLinks).forEach( resultLink => {resultLink.href = results.link});
  }
  
  // Function to proceed to the next question
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Initialize the quiz when the page loads
  window.onload = initializeQuiz;