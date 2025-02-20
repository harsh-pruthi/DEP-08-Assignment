const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');
const startButton = document.querySelector('.progress-button');
    
let progress = 0;

startButton.addEventListener('click', function() {
        
    startButton.disabled = true;    
    setInterval(function(){
        if(progress<=90){
            progress+=10;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
            
        }else{
            
            startButton.disabled = false;
        }
        },1000)
            
    });
