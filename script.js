
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{
      delay: 500,
      disableOnInteraction: false,
  },
  });





  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const btn = document.querySelector('#btn')
const nav = document.querySelector('.nav')

btn.addEventListener('click',()=>{
  nav.classList.toggle('tog')

  let tog_child = btn.firstElementChild
  if(nav.classList.contains('tog')){
    tog_child.classList.replace('fa-bars','fa-xmark')
  }
  else{
    tog_child.classList.replace('fa-xmark','fa-bars')
  }
})












