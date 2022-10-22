function navBarPaddingCorrection() {
  let $mainNav = document.querySelector('[data-js="mainNav"]');
  let $mainHeader = document.querySelector('[data-js="mainHeader"]');
  if (!$mainNav || !$mainHeader) return;

  // Função para que o container principal se afaste do menu
  ['DOMContentLoaded', 'resize'].forEach(event => {
    window.addEventListener(event, function (event) {
      $mainHeader.style = 'padding-top: ' +  $mainNav.offsetHeight + 'px';
    });
  });

}

document.addEventListener('DOMContentLoaded', navBarPaddingCorrection);