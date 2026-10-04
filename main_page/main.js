 document.addEventListener('DOMContentLoaded', () => {
            // 1. Dynamic Greeting
            const greetingElement = document.getElementById('dynamic-greeting');
            const hour = new Date().getHours();
            let greetingText = "";

            if (hour >= 5 && hour < 12) {
                greetingText = "ಶುಭೋದಯ! ಇಂದಿನ ಅಧ್ಯಯನ ಶುಭವಾಗಲಿ.";
            } else if (hour >= 12 && hour < 17) {
                greetingText = "ಶುಭ ಮಧ್ಯಾಹ್ನ! ಏಕಾಗ್ರತೆಯಿಂದ ಓದಿ.";
            } else if (hour >= 17 && hour < 21) {
                greetingText = "ಶುಭ ಸಂಜೆ! ಇಂದಿನ ಗುರಿಯನ್ನು ಸಾಧಿಸಿ.";
            } else {
                greetingText = "ಶುಭ ರಾತ್ರಿ! ನಾಳಿನ ಸಿದ್ಧತೆಗಾಗಿ ಚೆನ್ನಾಗಿ ವಿಶ್ರಮಿಸಿ.";
            }
            greetingElement.innerText = greetingText;

            // 2. Scroll/Load Animations for Book Cards
            const cards = document.querySelectorAll('.card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('show');
                        }, index * 150);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => {
                observer.observe(card);
            });
        });