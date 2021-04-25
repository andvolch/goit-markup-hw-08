// (() => {
//     const menuBtnRef = document.querySelector('[data-menu-button]');
//     const mobileMenuRef = document.querySelector('[data-menu]');
    
//     menuBtnRef.addEventListener('click', () => {
//         menuBtnRef.classList.toggle('is-open');
//         mobileMenuRef.classList.toggle('is-open');
        
//     });
// })();

(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-button]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();