const getTemplate = (inputs = [], btn = []) => {

  const id = inputs.map(i => {
    return `<div class="block">
              <div class="block__error error-${i.id}">${i.error}</div>
              <input class="${i.class} ${i.id}" type="${i.type}" placeholder="${i.placeholder}" id="${i.id}"/>
              <label class="block__label label-${i.id}" for="${i.id}">${i.label}</label>
            </div>`
  });

  const button = btn.map(i => {
    return `<button class="${i.class}" type="${i.type}">${i.text}</button>`
  })
  return `<form>
            ${id.join('')}
            ${button.join('')}
          </form>`;
}

class Validator {
  constructor (el, options) {
    this.el = document.querySelector(el);
    this.options = options;
    this.#render();
  }

  #render () {
    const {inputs, btn} = this.options
    this.el.innerHTML = getTemplate(inputs, btn);
  }

}
let valid = new Validator (".validator-form", {
  inputs: [
    {id: "email", type: "text", class: "block__input", placeholder: "enter your email", label: "enter your email", error: "incorrect name"},
    {id: "name", type: "text", class: "block__input", placeholder: "enter your name", label: "enter your name", error: "incorrect email"},
    {id: "password", type: "password", class: "block__input", placeholder: "password", label: "password", error: "incorrect password"},
    {id: "number", type: "tel", class: "block__input", placeholder: "number", label: "number", error: "incorrect number"},
    {id: "date", type: "date", class: "block__input", placeholder: "date", label: "date", error: "incorrect date"},
    {id: "checkbox", type: "checkbox", class: "block__input", placeholder: "checkbox", label: "checkbox", error: "incorrect check"},
    {id: "file", type: "file", class: "block__input", placeholder: "file", label: "file", error: "incorrect file"}

  ],
  btn: [
    {class: "btn", type: "submit", text: "submit"}
  ]
});