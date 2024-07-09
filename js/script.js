$(document).ready(function () {
  $('.tariffs__list').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      340: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1440: {
        items: 4,
      },
      1920: {
        items: 4,
      },
    },
  });

  $('.wrapper').owlCarousel({
    items: 1,
    loop: true,
    margin: 50,
    dots: true,
  });

  $('.slider-button.prev-tariffs').click(function () {
    $('.tariffs__list').trigger('prev.owl.carousel');
  });

  $('.slider-button.next-tariffs').click(function () {
    $('.tariffs__list').trigger('next.owl.carousel');
  });

  $('.slider-button.prev-wrapper').click(function () {
    $('.wrapper').trigger('prev.owl.carousel');
  });

  $('.slider-button.next-wrapper').click(function () {
    $('.wrapper').trigger('next.owl.carousel');
  });
});

//form validation

const contactForm = document.querySelector('#contactForm');

function validateForm() {
  // Очистка сообщений об ошибках
  document.querySelector('#name-error').innerText = '';
  document.querySelector('#phone-error').innerText = '';

  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();

  let isValid = true;

  if (name === '' && phone === '') {
    document.querySelector('#name-error').innerText =
      'Пожалуйста, введите ваше имя.';

    document.querySelector('#phone-error').innerText =
      'Пожалуйста, введите ваш номер.';
    isValid = false;
  } else {
    if (name.length < 3) {
      document.querySelector('#name-error').innerText =
        'Имя должно содержать минимум 3 буквы.';
      isValid = false;
    }

    if (phone.length < 5) {
      document.querySelector('#phone-error').innerText =
        'Номер телефона должен содержать минимум 5 символов.';
      isValid = false;
    }
  }

  return isValid;
}

function sendFormData() {
  const name = document.querySelector('#name').value.trim();
  const phone = document.querySelector('#phone').value.trim();

  const formData = {
    name: name,
    phone: phone,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#success-message').innerText =
        'Сообщение успешно отправлено!';
      document.querySelector('#contactForm').reset();
    })
    .catch((error) => {
      document.querySelector('#success-message').innerText =
        'Произошла ошибка при отправке сообщения.';
      console.error('Ошибка:', error);
    });
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    sendFormData();
  }
});
