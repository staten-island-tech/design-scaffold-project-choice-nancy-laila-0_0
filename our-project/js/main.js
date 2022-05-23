import "../styles/style.css";
import { gsap } from "gsap";
import{ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tl= gsap.timeline({delay:0.2});
tl.from(".col-1", {opacity:0, duration:2.4})