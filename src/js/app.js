// TODO: write code here
import '../css/style.css'
import { Tooltip } from "./tooltip.js"

new Tooltip().showTooltip();
const button = document.querySelector("button");
const popover = document.querySelector(".popover");


button.addEventListener("click", () => {
    popover.classList.add("popover_2");
});

