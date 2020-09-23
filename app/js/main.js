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
ctx.forEach((item) => {
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
      legend: {
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

// Табы

const tabsCaptionsAside = document.querySelectorAll('.aside-bar__list-item'),
  tabsContentAside = document.querySelectorAll('.tabs-content__aside-content-tab'),
  tabsParentAside = document.querySelector('.aside-bar__list');

function hideTabsContentAside() {
  tabsContentAside.forEach(item => {
    item.classList.remove('show', 'fade');
    item.classList.add('hide');
  });
  tabsCaptionsAside.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabsContentAside(i = 0) {
  if (tabsContentAside[i] && tabsCaptionsAside[i]) {
    tabsContentAside[i].classList.add('show', 'fade');
    tabsContentAside[i].classList.remove('hide');
    tabsCaptionsAside[i].classList.add('active');
  }
}
hideTabsContentAside();
showTabsContentAside();

tabsParentAside.addEventListener('click', (e) => {
  const target = e.target.closest(".aside-bar__list-item");
  if (target && target.classList.contains('aside-bar__list-item')) {
    tabsCaptionsAside.forEach((item, i) => {
      if (target == item) {
        hideTabsContentAside();
        showTabsContentAside(i);
      }
    });
  }
});

const tabsCaptions = document.querySelectorAll('.tabs__item'),
  tabsContent = document.querySelectorAll('.tabs-content__content-tab'),
  tabsParent = document.querySelector('.tabs__inner'),
  titleTabs = document.querySelectorAll('.tab-title');

function hideTabsContent() {
  tabsContent.forEach(item => {
    item.classList.remove('show', 'fade');
    item.classList.add('hide');
  });
  titleTabs.forEach(item =>{
    item.classList.remove('show-inline', 'fade');
    item.classList.add('hide'); 
  });
  tabsCaptions.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabsContent(i = 0) {
  if (tabsContent[i] && tabsCaptions[i]) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabsCaptions[i].classList.add('active');
    titleTabs[i].classList.remove('hide');
    titleTabs[i].classList.add('show-inline');
  }

}
hideTabsContent();
showTabsContent();

if (tabsParent) {
  tabsParent.addEventListener('click', (e) => {
    const target = e.target.closest(".tabs__item");
    if (target && target.classList.contains('tabs__item')) {
      tabsCaptions.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
}

// Выпадающие списки в keywords

const dropdownParent = document.querySelector('.toolbar__inner'),
  dropdownList = document.querySelectorAll('.toolbar__dropdown');



document.addEventListener('click', (e) => {
  const target = e.target.closest('.toolbar__item--select');
  if (target) {
    let dropdownList = target.querySelector('.toolbar__dropdown');
    dropdownList.classList.toggle('show');
    dropdownList.classList.toggle('fade');
  } else {
    dropdownList.forEach(item => {
      item.classList.remove('show');
      item.classList.remove('fade');
    });
  }
});

//Всплывающие подсказки

const body = document.querySelector('body'),
  tip = document.createElement('div');
let coordX,
  coordY;

body.addEventListener('mouseover', (e) => {
  e.preventDefault();

  const target = e.target.closest('.keywords__features-item');

  if (target && target.dataset.tooltip) {

    let clientY = target.offsetTop - window.scrollY;

    body.append(tip);
    tip.classList.add('tooltip');
    tip.innerHTML = target.dataset.tooltip;

    coordY = clientY + target.offsetHeight + 5;
    coordX = (target.offsetLeft - window.scrollX) + (target.offsetWidth - tip.offsetWidth) / 2;
    if (coordX < 0) {
      coordX = 5;
    }
    tip.style.cssText = `left: ${coordX}px; top: ${coordY}px`;
  }
});
body.addEventListener('mouseout', (e) => {
  tip.remove();
});

//Модральные окна

const modal = document.querySelectorAll('.modal'),
  modalCompetitors = document.querySelector('.modal-competitors'),
  modalKeywords = document.querySelector('.modal-keywords'),
  modalProject = document.querySelector('.modal-project'),
  btnOpenModalCompetitors = document.querySelectorAll('[data-modal-competitors]'),
  btnOpenModalKeywords = document.querySelectorAll('[data-modal-keywords]'),
  btnOpenModalProject = document.querySelectorAll('[data-modal-project]'),
  btnCloseModal = document.querySelectorAll('[data-close]');

  btnOpenModalCompetitors.forEach((item) => {
  item.addEventListener('click', (e) => {
    modalCompetitors.classList.add('show-flex');
    modalCompetitors.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '16px';
  });
});

btnOpenModalKeywords.forEach((item) => {
  item.addEventListener('click', (e) => {
    
    modalKeywords.classList.add('show-flex');
    modalKeywords.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '16px';
  });
});

btnOpenModalProject.forEach((item) => {
  item.addEventListener('click', (e) => {
    
    modalProject.classList.add('show-flex');
    modalProject.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '16px';
  });
});

function closeModal() {
  modal.forEach(item =>{
    item.classList.add('hide');
    item.classList.remove('show-flex');
  });
  
  document.body.style.overflow = '';
  document.body.style.paddingRight = '0';
}

btnCloseModal.forEach(item =>{
  item.addEventListener('click', closeModal);
});


modal.forEach(item =>{
  item.addEventListener('click', (e) => {
    if (e.target === item) {
      closeModal();
    }
  });
});



document.addEventListener('keydown', (e) => {
  if (e.code == 'Escape' && modal.classList.contains('show')) {
    closeModal();
  }
});

// Графики на странице Overview


var ctxLine = document.querySelectorAll('.overview-lines__canvas');
ctxLine.forEach((item) => {
  item.getContext('2d');
  var myLineChart = new Chart(item, {
    type: 'line',

    data: {
      labels: [' ', ' ', ' ', ' ', ' ', ],
      datasets: [{
        backgroundColor: '#ffe6e6',
        borderColor: 'rgb(226, 18, 19)',
        borderWidth: 3,
        data: [3, 2, 5, 7,9],
        pointBorderWidth: '0',
        pointHoverBorderWidth: '0',
        pointRadius: '0',
        pointBackgroundColor: 'transparent',
        label: ''
      }],

    },
    options: {
      tooltips: false,
      responsive: false,
      legend: {
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
            display: false,
            beginAtZero: true,
            min: 1,
            max: 10,
            stepSize: 1
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            color: "#000",
            tickMarkLength: 10
          },
          ticks:{
            display: false
          }
        }]
      }
    }
  });
});


var ctxKeyword = document.querySelectorAll('.overview-keywords__canvas');
ctxKeyword.forEach((item) => {
  item.getContext('2d');
  var myLineChart = new Chart(item, {
    type: 'line',

    data: {
      labels: [' ', ' ', ' ', ' ', ' ', ],
      datasets: [{
        backgroundColor: 'transparent',
        borderColor: '#e7ebf0',
        borderWidth: 1,
        data: [2, 2, 2, 2, 2],
        pointBorderWidth: '0',
        pointHoverBorderWidth: '0',
        pointRadius: '0',
        pointBackgroundColor: 'transparent',
        label: ''
      }],

    },
    options: {
      tooltips: false,
      responsive: false,
      legend: {
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
            display: false,
            beginAtZero: true,
            min: 1,
            max: 3,
            stepSize: 1
          }
        }],
        xAxes: [{
          gridLines: {
            display: false,
            color: "#000",
            tickMarkLength: 10
          },
          ticks:{
            display: false
          }
        }]
      }
    }
  });
});



var ctxRankings = document.querySelector('.overview-rankings__canvas').getContext('2d');
  
var gradient = ctxRankings.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, "rgb(255, 201, 201)");
gradient.addColorStop(0.54, "rgb(255, 201, 201)");
gradient.addColorStop(0.55, "rgb(221, 239, 255)");
gradient.addColorStop(1, "rgb(222, 240, 255)");
ctxRankings.fillStyle = gradient;
ctxRankings.fillRect(0, 0, 300, 300);

