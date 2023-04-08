// alert banner
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

// message section
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');

send.addEventListener('click', () => {
  if ( user.value === '' && message.value === '') {
    alert("Both search and messge fields must be filled in before sending.");
  } else if ( user.value === '' ) {
    alert("The user field must be filled in before sending.");
  } else if ( message.value === '' ) {
    alert("The message field must be filled in before sending.");
  } else {
    alert(`Your message was sent to: ${user.value}`);
  }
});