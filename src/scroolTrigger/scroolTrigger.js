import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


// header

gsap.to("#bg",{
    scrollTrigger:{
        scrub:1
    },
    scale:1.5,
    opacity:0
})
gsap.to("#pareja",{
    scrollTrigger:{
        scrub:1
    },
    scale:0,
    opacity:0,
    y:500
})
gsap.to("#cortinaDerecha",{
    scrollTrigger:{
        scrub:1
    },
    x:500,
opacity:0
})
gsap.to("#cortinaIzquierda",{
    scrollTrigger:{
        scrub:1
    },
    x:-500,
    opacity:0
})
gsap.to("#letras",{
    scrollTrigger:{
        scrub:1
    },
    y:2000,
    scale:0.5
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