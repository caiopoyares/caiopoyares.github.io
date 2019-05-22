"use strict";

var UI = function () {
  return {
    showMobileNavbar: function showMobileNavbar() {
      document.querySelector('body').classList.add('active');
    },
    closeMobileNavbar: function closeMobileNavbar() {
      document.querySelector('body').classList.remove('active');
    }
  };
}();

var controller = function (ui) {
  var loadEventListeners = function loadEventListeners() {
    document.querySelector('.mobile-button').addEventListener('click', ui.showMobileNavbar);
    document.querySelector('.close-menu-btn').addEventListener('click', ui.closeMobileNavbar);
  };

  return {
    init: function init() {
      loadEventListeners();
    }
  };
}(UI);

controller.init();