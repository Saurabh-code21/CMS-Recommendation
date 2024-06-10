// Define the quiz questions and corresponding CMS recommendations
const old_questions = [
    {
      question_id: "01",
      question: "What type of website are you planning to build?",
      options:[
        { 
          option_id: "01",
          text: "Blog or personal website",
          sitecore: 5,
          umbraco: 7,
          kontentai: 5,
          wordpress: 10
        },
        {
          option_id: "02",
          text: "E-commerce platform",
          sitecore: 7,
          umbraco: 7,
          kontentai: 5,
          wordpress: 7
        },
        {
          option_id: "03",
          text: "Corporate website",
          sitecore: 10,
          umbraco: 9,
          kontentai: 7,
          wordpress: 7
        },
        {
          option_id: "04",
          text: "Portfolio or gallery website",
          sitecore: 7,
          umbraco: 7,
          kontentai: 7,
          wordpress: 9
        }
      ]
    },
    {
      question_id: "02",
      question: "How much customization do you require for your website's design?",
      options:[
        { 
          option_id: "01",
          text: "Minimal customization",
          sitecore: 5,
          umbraco: 7,
          kontentai: 7,
          wordpress: 10
        },
        {
          option_id: "02",
          text: "Moderate customization",
          sitecore: 7,
          umbraco: 10,
          kontentai: 7,
          wordpress: 9
        },
        {
          option_id: "03",
          text: "Extensive customization",
          sitecore: 10,
          umbraco: 9,
          kontentai: 6,
          wordpress: 7
        },
        {
          option_id: "04",
          text: "I need complete control over every aspect",
          sitecore: 10,
          umbraco: 8,
          kontentai: 5,
          wordpress: 5
        }
      ]
    },
    {
      question_id: "03",
      question: "What is your level of technical expertise or What technical expertise your dev team has?",      
      options:[
        { 
          option_id: "01",
          text: "Beginner - have little or no experience in web development",
          sitecore: 2,
          umbraco: 5,
          kontentai: 5,
          wordpress: 10
        },
        {
          option_id: "02",
          text: "Intermediate - have some experience with web development but still learning",
          sitecore: 5,
          umbraco: 7,
          kontentai: 7,
          wordpress: 8
        },
        {
          option_id: "03",
          text: "Advanced - have good experience of web development and programming",
          sitecore: 9,
          umbraco: 9,
          kontentai: 7,
          wordpress: 6
        },
        {
          option_id: "04",
          text: "Expert - proficient in web development and programming languages",
          sitecore: 10,
          umbraco: 10,
          kontentai: 7,
          wordpress: 4
        }
      ]
    },
    {
      question_id: "04",
      question: "How important is scalibility and performance for your website?",
      options:[
        { 
          option_id: "01",
          text: "Not very important",
          sitecore: 5,
          umbraco: 5,
          kontentai: 5,
          wordpress: 7
        },
        {
          option_id: "02",
          text: "Somewhat important",
          sitecore: 7,
          umbraco: 7,
          kontentai: 7,
          wordpress: 7
        },
        {
          option_id: "03",
          text: "Important - I anticipate high traffic and need good performance",
          sitecore: 10,
          umbraco: 10,
          kontentai: 8,
          wordpress: 8
        },
        {
          option_id: "04",
          text: "Extremely important - I need the highest level of scalibility and performance",
          sitecore: 10,
          umbraco: 8,
          kontentai: 7,
          wordpress: 6
        }
      ]
    },
    {
      question_id: "05",
      question: "Are you planning to integrate third-party plugins or extensions?",
      options:[
        { 
          option_id: "01",
          text: "No, I prefer to keep my website simple and lightweight",
          sitecore: 5,
          umbraco: 5,
          kontentai: 5,
          wordpress: 7
        },
        {
          option_id: "02",
          text: "Maybe, depending on the specific functionalities I need",
          sitecore: 7,
          umbraco: 7,
          kontentai: 5,
          wordpress: 8
        },
        {
          option_id: "03",
          text: "Yes, I want the flexibility to add various features to my website",
          sitecore: 9,
          umbraco: 9,
          kontentai: 8,
          wordpress: 9
        },
        {
          option_id: "04",
          text: "Absolutely, I need extensive integration options for advanced functionalities",
          sitecore: 10,
          umbraco: 10,
          kontentai: 7,
          wordpress: 10
        }
      ]
    },
    {
      question_id: "06",
      question: "What is your budget for website development and maintenance?",
      options:[
        { 
          option_id: "01",
          text: "Limited budget",
          sitecore: 2,
          umbraco: 7,
          kontentai: 7,
          wordpress: 10
        },
        {
          option_id: "02",
          text: "Moderate budget",
          sitecore: 5,
          umbraco: 7,
          kontentai: 7,
          wordpress: 9
        },
        {
          option_id: "03",
          text: "Generous budget",
          sitecore: 8,
          umbraco: 9,
          kontentai: 9,
          wordpress: 7
        },
        {
          option_id: "04",
          text: "Budget is not a concern, I'm willing to invest as needed",
          sitecore: 10,
          umbraco: 10,
          kontentai: 10,
          wordpress: 5
        }
      ]
    },
    {
      question_id: "07",
      question: "Do you require multi-language support for your website?",      
      options:[
        { 
          option_id: "01",
          text: "No, English is sufficient",
          sitecore: 5,
          umbraco: 7,
          kontentai: 5,
          wordpress: 10
        },
        {
          option_id: "02",
          text: "Maybe, I might need multilingual support in the future",
          sitecore: 7,
          umbraco: 7,
          kontentai: 7,
          wordpress: 9
        },
        {
          option_id: "03",
          text: "Yes, I need built-in support for multiple languages",
          sitecore: 10,
          umbraco: 9,
          kontentai: 9,
          wordpress: 7
        },
        {
          option_id: "04",
          text: "Absolutely, multilingual support is crucial for my website",
          sitecore: 10,
          umbraco: 10,
          kontentai: 10,
          wordpress: 5
        }
      ]
    },
    {
      question_id: "08",
      question: "How important is ease of use and user-friendliness for your CMS for your content-editors?",      
      options:[
        { 
          option_id: "01",
          text: "Not very important",
          sitecore: 8,
          umbraco: 5,
          kontentai: 7,
          wordpress: 9
        },
        {
          option_id: "02",
          text: "Somewhat important",
          sitecore: 7,
          umbraco: 7,
          kontentai: 8,
          wordpress: 8
        },
        {
          option_id: "03",
          text: "Important - I want a CMS that is intuitive for both content editors and visitors",
          sitecore: 7,
          umbraco: 9,
          kontentai: 8,
          wordpress: 8
        },
        {
          option_id: "04",
          text: "Extremely important - Usability is a top priority for me",
          sitecore: 6,
          umbraco: 10,
          kontentai: 9,
          wordpress: 8
        }
      ]
    },
    // Add more questions here...
  ];
   

  // Global Variables
  let currentQuestion = 0;
  let answers = [];
  let scores = [0,0,0,0];
  let questions ;

  async function fetchJSONData() {
    try {

      const response = await fetch("./src/assets/questions.json");
      questions =  await res.json();
      console.log(questions);
      displayQuestion();
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
    fetchJSONData();    
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
    //const nextButton = document.getElementById("next-btn");

    questionContainer.classList.add("hide");
    //nextButton.classList.add("hide");
  }

  // Function to handle option selection
  function selectOption(option) {
    //answers.push(optionIndex);
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
    const resultText = document.getElementById("result-text");

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
        case 0 :  resultText.textContent = "Sitecore should be your choice. \n Best For: Enterprise-level organizations needing extensive customization and scalability."
                  break;
        case 1 :  resultText.textContent = "Umbraco should be your choice. \n Best For: Mid-sized businesses and organizations looking for an open-source, flexible CMS."
                  break;
        case 2 :  resultText.textContent = "Kontent.ai should be your choice. \n Best For: Businesses seeking a headless CMS for modern, multi-channel content delivery."
                  break;
        case 3 :  resultText.textContent = "WordPress should be your choice. \n Best For: Small to large businesses looking for an easy-to-use, highly extendable CMS with a vast ecosystem."
                  break;
        default : resultText.textContent = "No recommendation found.";
                  break;
      }
    } 
    
    //resultText.textContent = recommendedCMS ? `${recommendedCMS}: ${recommendations[recommendedCMS].description}` : "No recommendation found.";
    // resultContainer.style.display = "block";
    
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