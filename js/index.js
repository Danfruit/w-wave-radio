
// search field
let nav = document.querySelector(".header-nav");
let openSearch = document.querySelector(".search-btn");
let submitSearch = document.querySelector(".search-form__btn");
let searchInput = document.querySelector(".search-form__input");
let loginBtn = document.querySelector(".header-top .header-btn");

// event of click on search button
openSearch.addEventListener("click", function () {
  openSearch.classList.add("search-btn--hide");
  loginBtn.classList.add("header-btn--hide");
  searchInput.classList.add("search-form__input--active");
  searchInput.focus();
  submitSearch.classList.add("search-btn--active");
  document.getElementById("search-form__input").tabIndex = "0";
  document.getElementById("search-form__btn").tabIndex = "0";
});

// close by clicking outside the element

window.addEventListener("click", function (e) {
  const target = e.target;
  if (
    !target.closest(".search-form__input") &&
    !target.closest(".search-form__input") &&
    !target.closest(".search-btn")
  ) {
    openSearch.classList.remove("search-btn--hide");
    searchInput.classList.remove("search-form__input--active");
    submitSearch.classList.remove("search-btn--active");
    this.setTimeout("loginBtn.classList.remove('header-btn--hide')", 300);
    document.getElementById("search-form__input").tabIndex = "-1";
    document.getElementById("search-form__btn").tabIndex = "-1";
  }
});

// play button function

function playPause(playButton, playSvg, pauseSvg) {
  playButton.addEventListener("click", function () {
    playSvg.classList.toggle("hide");
    pauseSvg.classList.toggle("hide");
  });
}

// header play buttons

let headerPlayBtn = document.querySelectorAll(".play-button");
headerPlayBtn.forEach(function (el) {
  let headerPlaySvg = el.querySelector(".play-button__svg");
  let headerPauseSvg = el.querySelector(".pause-button-svg");
  playPause(el, headerPlaySvg, headerPauseSvg);
});

// burger menu

let burger = document.querySelector(".burger");
let burgerPopup = document.querySelector(".burger-popup");
let burgerMenuTop = document
  .querySelector(".header-top .header-nav-top")
  .cloneNode(1);
let burgerMenuBottom = document
  .querySelector(".header-bottom .header-nav-bottom")
  .cloneNode(1);

burger.addEventListener("click", function () {
  let body = document.querySelector('body');
  burger.classList.toggle("burger_active");
  burgerPopup
    .querySelector(".burger-popup-top .burger-popup-top__container")
    .appendChild(burgerMenuTop);
  burgerPopup
    .querySelector(".burger-popup-bottom .burger-popup-bottom__container")
    .appendChild(burgerMenuBottom);
  burgerPopup.classList.toggle("burger-popup_active");
  body.classList.toggle("stop-scroll");
});

// open modal login

let modalLogin = document.querySelector('.modal-login');
let modalLoginBtn = document.querySelectorAll('.login-btn');
let modalLoginClose = document.querySelector('.modal-login__close');
let body = document.body;
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let footer = document.querySelector('.footer');

modalLoginBtn.forEach(function(btn) {
  btn.addEventListener("click", function () {
    modalLogin.classList.add('modal-login--active');
    body.classList.add('stop-scroll');
    footer.classList.add('hidden');
    main.classList.add('hidden');
    header.classList.add('hidden');
  })
})

modalLoginClose.addEventListener("click", function () {
  modalLogin.classList.remove('modal-login--active');
  body.classList.remove('stop-scroll');
  footer.classList.remove('hidden');
  main.classList.remove('hidden');
  header.classList.remove('hidden');
})

// modal form validation

const loginValidate = new JustValidate('#login-form', {
  errorLabelStyle: {
      color: '#D52B1E',
    }
})

loginValidate
  .addField('#login-form__login', [
    {
      rule: 'required',
      errorMessage: 'Ошибка',
    },
  ])
  .addField('#login-form__password', [
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
  ])
  .onSuccess(function(event) {
    event.preventDefault();
    event.target.submit();
  })

// open broadcasts by click (475px display)

let broadcastsBtn = document.querySelector(".open-bottom__btn");
let headerBottom = document.querySelector(".header-bottom");
let broadcastsIcn = document.querySelector(".open-bottom__icon");

