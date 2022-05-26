import "../styles/style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function togglemenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

togglemenu();

const tl1 = gsap.timeline({ ScrollTrigger: ".col-2", delay: 0.2 });
tl1.from(".col-1", { opacity: 0, duration: 2.4 });

const tl2 = gsap.timeline({ scrollTrigger: ".T1", delay: 0.2 });
tl2.from(".T1", {
  duration: 0.45,
  opacity: 0,
  scale: 0.8,
  translateY: 50,
  transformOrigin: "center center",
});

const tl3 = gsap.timeline({ scrollTrigger: ".T2", delay: 0.2 });
tl3.from(".T2", {
  duration: 0.45,
  opacity: 0,
  scale: 0.8,
  translateY: 50,
  transformOrigin: "center center",
});

const tl4 = gsap.timeline({ scrollTrigger: ".T3", delay: 0.2 });
tl4.from(".T3", {
  duration: 0.45,
  opacity: 0,
  scale: 0.8,
  translateY: 50,
  transformOrigin: "center center",
});

const tl5 = gsap.timeline({ scrollTrigger: ".T4", delay: 0.2 });
tl5.from(".T4", {
  duration: 0.45,
  opacity: 0,
  scale: 0.8,
  translateY: 50,
  transformOrigin: "center center",
});

const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");
});

refresh.addEventListener("click", () => {
  window.location.reload();
});
