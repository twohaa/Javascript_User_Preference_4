(function () {
    const buttons = document.querySelectorAll(".counterBtn");
    let count = 0;
    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        if(button.classList.contains("prevBtn")){
            count--;
        }
        else if(button.classList.contains("nextBtn")){
            count++;
        }

        const counter = document.querySelector('#counter');
        counter.textContent = count;
        if(count < 0){
            counter.style.color = 'maroon';
        }
        else if(count > 0){
            counter.style.color = 'blue';
        }else{
            counter.style.color = 'yellowgreen';
        }
      });
    });
})()