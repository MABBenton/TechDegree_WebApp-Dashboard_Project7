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