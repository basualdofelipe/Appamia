document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        if (button.classList.contains('accordion__button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionContent.style.boxShadow = "0px 3px 3px 2px rgba(0, 0, 0, .1)";
            accordionContent.style.padding = "2.5rem";
            accordionContent.style.padding = "auto";
        } else {
            accordionContent.style.maxHeight = 0
            accordionContent.style.boxShadow = 0;
            accordionContent.style.padding = 0;
        }
    })
});