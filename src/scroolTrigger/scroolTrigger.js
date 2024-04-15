import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


// header

const tl=gsap.timeline({
    scrollTrigger:{
        trigger:".headerClass",
     
        scrub:1,
    }
})

tl.to("#bg",{
    scale:1.5,
    translateY:"-100px",
})

tl.to("#cortinaDerecha",{
    scale:1.5,
}).to("#cortinaIzquierda",{
    scale:1.5,
})


// card 1
const tl1=gsap.timeline({
    scrollTrigger:{
        trigger:".cajaCard",
        start:"0% 50%",
        end:"center 50%",
        markers:true,
        scrub:true,
    }
})
tl1.from('.text1',{
    opacity:0,
    x:-100
})
tl1.from('.text2',{
    opacity:0,
    x:100
    
})


// animacion de la galeria

// const tlGaleria=gsap.timeline({
//     scrollTrigger:{
//         trigger:".galeria",
//         start:"0% 80%",
//         end:"center 20%",
//         markers:true,
//         scrub:true,
//     }
// })
// tlGaleria.from('.cardGaleria',{
//     opacity:0
// })