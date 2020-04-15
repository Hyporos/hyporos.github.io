let contactButton = document.querySelector('.con');
let homeButton = document.querySelector('.ind');

// If the contact page is open

if (contactButton.classList.contains('active')) {
  window.onload = function () {
    let drop = document.getElementById('contactOption');
    let hid = document.querySelector('.hid');

    if (drop.selectedIndex == 2) {
      console.log('yes');
      hid.style.display = 'block';
    } else {
      console.log('no');
      hid.style.display = 'none';
    }

    drop.onchange = function () {
      if (drop.selectedIndex == 2) {
        console.log('yes');
        hid.style.display = 'block';
      } else {
        console.log('no');
        hid.style.display = 'none';
      }
    };
  };
}
// Else, if the home page is open
else {
  // Button variables
  let allButton = document.querySelector('#all');
  let flowerButton = document.querySelector('#flower');
  let ediblesButton = document.querySelector('#edibles');
  let miscButton = document.querySelector('#misc');

  // If "All Items" is clicked
  allButton.addEventListener('click', function (e) {
    console.log('all clicked');

    let edibles = document.getElementsByClassName('edibles');
    let misc = document.getElementsByClassName('misc');
    let flower = document.getElementsByClassName('flower');

    allButton.style.backgroundColor = 'gray';
    allButton.style.color = '#f5eaea';
    flowerButton.style.backgroundColor = '#5b5656';
    flowerButton.style.color = '#57b36b';
    ediblesButton.style.backgroundColor = '#5b5656'; // Set background and font color respectively, to indicate that it is selected
    ediblesButton.style.color = '#57b36b';
    miscButton.style.backgroundColor = '#5b5656';
    miscButton.style.color = '#57b36b';

    if (
      flower[0].style.display == 'none' ||
      edibles[0].style.display == 'none' ||
      misc[0].style.display == 'none'
    ) {
      for (let i = 0; i < 4; i++) {
        flower[i].style.display = 'block';
        edibles[i].style.display = 'block'; // Shows all other cards, if any are hidden
        misc[i].style.display = 'block';
      }
    }

    let change = document.querySelector('.my-4');
    change.innerHTML = 'All Items';
  });

  // If Flower is clicked
  flower.addEventListener('click', function (e) {
    console.log('flower clicked');

    let edibles = document.getElementsByClassName('edibles');
    let misc = document.getElementsByClassName('misc');
    let flower = document.getElementsByClassName('flower');

    allButton.style.backgroundColor = '#5b5656';
    allButton.style.color = '#57b36b';
    flowerButton.style.backgroundColor = 'gray';
    flowerButton.style.color = '#f5eaea';
    ediblesButton.style.backgroundColor = '#5b5656';
    ediblesButton.style.color = '#57b36b';
    miscButton.style.backgroundColor = '#5b5656';
    miscButton.style.color = '#57b36b';

    if (flower[0].style.display == 'none') {
      for (let i = 0; i < 4; i++) {
        flower[i].style.display = 'block';
        edibles[i].style.display = 'none'; // If flower cards are hidden, hides other cards and shows only flower cards
        misc[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < 4; i++) {
        edibles[i].style.display = 'none'; // If flower cards aren't hidden, simply just hide the other ones
        misc[i].style.display = 'none';
      }
    }

    let change = document.querySelector('.my-4');
    change.innerHTML = 'Flower';
  });

  // if Edibles is clicked
  edibles.addEventListener('click', function (e) {
    console.log('edibles clicked');

    let flower = document.getElementsByClassName('flower');
    let misc = document.getElementsByClassName('misc');
    let edibles = document.getElementsByClassName('edibles');

    allButton.style.backgroundColor = '#5b5656';
    allButton.style.color = '#57b36b';
    flowerButton.style.backgroundColor = '#5b5656';
    flowerButton.style.color = '#57b36b';
    ediblesButton.style.backgroundColor = 'gray'; // The rest of this code is self explanatory, given the above comments
    ediblesButton.style.color = '#f5eaea';
    miscButton.style.backgroundColor = '#5b5656';
    miscButton.style.color = '#57b36b';

    if (edibles[0].style.display == 'none') {
      for (let i = 0; i < 4; i++) {
        edibles[i].style.display = 'block';
        flower[i].style.display = 'none';
        misc[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < 4; i++) {
        flower[i].style.display = 'none';
        misc[i].style.display = 'none';
      }
    }

    let change = document.querySelector('.my-4');
    change.innerHTML = 'Edibles';
  });

  // if Misc is clicked
  misc.addEventListener('click', function (e) {
    console.log('misc clicked');

    let flower = document.getElementsByClassName('flower');
    let edibles = document.getElementsByClassName('edibles');
    let misc = document.getElementsByClassName('misc');

    allButton.style.backgroundColor = '#5b5656';
    allButton.style.color = '#57b36b';
    flowerButton.style.backgroundColor = '#5b5656';
    flowerButton.style.color = '#57b36b';
    ediblesButton.style.backgroundColor = '#5b5656';
    ediblesButton.style.color = '#57b36b';
    miscButton.style.backgroundColor = 'gray';
    miscButton.style.color = '#f5eaea';

    if (misc[0].style.display == 'none') {
      for (let i = 0; i < 4; i++) {
        misc[i].style.display = 'block';
        flower[i].style.display = 'none';
        edibles[i].style.display = 'none';
      }
    } else {
      for (let i = 0; i < 4; i++) {
        flower[i].style.display = 'none';
        edibles[i].style.display = 'none';
      }
    }

    let change = document.querySelector('.my-4');
    change.innerHTML = 'Misc';
  });
}