broadcastsBtn.addEventListener("click", function () {
  broadcastsIcn.classList.toggle("open-bottom__icon--active");
  headerBottom.classList.toggle("header-bottom--unhide");
});

// expand podcasts list

let expButton = document.querySelector(".podcasts__btn");
let buttonTextHide = document.querySelector(".podcasts__btn-text_hide");
let buttonTextUnide = document.querySelector(".podcasts__btn-text_unhide");
let expCardAll = document.querySelectorAll(".podcasts__item");
let expCard = null;

if (document.documentElement.clientWidth <= 475) {
  expCard = document.querySelectorAll(".podcasts__item:nth-child(n+5)");
} else {
  expCard = document.querySelectorAll(".podcasts__item:nth-child(n+9)");
}

window.addEventListener('resize' , function () {
  if (document.documentElement.clientWidth <= 475) {
    expCard = document.querySelectorAll(".podcasts__item:nth-child(n+5)");
  } else {
    expCard = document.querySelectorAll(".podcasts__item:nth-child(n+9)");
  };
    expCardAll.forEach(function (el) {
      el.classList.remove('hide');
      el.classList.add('flex');
    })
    expCard.forEach(function(el) {
      el.classList.remove('flex');
      el.classList.add('hide');
    })
});

expCard.forEach(function(el) {
  el.classList.remove('flex');
  el.classList.add('hide');
})

expButton.addEventListener("click", function () {
  expCard.forEach(function (el) {
    el.classList.toggle("flex");
    el.classList.toggle("hide");
  });
  buttonTextHide.classList.toggle("hide");
  buttonTextUnide.classList.toggle("hide");
});

// podcasts play button

let podcastsPlayBtn = document.querySelectorAll(".podcasts__play");
podcastsPlayBtn.forEach(function (el) {
  let podcastsPlaySvg = el.querySelector(".podcasts__play-svg");
  let podcastsPauseSvg = el.querySelector(".podcasts__pause-svg");
  playPause(el, podcastsPlaySvg, podcastsPauseSvg);
});

// shows select

const showsSelect = document.querySelector(".shows__select");
let showsSelectArrow = document.querySelector('.shows__select-icon');

const choices = new Choices(showsSelect, {
  itemSelectText: "",
  searchEnabled: false,
  position: "bottom",
  renderSelectedChoices: "always",
});

showsSelect.addEventListener('showDropdown', function() {
  showsSelectArrow.classList.add('shows__select-icon--active');
});

showsSelect.addEventListener('hideDropdown', function () {
  showsSelectArrow.classList.remove('shows__select-icon--active')
})

// shows tabs

showsTabs(".shows__select", ".shows__list");
showsSelect.addEventListener("change", function () {
  showsTabs(".shows__select", ".shows__list");
});

function showsTabs(selectClass, selectedItemsClass) {
  let optionValue = document
    .querySelector(selectClass)
    .querySelector("option").value;
  document.querySelectorAll(selectedItemsClass).forEach(function (e) {
    targetValue = e.dataset.target;
    if (targetValue === optionValue) {
      e.classList.toggle("flex");
    } else {
      e.classList.remove("flex");
    }
  });
}

// shows card hover

let showsCard = document.querySelectorAll('.shows__item');

showsCard.forEach(function(card) {
  let showsLink = card.querySelector('.shows__item-link');
  let showsImg = card.querySelector('.shows__item-img');

  showsLink.addEventListener('mouseover', function() {
    showsImg.classList.add('shows__item-img--opacity');
  });
  showsLink.addEventListener('mouseout', function() {
    showsImg.classList.remove('shows__item-img--opacity');
  })
})

// guests accordion

new Accordion(".guests__accordion", {
  showMultiple: true,
  duration: 300,
});

let guestsAcFirst = document.querySelector('.guests-ac-trigger');
guestsAcFirst.click();
guestsAcFirst.blur();

// guests selection

let guestNameBlock = document.querySelector(".guests__accordion");
let guestNameBtn = guestNameBlock.querySelectorAll(".guests-name__btn");
let guestPhoto = document.querySelectorAll(".guests__photo");
let guestContacts = document.querySelectorAll(".guest-contacts__list");
let guestName = document.querySelector(".guest-name");
let guestDescr = document.querySelectorAll(".guest-descr");
let guestShows = document.querySelectorAll(".guest-shows");
let guestInfo = [guestPhoto, guestContacts, guestDescr, guestShows];

