// Tab switching logic
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelector('.tab.active').classList.remove('active');
      tab.classList.add('active');
  
      const activeTab = tab.getAttribute('data-tab');
      document.querySelector('.tab-pane.active').classList.remove('active');
      document.getElementById(activeTab).classList.add('active');
    });
  });
  
  // Accordion toggle logic
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  