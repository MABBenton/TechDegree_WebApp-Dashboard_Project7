//alert banner
const alertBanner = document.getElementById('alert');

alertBanner.innerHTML =
  `<div class="alert-banner">
    <p><strong>Alert:</strong> You have unread messages</p> 
    <p class="alert-banner-close">x</p>
  </div>`

  alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
  })

// activity section
const activityArrow = document.getElementsByClassName('activity-container');

for (let i = 0; i < activityArrow.length; i++) {
  activityArrow[i].insertAdjacentHTML('beforeend',`<div class='carrot'>></div>`);
}

// ________Chart Widgets_________

// traffic chart
const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500],
    backgroundColor: 'rgb(127, 102, 195)',
    borderWidth: 1
  }]
};

let trafficOptions = {
  color: 'rgb(150, 150, 150)',
  backgroundColor: 'rgb(127, 102, 195)',
  borderColor: 'rgb(195, 195, 195)',
  borderJoinStyle: 'round',
  fill: true,
  aspectRatio: 2.5,
  animations: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

// bar graph
const dailyCanvas = document.getElementById("daily-chart");

let dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    data: [0, 50, 100, 150, 200, 250, 300],
    backgroundColor: 'rgb(127, 102, 195)',
    borderColor: 'rgb(78, 64, 119)',
    borderWidth: 1
  }]
};

let dailyOptions = {
  color: 'rgb(150, 150, 150)',
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// doughnut chart
const mobileCanvas = document.getElementById("mobile-chart");

let mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    data: [60, 25, 15],
    borderWidth: 0,
    backgroundColor: [
      'rgb(127, 102, 195)',
      'rgb(83, 198, 118)',
      'rgb(83, 177, 198)'
    ]
  }]
};

let mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});