import { concatenation } from "./concatenation";

const input = document.querySelector('input');
const button = document.querySelector('button');

if (button && input) {
    button.addEventListener('click',  () => { concatenation(input.value, 'Hello!'); })
}

const nunbers: number[] = [1, 2, 3,]
nunbers.push(4);

// type User = { name: string };
// function gread(user: User): void {
//     console.log(`Hello! ${user.name}`)
// }
// gread({ name: 'Pol' })