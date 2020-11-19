var menuBottom = document.querySelector("div.bottom-menu");
var activeButton = document.getElementsByClassName("tab active");
var tabMenus = document.getElementsByClassName("tab-menu");
var activeMenu = document.getElementsByClassName("tab-menu active");

menuBottom.addEventListener("click", function (event) {

  var isTab = event.target.classList.contains('tab');
  var tab = event.target;
  var isActive = tab.classList.contains('active');
  var dataId = event.target.getAttribute('data-id')

  if (!isTab) {
    return false
  }

  if (isActive) {
    tab.classList.remove('active')
    activeMenu[0].classList.remove('active')

  } else {

    menuBottom.querySelectorAll('span.tab, ul.tab-menu').forEach(element => {
      element.classList.remove('active')
    });;

    // tab.classList.add('active')
    menuBottom.querySelector("span.tab[data-id=" + dataId + "]").classList.add('active')
    menuBottom.querySelector("ul.tab-menu[data-id=" + dataId + "]").classList.add('active')


  }
});
