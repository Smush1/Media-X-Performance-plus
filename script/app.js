// Custom Side Drawer Menu Handler
(function(){
  const drawerToggle = document.getElementById('drawerToggle');
  const drawerClose = document.getElementById('drawerClose');
  const customDrawer = document.getElementById('customDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!drawerToggle || !drawerClose || !customDrawer || !drawerBackdrop) return;

  // Open drawer
  drawerToggle.addEventListener('click', () => {
    customDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent body scroll
  });

  // Close drawer
  const closeDrawer = () => {
    customDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = ''; // restore scroll
  };

  drawerClose.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);

  // Close drawer when a link is clicked
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
})();








///// Counting starts on scroll
const dataNumbers = document.querySelectorAll('.data-num');
const dataSection = document.querySelector('.stats-cards-container');




const dataSectionCallback = function(enteries){
  const [entry] = enteries;
  console.log(entry);
enteries.forEach((entry)=>{
  if(entry.isIntersecting){

    // update the number 
dataNumbers.forEach((dataNumber)=>{

  // Initiating count for each dataNumbers
let count = 0;
const num = parseFloat(dataNumber.dataset.countNum)


  // Choose step based on the number type
  const isFloat = !Number.isInteger(num);
  const step = isFloat ? 0.01 : 1;   // increment for float or int
  let time = isFloat ? 0.01 : 50

console.log(dataNumber)

// increase number in each 25ms
const updateNumber =  setInterval(()=>{
  
  
  count += step;

  dataNumber.textContent = isFloat ? count.toFixed(2) : Math.floor(count);

  if(count >= num ){
    clearInterval(updateNumber)
  }
}, time)

})

  }
  })
}

const dataSectionObserver = new IntersectionObserver(dataSectionCallback, {
  root : null,
  threshold: 0.1
})

dataSectionObserver.observe(dataSection)







//// Reveal on scroll

const allSections = document.querySelectorAll('.section');
//console.log(allSections)

const revealSection = function(entries, observer){
  entries.forEach((entry)=>{
    console.log(entry)
    console.log(observer)
    if(!entry.isIntersecting)  return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target)
 }) 
}

const sectionObserver = new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15
})

allSections.forEach((section)=> {
  section.classList.add('section--hidden');
  sectionObserver.observe(section);
})



// Testimonial section



const testContainer = document.querySelector('.testimonial--wrapper')
const testBtns = document.querySelectorAll('.test-btn');

 testBtns.forEach((btn)=>{
      btn.addEventListener('click', (e)=>{
        //  console.log(e.target)
          const btnClasses = e.target.classList;
       //   console.log(btnClasses)
          const direction = btnClasses.contains('test-left-btn') ? -1 : 1;
          const scrollAmount = testContainer.clientWidth * direction;
          console.log(scrollAmount)
          testContainer.scrollBy({ left: scrollAmount, behavior: "smooth" })


      })
  })




gsap.registerPlugin(ScrollTrigger);

  // gsap code here




const animPara= document.querySelector('.anim__para')
// split elements with the class "split" into words and characters

    const text = new SplitType(animPara, { types: 'chars'})


    // now animate the characters in a staggered fashion
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: animPara,
        start: 'top 60%',
        end: 'top 10%',
        toggleActions: "restart pause resume none",
        scrub: true,
        markers: false
    },
    opacity: 0.2,// fade in from opacity: 0 and visibility: hidden
    stagger: 0.1 // 0.05 seconds between each
});





