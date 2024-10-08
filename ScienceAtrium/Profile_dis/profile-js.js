if (document.documentElement.clientWidth > 539) {

  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.cards');
    const header = document.querySelector('.header');
  
  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let mainCenter = main.offsetHeight / 2;
  
    if (scrollTop >= mainCenter) {
      header.classList.add('fixed')
      main.style.marginTop = `${header.offsetHeight}px`;
      header.style.background = `rgba(178, 196, 188, 1)`;
    } else {
      header.classList.remove('fixed')
      main.style.marginTop = `0px`;
      
    }
  };
  
  headerFixed();
    window.addEventListener('scroll', () => {
      headerFixed();
    });
  });

}
  
  /*!
 * EasyToggler v2.2.7 (https://github.com/rah-emil/easy-toggler#readme)
 * Copyright 2022 Rah Emil <013131@mail.ru>
 * Licensed under MIT (https://github.com/rah-emil/easy-toggler/blob/master/LICENSE)
 */
function e(e,t){const s=e.target.closest(`[${t.toggle}]`),o=e.target.closest(`[${t.remove}]`),l=e.target.closest(`[${t.add}]`);s&&(e.preventDefault(),((e,t)=>{const s=e.getAttribute(t.toggle);document.querySelectorAll(`[${t.toggle}]`).forEach((s=>{if(!s.hasAttribute(t.parallel)&&s!==e){document.querySelector(s.getAttribute(t.toggle)).classList.remove(s.getAttribute(t.class));const o=e.getAttribute(t.self);o&&e.classList.remove(o)}})),document.querySelector(s)?.classList.toggle(e.getAttribute(t.class));const o=e.getAttribute(t.self);o&&e.classList.toggle(o),t.onToggle(e)})(s,t)),o&&(e.preventDefault(),((e,t)=>{const s=e.getAttribute(t.remove),o=e.getAttribute(t.class);document.querySelectorAll(s).forEach((e=>{e.classList.remove(o)}));const l=e.getAttribute(t.self);l&&e.classList.remove(l),t.onRemove(e)})(o,t)),l&&(e.preventDefault(),((e,t)=>{const s=e.getAttribute(t.add),o=e.getAttribute(t.class);document.querySelectorAll(s).forEach((e=>{e.classList.add(o)}));const l=e.getAttribute(t.self);l&&e.classList.add(l),t.onAdd(e)})(l,t)),s||o||l||((e,t)=>{const s=document.querySelectorAll(`[${t.rcoe}]`);Array.from(s).forEach((s=>{let o=s.getAttribute(t.toggle),l=s.getAttribute(t.class);if(!e.target.closest(o)){document.querySelector(o)?.classList.remove(l);const e=s.getAttribute(t.self);e&&s.classList.remove(e),t.onRcoe(s)}}))})(e,t)}const t={toggle:"easy-toggle",add:"easy-add",remove:"easy-remove",class:"easy-class",rcoe:"easy-rcoe",parallel:"easy-parallel",self:"easy-self",selfRcoe:"easy-self-rcoe",onToggle(e){},onAdd(e){},onRemove(e){},onRcoe(e){}},s=s=>{const o={...t,...s};document.addEventListener("click",(t=>{e(t,o)}))};export{s as default};
//# sourceMappingURL=easy-toggler.min.js.map
  