export default class OptionMenu {
    constructor(buttons) {
      this.buttons = buttons;
      this.content = null;
      this.init();
    }
  
    init() {
      this.hideContent();
      this.showContent(this.buttons[0]);
      this.addClasses(this.buttons[0]);
  
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].addEventListener('click', event => this.toggle(event));
      }
    }

    hideContent() {
      const content = document.querySelectorAll('[data-content-for-option]');
  
      for (let i = 0; i < content.length; i++) {
        content[i].classList.add('hidden');
      }
    }
  
    showContent(target) {
      const option = target.getAttribute('id');
      const content = document.querySelector(`[data-content-for-option='${option}']`);
      content.classList.remove('hidden');
    }
  
    removeClasses() {
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].classList.remove('active');
      }
    }
  
    addClasses(target) {
      if (!target.classList.contains('active')) {
        target.classList.add('active');
      }
    }
  
    toggle(event) {
      event.preventDefault();
      this.hideContent();
      this.removeClasses();
      this.addClasses(event.target);
      this.showContent(event.target);
    }
  }
  