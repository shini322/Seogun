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

function showTabsContentAside(i = 2) {
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
  tabsParent = document.querySelector('.tabs__inner');

function hideTabsContent() {
  tabsContent.forEach(item => {
    item.classList.remove('show', 'fade');
    item.classList.add('hide');
  });
  tabsCaptions.forEach(item => {
    item.classList.remove('active');
  });
}

function showTabsContent(i = 1) {
  if (tabsContent[i] && tabsCaptions[i]) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabsCaptions[i].classList.add('active');
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
  btnOpenModalCompetitors = document.querySelectorAll('[data-modal-competitors]'),
  btnOpenModalKeywords = document.querySelectorAll('[data-modal-keywords]'),
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