var myLineChart = new Chart(ctxRankings, {
  type: 'bar',
  data: {
    labels: ['Sep 1', 'Sep 2', 'Sep 3', 'Sep 4', 'Sep 5', 'Sep 6', 'Sep 7'],
    datasets: [{
      backgroundColor: [
        gradient,
        gradient,
        gradient,
        gradient,
        gradient,
        gradient,
        gradient,
      ],
      barThickness: 104,
      borderColor: '#e7ebf0',
      borderWidth: 1,
      data: [8, 8, 8, 8, 8, 8, 8],
      pointBorderWidth: '0',
      pointHoverBorderWidth: '0',
      pointRadius: '0',
      pointBackgroundColor: 'transparent',
      label: ''
    }],

  },
  options: {
    tooltips: false,
    responsive: false,
    legend: {
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
          display: true,
          color: "#edf0f2"
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
          stepSize: 2
        }
      }],
      xAxes: [{   
        barPercentage: 1,
        categoryPercentage: 0.6, 
        gridLines: {
          display: true,
          color: "#edf0f2",
          borderDash: [0, 0],
        },
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 10,
          stepSize: 2
        }
      }]
    }
  }
});

var ctxRankings = document.querySelectorAll('.overview-competitors__canvas');
ctxRankings.forEach((item) => {
  item.getContext('2d');
  var myLineChart = new Chart(item, {
    type: 'bubble',
    data: {
      datasets: [{
        label: '',
        title: "ebay.com",
        data: [{
          x: 8,
          y: 14.8,
          r: 23,
        }],
        backgroundColor: "#e31212"
      }]
      },
      options: {
        tooltips: false,
        responsive: false,
        legend: {
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
              display: true,
              color: "#edf0f2"
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 29.6,
              stepSize: 14.8
            },
            scaleLabel: {
              display: true,
              labelString: "Averge Position",
              fontColor: '#838383',
              fontFamily: 'Gilroy',
              fontWeight: '400',
              fontSize: '12'
            }
          }],
          xAxes: [{    
            gridLines: {
              display: true,
              color: "#edf0f2",
              borderDash: [0, 0],
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 16,
              stepSize: 8
            },
            scaleLabel: {
              display: true,
              labelString: "Number of Keywords",
              fontColor: '#838383',
              fontFamily: 'Gilroy',
              fontWeight: '400',
              fontSize: '12'
            }
          }]
        }
      }
    },
    );
});


