document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('authModal');
    const closeBtn = modal.querySelector('.close-btn');
    const togglePwd = modal.querySelector('.toggle-password');
    const pwdField = modal.querySelector('#password');
    const searchInput = document.querySelector('.search-bar input');
    const cards = document.querySelectorAll('.card');

   
    loginBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });

   
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });

   
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });

   
    togglePwd.addEventListener('click', () => {
        const type = pwdField.getAttribute('type') === 'password' ? 'text' : 'password';
        pwdField.setAttribute('type', type);
    });

   
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const isMatch = title.includes(query) || description.includes(query);

            card.style.display = isMatch ? 'block' : 'none';
        });
    });
});
