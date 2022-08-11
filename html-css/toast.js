function toast ({
    title ='', 
    message ='', 
    type = 'info', 
    duration = 3000,
}) {
        const main = document.getElementById('toast');
        if (main) {
            const toast = document.createElement('div');
            const clearTimeoutId = setTimeout (function () {
                main.removeChild (toast);
            }, duration + 1000); 

            toast.onclick = function (e) {
                if (e.target.closest('.toast__close')) {
                    main.removeChild (toast); 
                    clearTimeout(clearTimeoutId); 
                }
            }

            const icons = {
                success: 'fas fa-check-circle', 
                info: 'fas fa-info-circel', 
                warning: 'fas fa-exclamation-circle', 
                error: 'fas fa-exclamation-circle',
            };
            const icon = icons[type]; 
            const delay = (duration/1000).toFixed(2);

            // toast.classList.add('toast'); 
            toast.style.animation = `slideInLeft ease .5s, fadeOut linear 1s ${delay}s forwards`; 
            toast.innerHTML = `
                <div class="toast toast--${type}">
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__tittle">
                            ${title}
                        </h3>
                        <p class="toast__msg">
                            ${message}
                        </p>
                    </div>
                    <div  div class="toast__close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                
                </div>
            `; 
            main.appendChild(toast);
        }
}