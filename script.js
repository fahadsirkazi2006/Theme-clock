function updateClock() {
        const now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    setInterval(updateClock, 1000);
    updateClock();

    const lightBtn = document.getElementById('lightBtn');
    const darkBtn = document.getElementById('darkkBtn');
    const body = document.body;
    
    lightBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
    });
    
    darkBtn.addEventListener('click', () => {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#f5f5f5';
    });