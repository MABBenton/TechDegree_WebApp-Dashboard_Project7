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