guestNameBtn.forEach(function (el) {
  el.addEventListener("click", function (e) {
    guestNameBtn.forEach(function (elem) {
      elem.classList.remove("guests-name__btn--active");
    });
    el.classList.add("guests-name__btn--active");
    let path = e.currentTarget.dataset.path;
    guestName.textContent = el.textContent;
    guestName.classList.remove("hide");
    guestInfo.forEach(function (guestInfoEl) {
      guestInfoEl.forEach(function (guestInfoItem) {
        if (guestInfoItem.dataset.target === path) {
          guestInfoItem.classList.remove("hide");
        } else {
          guestInfoItem.classList.add("hide");
        }
      });
    });
  });
});

// guests accordion opening

let guestsAccordBtn = document.querySelectorAll('.guests .ac-trigger');

guestsAccordBtn.forEach (function(el) {
  el.addEventListener('click', function() {
    el.classList.toggle('guests-ac-trigger--active');
  })
})

// playlists swiper

document.addEventListener('DOMContentLoaded', function() {
  const playlistsSwiper = new Swiper ('.playlists__swiper', {
    breakpoints: {
      0: {
        slidesPerView: 2,
        grid: {
          rows: 6,
        },
      },
      769: {
        slidesPerView: 3,
        grid: {
          rows: 4,
        },
      },
      1025: {
        slidesPerView: 4,
        grid: {
          rows: 3,
        },
      },
    },
    slidesPerView: 4,
    spaceBetween: 30,
    grid: {
      rows: 3,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
  });
})

// playlist genre selection

let radioGenre = document.querySelectorAll('.playlists__radio');
let genrePlaylist = document.querySelectorAll('.playlists__swiper');
let genreName = null;

radioGenre.forEach(function(genre) {
  if (genre.checked) {
    genreName = genre.id;
  }
  genre.addEventListener('click', function (selected) {
    genreName = selected.target.id;
    genrePlaylist.forEach(function (el) {
      el.classList.remove('flex');
    });
    genrePlaylist.forEach(function (playlist) {
      if (playlist.dataset.genre === genreName) {
        playlist.classList.add('flex');
      }
    })
  })
})

genrePlaylist.forEach(function (playlist) {
  if (playlist.dataset.genre === genreName) {
    genrePlaylist.forEach(function (el) {
      el.classList.remove('flex');
    });
    playlist.classList.add('flex');
  }
})

// fill playlists swiper

// genre item count
let playlistsForm = document.querySelector('.playlists__form');
let genreItem = document.querySelectorAll('.playlists__form-item');
let genreSwiperWrapper = document.querySelector('.playlists-form__swiper .swiper-wrapper');
let genreCount = 0;

genreItem.forEach(function() {
  genreCount++;
})

console.log(genreCount);

// create swiper slides

  if (document.documentElement.clientWidth <= 475) {
    for (let i = 0; i < genreCount; i++) {
      genreSwiperEl = document.createElement('div');
      genreSwiperEl.classList.add('swiper-slide');
      genreSwiperEl.appendChild(genreItem[i]);
      genreSwiperWrapper.appendChild(genreSwiperEl);
      console.log(genreItem[i]);
    }
    genreSwiperWrapper.classList.add('full');
  }

  window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth <= 475) {
      if (!genreSwiperWrapper.classList.contains('full')) {
        for (let i = 0; i < genreCount; i++) {
          genreSwiperEl = document.createElement('div');
          genreSwiperEl.classList.add('swiper-slide');
          genreSwiperEl.appendChild(genreItem[i]);
          genreSwiperWrapper.classList.add('full');
          genreSwiperWrapper.appendChild(genreSwiperEl);
        }
      }
    } else {
      if (genreSwiperWrapper.classList.contains('full')) {
        genreSwiperWrapper.classList.remove('full');
        let genreSwiperSlide = document.querySelectorAll('.playlists-form__swiper .swiper-slide');
        for (let i = 0; i < genreCount; i++) {
          playlistsForm.prepend(genreItem[(genreCount - i - 1)]);
        }
        genreSwiperSlide.forEach(function(el) {
          el.remove();
        })
        playlistsFormSwiper.removeSlide();
      }
    }
  })

