import { concatenation } from "./concatenation";

const input = document.querySelector('input');
const button = document.querySelector('button');

if (button && input) {
    button.addEventListener('click',  () => { concatenation(input.value, 'Hello!'); })
}