Chart.plugins.register({
  afterDatasetsDraw: function(chart, easing) {
    var ctx = chart.ctx;

    chart.data.datasets.forEach(function(dataset, i) {
      var meta = chart.getDatasetMeta(i);
      if (meta.type == "bubble") { //exclude scatter
        meta.data.forEach(function(element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = '#e31212';
          var fontSize = 14;
          var fontStyle = 'normal';
          var fontFamily = 'Gilroy';
          var fontWeight = '600';
          ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily, fontWeight);

          // Just naively convert to string for now
          var dataString = dataset.data[index].toString();
          // Make sure alignment settings are correct
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';

          var padding = 0;
          var position = element.tooltipPosition();
          ctx.fillText(dataset.title, position.x + 30, position.y - (fontSize / 2) - padding);
        });
      } //if
    });
  }
});


var ctxFeatures = document.querySelectorAll('.overview-features__canvas');
ctxFeatures.forEach((item) => {
  item.getContext('2d');
  var myLineChart = new Chart(item, {
    type: 'bar',    
    data: {
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '' , ''  ],
      datasets: [{
        borderColor: 'transparent',
        backgroundColor: [
          '#ddefff',
          '#ddefff',
          '#ddefff',
          '#ddefff',
          '#e51212',
          '#e51212',
          '#e51212',
          '#ddefff',
          '#ffc9c9',
          '#e51212',
          '#e51212',
          '#ddefff',
          '#ddefff',
          '#ddefff',
          '#ddefff',
          '#ddefff',
        ],
        barThickness: 40,
        // barValueSpacing: 0,
        borderWidth: 0,
        data: [0, 7, 0, 9, 7, 0, 0, 4, 5, 6, 1, 0, 0, 7, 0, 3],
        pointBorderWidth: '0',
        pointHoverBorderWidth: '0',
        pointRadius: '0',
        pointBackgroundColor: 'transparent',
        label: ''
      }],

    },
      options: {
        tooltips: false,
        responsive: false,
        legend: {
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
              display: true,
              color: "#edf0f2"
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 10,
              stepSize: 2.5
            },
            scaleLabel: {
              display: true,
              labelString: "Keywords",
              fontColor: '#838383',
              fontFamily: 'Gilroy',
              fontWeight: '400',
              fontSize: '12'
            }
          }],
          xAxes: [{   
            
            gridLines: {
              display: false,
              color: "#edf0f2",
              // borderDash: [0, 0],
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 16,
              stepSize: 8
            },
            
          }]
        }
      }
    },
    );
});






$(".dial").knob({
  'width': 26,
  'height': 26,
  'fgColor': '#e51212'
});

$(".dial-total").knob({
  'width': 26,
  'height': 18,
});
