'use strict';
// write code here
const inputs = document.querySelector('form').querySelectorAll('input');
for (const input of inputs){
    const label = document.createElement('label');
    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = input.name;
    input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
    input.parentElement.append(label);
}

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map
