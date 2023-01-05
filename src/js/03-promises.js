import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

let delay = 0;
let position = 0;

function onFormSubmit(e) {
  e.preventDefault();
  const amount = e.currentTarget.elements.amount.value;
  const stepDelay = +e.currentTarget.elements.step.value;
  delay = +e.currentTarget.elements.delay.value;

  for (let i = 0; i < amount; i++) {
    position += 1;
    delay += stepDelay;

    createPromise({ position, delay })
      .then(resolve => {
        Notify.success(resolve);
      })
      .catch(reject => {
        Notify.failure(reject);
      });
  }
}

function createPromise() {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}
