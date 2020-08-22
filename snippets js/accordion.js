class AccordionItem {
    constructor(item, toggle, content) {
      this.item = item;
      this.button = toggle;
      this.content = content;
      this.isOpened = false;
    }
  
    init() {
  
      this.button.addEventListener('click', event => this.toggle(event));
  
      if (this.item.classList.contains('is-active')) {
        this.open();
      }
    }
  
    /**
     * Toggle
     * @param {*} event
     */
    toggle(event) {
      event.preventDefault();
      if (this.isOpened) {
        this.close();
      } else {
        this.open();
      }
    }
  
    /**
     * Open
     */
    open() {
      this.item.classList.add('is-active');
      this.button.classList.add('is-active');
      this.content.classList.add('is-active');
      this.isOpened = true;
    }
  
    close() {
      this.item.classList.remove('is-active');
      this.button.classList.remove('is-active');
      this.content.classList.remove('is-active');
      this.isOpened = false;
    }
  }

  export default class Accordion {
    constructor(container, options) {
      this.container = container;
      this.options = {
        item: '[data-accordion-item]',
        toggle: '[data-accordion-toggle]',
        content: '[data-accordion-content]',
        ...options,
      };
    }
  
    init() {
      const items = Array.from(document.querySelectorAll(this.options.item));
      items.forEach(item => {
        const toggle = item.querySelector(this.options.toggle);
        const content = item.querySelector(this.options.content);
  
        if (toggle && content) {
          const accordionItem = new AccordionItem(item, toggle, content);
          accordionItem.init();
        }
      });
    }
  }