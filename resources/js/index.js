import './smoothScroll.js';

function navBarPaddingCorrection() {
  let $mainNav = document.querySelector('[data-js="mainNav"]');
  let $mainHeader = document.querySelector('[data-js="mainHeader"]');
  if (!$mainNav || !$mainHeader) return;

  // Função para que o container principal se afaste do menu
  ['DOMContentLoaded', 'resize'].forEach(event => {
    window.addEventListener(event, function (event) {
      $mainHeader.style = 'padding-top: ' + $mainNav.offsetHeight + 'px';
    });
  });
}

function hashGoToElementAnchor(hash = window.location.hash) {
  let documentHasHash = hash;
  if (!documentHasHash) return;

  let $elementSection = document.querySelector(documentHasHash);
  if (!$elementSection) return;
  
  $elementSection.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  window.scrollBy(0, -50);
}

function clickOnNavItens() {
  let $navItensLinks = document.querySelectorAll('.nav-item a');
  if (!$navItensLinks) return;

  Array.from($navItensLinks).forEach(navItem => {
    let splitHash = navItem.href.split('#')[1];

    navItem.addEventListener('click', (e) => {
      e.preventDefault();

      hashGoToElementAnchor('#' + splitHash);
    });

  });
}

function removeActiveLinks() {
  let $navLinksActive = document.querySelectorAll('.nav-item a.active');
  if (!$navLinksActive) return;

  Array.from($navLinksActive).forEach(activeLink => {
    activeLink.classList.remove('active');
  });
}

function activeNavLinks() {
  let $navLinks = document.querySelectorAll('.nav-item a');

  if (!$navLinks) return;

  
  Array.from($navLinks).forEach(navItem => {
    
    navItem.addEventListener('click', () => {
      removeActiveLinks();

      navItem.classList.add('active');
    });
  });

}

document.addEventListener('DOMContentLoaded', () => {

  navBarPaddingCorrection();

  setTimeout(hashGoToElementAnchor, 50);

  clickOnNavItens();

  activeNavLinks();
});

