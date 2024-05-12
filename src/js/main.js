const axios = require('axios').default;

const titleElement = document.querySelector('.vacancies-card__name');
const salaryElement = document.querySelector('.vacancies-card__salary');
const companyElement = document.querySelector('.vacancies-card__company');
const locationElement = document.querySelector('.vacancies-card__location');
const experienceElement = document.querySelector('.vacancies-card__experience');

function processData(data) {
    const { name, salary, employer, address, experience } = data;
    const salaryText = salary ? `от ${salary.from} до ${salary.to}` : 'Зарплата не указана';
    
    return {
        title: name,
        salary: salaryText,
        company: employer.name,
        location: address ? address.city : 'Местоположение не указано',
        experience: experience ? experience.name : 'Опыт не указан'
    };
}

function renderData(data) {
    titleElement.textContent = data.title;
    salaryElement.textContent = data.salary;
    companyElement.textContent = data.company;
    locationElement.textContent = data.location;
    experienceElement.textContent = data.experience;
}

axios
    .get('https://api.hh.ru/vacancies/93423389')
    .then((response) => {
        const processedData = processData(response.data);
        renderData(processedData);
    })
    .catch((error) => {
        console.error('Произошла ошибка при загрузке данных:', error);
    });

function changeDepositTerm() {

    var depositField = document.querySelector(".deposit_type_field");
    var depositType = depositField.value;
    var depositTermSelect = document.querySelector(".deposit_period_field");
    
    depositTermSelect.innerHTML = "";
    
    if (depositType === "refill") {
        var options = [
            { term: "6 месяцев", rate: 20 },
            { term: "1 год", rate: 22 },
            { term: "1,5 года", rate: 15 },
            { term: "2 года", rate: 10 }
        ];
    } else if (depositType === "express") {
        var options = [
            { term: "3 месяца", rate: 20 },
            { term: "6 месяцев", rate: 22 },
            { term: "9 месяцев", rate: 23 },
            { term: "1 год", rate: 24 },
            { term: "1,5 года", rate: 18 },
            { term: "2 года", rate: 15 }
        ];
    }
    
    options.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.rate;
        opt.innerHTML = option.term;
        depositTermSelect.appendChild(opt);
    });
    }
    
    
    
    var depositField = document.querySelector(".deposit_type_field");
    
    depositField.addEventListener("change", changeDepositTerm);
    
    
    
    function calculateDeposit(){
    
    
    
    var textOutput = document.querySelector(".text_output");
    var depositeType = document.querySelector(".deposit_type_field").selectedOptions[0].text;
    
    var depositePeriod = document.querySelector(".deposit_period_field");
    
    var interestRate = depositePeriod.value;
    
    var depositInput = document.querySelector(".price_field").value;
    let depositSumm = parseInt(depositInput);
    let result = (depositSumm + (depositSumm / 100) * interestRate);
    
    var resultString = "Вклад\"" + depositeType + "\" на срок  \"" + depositePeriod.selectedOptions[0].text + "\" на сумму " + depositSumm + "\n" 
    + "в конце срока вы получите " + result + " руб.";
    textOutput.textContent = resultString;
    }
    
    var submitButton = document.querySelector(".submit_button");
    
    submitButton.addEventListener("click", calculateDeposit);