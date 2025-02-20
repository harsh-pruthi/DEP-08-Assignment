
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(accordion => {
const btn = accordion.querySelector('.accordion-title');

btn.addEventListener('click', function() {
    const openAccordion = document.querySelector('.accordion-item.open');
    if (openAccordion && openAccordion !== accordion) {
        openAccordion.classList.remove('open');
        openAccordion.querySelector('.accordion-content').style.maxHeight = null;
    }
    
    const content = accordion.querySelector('.accordion-content');
    if (accordion.classList.contains('open')) {
        accordion.classList.remove('open');
        content.style.maxHeight = null;
    } else {
        accordion.classList.add('open');
        content.style.maxHeight = content.scrollHeight + "px";
    }
});
});