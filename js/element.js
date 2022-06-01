const subItem = document.querySelector('.sub')

if (subItem) {
   subItem.addEventListener('click', () => {
      if (subItem.classList.contains('active')){
         subItem.classList.remove('active')
      } else {
         subItem.classList.add('active')
      }
   })
}