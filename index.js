// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
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

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
// .classList is property that allows you to have classes from CSS
mainEl.classList.add("flex-ctr")

//* Part three

// topMenuEl.innerHTML +=`<a href=$(menuLinks.href}>${menuLinks.text}</a>`;
//need for loop to run through array top call out will get you 'undefined'
for (let i = 0; i < menuLinks. length; i++) {
    topMenuEl.innerHTML += `<a href=${menuLinks[i].href}>${menuLinks[i].text}</a>`;
}
