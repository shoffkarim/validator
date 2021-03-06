/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import "../sass/style.sass";
import CheckForm from "./checkform";
// eslint-disable-next-line no-unused-vars
let valid: CheckForm = new CheckForm({ // init class
  customValid: {
    nicknameReg: /^[а-яА-Я]/,
    nicknameMaxLength: 11
  },
  errorMessages: true,
  customClassesForm: {
    wrapperClass: "checkform-wrapper",
    formClass: "checkform-form",
    blockClass: "block",
    errorClass: "block__error",
    labelClass: "block__label",
    btnClass: "checkform-btn",
    focusClass: "js-input-focus",
  },
  checkSubstr: [
    {
      id: "email", substr: "k4r1"
    }
  ],
  blackList: ["lol", "kek"]
});
