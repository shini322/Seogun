$('.select').niceSelect();

// Открытие бургер-меню

const burgetButton = document.querySelector('.nav-toggle'),
  menu = document.querySelector('.menu');
burgetButton.addEventListener('click', (e) => {
  burgetButton.classList.toggle('opened');
  menu.classList.toggle('active');
});


// График на странице Competitors

var ctx = document.querySelectorAll('.line-chart__canvas');
ctx.forEach((item)=>{
  item.getContext('2d');
  var myLineChart = new Chart(item, {
    type: 'line',
    
    data: {
      labels: ['4 sep', '5 sep', '6 sep', '7 sep', '8 sep', ],
      datasets: [{
        backgroundColor: 'transparent',
        borderColor: 'rgb(226, 18, 19)',
        borderWidth: 1,
        data: [0, 1, -1, 1, -1],
        pointHoverBorderWidth: '5px',
        pointBackgroundColor: 'rgb(226, 18, 19)',
        label: ''
      }],
  
    },
    options: {
      tooltips: false,
      legend:{
        display: false
      },
      elements: {
        line: {
            tension: 0
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            color: "#000"
          },
          ticks: {
            beginAtZero: true,
            min: 1,
            max: -1,
            stepSize: 1
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            color: "#000",
            tickMarkLength: 10  
          },
        }]
      }
    }
  });
});



const tabsCaptions = document.querySelectorAll('.tabs__item'),
    tabsContent = document.querySelectorAll('.tabs-content__content-tab'),
    tabsParent = document.querySelector('.tabs__inner');

function hideTabsContent() {
    tabsContent.forEach(item =>{
        item.classList.remove('show', 'fade');
        item.classList.add('hide');
    });
    tabsCaptions.forEach(item =>{
        item.classList.remove('active');
    });
}

function showTabsContent (i = 2){
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabsCaptions[i].classList.add('active');
}
hideTabsContent();
showTabsContent();

tabsParent.addEventListener('click', (e)=>{
    const target = e.target.closest(".tabs__item");
    if (target && target.classList.contains('tabs__item')){
        tabsCaptions.forEach((item, i)=>{
            if(target == item){
                hideTabsContent();
                showTabsContent(i);
            }
        });
    }
});