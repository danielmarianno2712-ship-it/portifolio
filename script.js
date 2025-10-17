// ...existing code...
// Elementos
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const dontShow = document.getElementById('dontShow');
const topBtn = document.getElementById('topBtn');
 
// Menu hambúrguer
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
 
// Mostrar / esconder pop-up com opção "não mostrar novamente"
function showPopup() {
  if (!popup) return;
  if (localStorage.getItem('hidePopup') === 'true') return;
  popup.classList.remove('hidden');
  closePopup?.focus();
}
function hidePopup(savePreference = false) {
  if (!popup) return;
  popup.classList.add('hidden');
  if (savePreference) localStorage.setItem('hidePopup', 'true');
}
 
// Eventos do pop-up
closePopup?.addEventListener('click', () => {
  const save = dontShow?.checked === true;
  hidePopup(save);
});
 
// fechar ao clicar fora do conteúdo
popup?.addEventListener('click', (e) => {
  if (e.target === popup) {
    const save = dontShow?.checked === true;
    hidePopup(save);
  }
});
 
// fechar com Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const save = dontShow?.checked === true;
    hidePopup(save);
  }
});
 
// Mostrar pop-up após 800ms ao carregar
window.addEventListener('load', () => setTimeout(showPopup, 800));
 
// Botão voltar ao topo
window.addEventListener('scroll', () => {
  if (!topBtn) return;
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));