const axios = require('axios').default;

    axios
        .get('https://api.hh.ru/vacancies/93423389')
        .then((response) => { 
           let title = document.querySelector('.vacancies-card__name').textContent = response.data.name; 
           let salary = document.querySelector('.vacancies-card__salary').textContent = 'от ' + response.data.salary.from + ' до ' + response.data.salary.to; 
           let company = document.querySelector('.vacancies-card__company').textContent = response.data.employer.name; 
           let location = document.querySelector('.vacancies-card__location').textContent = response.data.address.city; 
           let experience = document.querySelector('.vacancies-card__experience').textContent = response.data.experience.name;
        })
        .catch((error) => {console.error(error);});

        