import { createElement, register } from 'lwc';
import { registerWireService } from '@lwc/wire-service';
import UiApp from 'ui/app';

registerWireService(register);

const app = createElement('my-app', { is: UiApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