// playlists keyboard selection

let genreLabel = document.querySelectorAll('.playlists__form-item');

genreLabel.forEach(function(el) {
  el.addEventListener('keydown', function(press) {
    let genreRadio = el.querySelector('.playlists__radio');
    if (press.key === "Enter") {
      genreRadio.checked = true;
    }
  })
})

// adv swiper

const advSwiper = new Swiper ('.adv__swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  a11y: {
    paginationBulletMessage: 'Перейти на слайд {{index}}',
  },
});

// about swiper

const aboutSwiper = new Swiper ('.about__swiper', {
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    476: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 4,
    },
  },
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next.about-swiper-arrow',
    prevEl: '.swiper-button-prev.about-swiper-arrow',
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
})

// about form validation

const aboutValidate = new JustValidate('#feedback-form', {
  errorLabelStyle: {
      color: '#D52B1E',
    }
})

aboutValidate
  .addField('#feedback-form__email', [
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ])
  .addField('#feedback-form__name', [
    {
      rule: 'customRegexp',
      value: /^((?![/#1-9!@#$%^&*()-+_=№".,]).)*$/gm,
      errorMessage: 'Ошибка'
    },
    {
      rule: 'required',
      errorMessage: 'Ошибка'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Ошибка'
    }
  ])
  .onSuccess(function(event) {
    event.preventDefault();
    event.target.submit();
  })

// about form checkbox selection

let customCheckbox = document.querySelector('.about .feedback-form__custom-checkbox');
let nativeCheckbox = document.querySelector('.about .feedback-form__checkbox');

customCheckbox.addEventListener('keydown', function(press) {
  if (nativeCheckbox.checked === true) {
    if (press.key === "Enter") {
      nativeCheckbox.checked = false;
    }
  }
  else {
    if (press.key === "Enter") {
      nativeCheckbox.checked = true;
    }
  }
});

// screen breakpoints

  let playlistsRight = document.querySelector('.playlists__right');
  let playlistsLeft = document.querySelector('.playlists__left');
  let playlistsContainer = document.querySelector('.playlists__container');

  let showsList = document.querySelectorAll('.shows__list');
  let showsLeft = document.querySelector('.shows__left');
  let showsContainer = document.querySelector('.shows__container');

  if (document.documentElement.clientWidth <= 1024) {
    playlistsLeft.append(playlistsRight);
  };

  showsList.forEach(function (el) {
    if (document.documentElement.clientWidth <= 768) {
      showsLeft.append(el);
    };
  });

  window.addEventListener('resize' , function () {
    if (document.documentElement.clientWidth <= 1024) {
      playlistsLeft.append(playlistsRight);
    } else {
      playlistsContainer.append(playlistsRight);
    };
    showsList.forEach(function (el) {
      if (document.documentElement.clientWidth <= 768) {
        showsLeft.append(el);
      } else {
        showsContainer.append(el);
      }
    });
  });


window.addEventListener('load', function() {

  if (document.documentElement.clientWidth <= 600) {
    let aboutSwiper475 = document.querySelector('.about-list');
    let aboutSwiperContainer = document.querySelector('.about-swiper-container')
    aboutSwiperContainer.style.height = aboutSwiper475.offsetHeight + 'px';
  }

  window.addEventListener('resize' , function () {
    if (document.documentElement.clientWidth <= 1024) {
      playlistsLeft.append(playlistsRight);
    } else {
      playlistsContainer.append(playlistsRight);
    };
    if (document.documentElement.clientWidth <= 600) {
      let aboutSwiper475 = document.querySelector('.about-list');
      let aboutSwiperContainer = document.querySelector('.about-swiper-container')
      aboutSwiperContainer.style.height = aboutSwiper475.offsetHeight + 'px';
    }
  })
})

  // playlists form swiper (475px)

  document.addEventListener('DOMContentLoaded', function() {
    const playlistsFormSwiper = new Swiper('.playlists-form__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      freemode: {
        enabled: true,
        momentum: false,
        sticky: true,
      },
      slidesOffsetAfter: 300,
  })
})
