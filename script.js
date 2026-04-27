const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const header = card.querySelector('.card-header');
  const content = card.querySelector('.card-content');

  header.addEventListener('click', () => {
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});








document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('container2')) {
                    entry.target.classList.add('show');
                }

                if (entry.target.classList.contains('nld')) {
                    entry.target.classList.add('show');
                }

                if (entry.target.classList.contains('ddh')) {
                    entry.target.classList.add('show');
                }

                if (entry.target.classList.contains('phot')) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, 600);
                }

                if (entry.target.classList.contains('comb')) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, 600);
                }

                if (entry.target.classList.contains('bigcard')) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, 600);
                }

                if (entry.target.classList.contains('contu')) {
                    setTimeout(() => {
                        entry.target.classList.add('show');
                    }, 600);
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    const elements = document.querySelectorAll('.container2, .phot, .nld, .contu, .ddh, .comb, .bigcard');
    elements.forEach(el => observer.observe(el));
});
