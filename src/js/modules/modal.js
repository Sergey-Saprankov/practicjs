const modal = () => {
  const bindModal = (modalWindowSelector, opnBtnSelector, clsBtnSelector) => {
      const openModal = document.querySelectorAll(opnBtnSelector);
      const popap = document.querySelector(modalWindowSelector);
      const closeBtn = popap.querySelector(clsBtnSelector);

      openModal.forEach(el => {
        el.addEventListener('click', (e) => {
          if(e.target) {
            e.preventDefault();
          }
    
          popap.style.display = 'block';
          // document.body.classList.add('modal-open');
          document.body.style.overflow = 'hidden';
        })
      })

      

    closeBtn.addEventListener('click', () => {
      popap.style.display = 'none';
      // document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    })

    popap.addEventListener('click', (e) => {
      if(e.target === popap) {
        popap.style.display = 'none';
        // document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
      }
    })

    document.addEventListener('keydown', (e) => {
      if ((e.key === 'Escape' || e.key === 'Esc') && popap.style.display === 'block') {
        popap.style.display = 'none';
        // document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
      }
    })
  }

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = '';
    },time)
  }

  bindModal('.popup_engineer','.popup_engineer_btn', '.popup_engineer .popup_close');
  bindModal('.popup','.phone_link', '.popup .popup_close');

  showModalByTime('.popup', 5000);
}

export default modal;