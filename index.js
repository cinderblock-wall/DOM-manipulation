//* Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
];

// import "./styles.css";
//* Part one
const mainEl = document.querySelector('main')
console.log(mainEl);
// to set an a property call out like this: element.style.property to change = 'var(...)' needed to define css as a variable
mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1> DOM Manipulatioin</h1>'

mainEl.classList.add("flex-ctr");

//* Part two
// must use # in #top-menu bc it is an ID
const topMenuEl = document.querySelector("#top-menu")
console.log(topMenuEl);

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// .classList is property that allows you to have classes from CSS
mainEl.classList.add("flex-ctr");

//* Part three

topMenuEl.innerHTML +=`<a href=$(menuLinks.href}>${menuLinks.text}</a>`;
//need for loop to iterate over entire array top call out will get you 'undefined'
for (let i = 0; i < menuLinks.length; i++) {
    topMenuEl.innerHTML += `<a href=${menuLinks[i].href}>${menuLinks[i].text}</a>`;
}

//* ALAB 316.3.1 DOM Manipulatin Part two

// Part three

const subMenuEl = document.getElementById("sub-menu")
console.log(subMenuEl)
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add("flex-ctr");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = '0';

// Part four

const topMenuLinks = topMenuEl.getElementsByTagName('a')
// Select and cache all <a> elements inside of topMenuEl in variable named topMenuLinks
// Loop through the buttons and add the active class to the current/clicked button
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if(e.target.tagName != "A"){
    return;
  } else {
    activeLink(e.target.textContent);
  }
})

const activeLink = (str) => {
  for(let i = 0; i < topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove("active");
    if(str === topMenuLinks[i].textContent){
      topMenuLinks[i].classList.add('active')
    }
  }
}





// for (var i = 0; i < topMenuLinks.length; i++) {
//   topMenuLinks[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("nav a.active");

    // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace("nav a.active", "");
//     }

    // Add the active class to the current/clicked button
//     this.className += "nav a.active";
//   });
// }

// for (const node of topMenuLinks) {
//   node.addEventListener("click", handleClick);
// }
// function handleClick(event) {
//   handleClick.preventDefault();
//   console.log(event)
//   return
// }
// function toggle(){
//   topMenuLinks.classList.toggle("nav a.active")
// }

// Toggle is not functioning not sure if my topMenuLinks variable is working
// topMenuLinks.addEventListener('click', handleClick);
// topMenuLinks.addEventListener('click', toggle);

// Part five

topMenuLinks.forEach(() => {
  topMenuLinks.addEventListener("click", function (e) {
    handleClick.preventDefault();

    topMenuLinks.classList.toggle("active");
    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
  });
});

