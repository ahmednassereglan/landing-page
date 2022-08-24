/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const nav = document.getElementById("navbar__list");
const header = document.querySelector(".page__header");




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// function to build the navbar
function createNavBarItem(){
    // for loop to get all section
    sections.forEach((sec => {

        // create element li for navbar list
        NavBarItem = document.createElement("li");

        // display a link in navbar in html
        NavBarItem.innerHTML = `<a  href="#${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`

        // adding item to navbar list
        nav.appendChild(NavBarItem)
    }))
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// function to Add class 'active' to section when near top of viewport
function selectItemOnScroll() {
    // for loop to get all section
    sections.forEach((sec => {
        // select the item in the navbar
        let selectItem = nav.querySelector(`[data-nav=${sec.id}]`)

        // condition to select the section in scrolling and adding active style
        if(sec.getBoundingClientRect().top >= -50 && sec.getBoundingClientRect().top <= 180){
            // If he doesn't have style active, give him the style
            if(!sec.classList.contains("your-active-class")){
                // add style active to section
                sec.classList.add("your-active-class");
                // add style active to item of navbar
                selectItem.classList.add("active-Item");
            }
            // Otherwise, don't give it
        }else{
            // remove style active to section
            sec.classList.remove("your-active-class");
            // remove style active to item of navbar
            selectItem.classList.remove("active-Item");
        }
    }))
}

// Hide fixed navigation bar while not scrolling
let scroll;
document.selectItemOnScroll = () => {
    header.style.display = "block"
    clearTimeout(scroll)
    scroll = setTimeout(() => {
     header.style.display = "none";
   }, 4000);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function to add section to page
// function addSection(){
//     numSec = sections.length;
//     newSec = numSec + 1 ;
//     const section =
//     `
//     <section id="section${newSec}" data-nav="Section ${newSec}" class="">
//         <div class="landing__container">
//             <h2>Section ${newSec}</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

//             <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
//         </div>
//     </section>
//     `
//     document.querySelector("#__main").innerHTML += section
// }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// function to delete section from the page
// function deleteSection(){
//     numSec = sections.length;
//     if(numSec <= 3){

//     }else{
//         var last = sections[sections.length - 1];
//         last.parentNode.removeChild(last);
//     }
// }



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
createNavBarItem()

// Set sections as active
// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll",selectItemOnScroll)

// when click to the button the function will run
// document.getElementById("add_section").addEventListener("click", () => {
//     addSection()
//     createNavBarItem()
// });

// when click to the button the function will run
// document.getElementById("delete_section").addEventListener("click", () => {
//     deleteSection()
//     createNavBarItem()
// });

