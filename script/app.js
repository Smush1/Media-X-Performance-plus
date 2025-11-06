const dataNumbers = document.querySelectorAll('.data-num');
const dataSection = document.querySelector('.stats-cards-container');


const dataSectionCallback = function(enteries){
  const [entry] = enteries;
  console.log(entry);

  if(entry.isIntersecting){

    // update the number 
dataNumbers.forEach((dataNumber)=>{

  // Initiating count for each dataNumbers
let count = 0;
const num = parseInt(dataNumber.dataset.countNum)

// increase number in each 25ms
const updateNumber =  setInterval(()=>{
  count++;
  dataNumber.textContent = count;
  if(count === num ){
    clearInterval(updateNumber)
  }
}, 25)

})

  }
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
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
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







