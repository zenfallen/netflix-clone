const tabItems = document.querySelectorAll('.tab-item');
var tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem() {
  removeBorder();
  removeShow();
  removeColor();
  this.classList.add('tab-border');
  this.classList.add('active');
  tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}

function removeColor() {
  tabItems.forEach(item => item.classList.remove('active'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));
