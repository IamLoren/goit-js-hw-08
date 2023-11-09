import localStorageAPI from './localstorage.js';

const contactFormEl = document.querySelector('.feedback-form');
const userData = {};
const fillContactFormField = () => {
  const userDataFromLS = localStorageAPI.load('contactFormInfo');

  if (userDataFromLS === undefined) {
    return;
  }
  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      contactFormEl.elements[key].value = userDataFromLS[key];
    }
  }
};

fillContactFormField();

const onContactFormFieldChange = ({ target: contactFormField }) => {
  const contactFormFieldValue = contactFormField.value;
  const contactFormFieldName = contactFormField.name;

  const userDataFromLS = localStorageAPI.load('contactFormInfo') || {};

  userDataFromLS[contactFormFieldName] = contactFormFieldValue;

  localStorageAPI.save('contactFormInfo', userDataFromLS);
};

const onContactFormSubmit = event => {
  event.preventDefault();

  contactFormEl.reset();
  localStorageAPI.remove('contactFormInfo');
};

contactFormEl.addEventListener('input', onContactFormFieldChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
