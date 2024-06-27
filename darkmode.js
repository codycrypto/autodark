javascript:(function() {
  if (document.querySelector('input#dark-mode-checkbox') === null) {
    const script = document.createElement('script');
    script.src = 'https://github.com/codycrypto/autodark/edit/main/darkmode.js';
    script.onload = function() {
      document.querySelector('input#dark-mode-checkbox').click();
    };
    document.head.appendChild(script);
  } else {
    document.querySelector('input#dark-mode-checkbox').click();
  }
})();
