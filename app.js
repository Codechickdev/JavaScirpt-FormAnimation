function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    
    arrows.forEach(arrow => {
        arrow.addEventListener("click", () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            // Check for validation
            if (input.type === 'text' && validateUser(input)){
                nextSlide(parent, nextForm)
            }else if(input.tyep === 'email'&& validateEmail(email)){
                nextSlide(parent,nextForm)
            }
            else{
                parent.style.animation = 'shake 0.5 ease'
            };

            parent.addEventListener('animationend', () => {
                parent.style.animation = '';
            });
        });
    });
};

function validateUser(user) {
    if (user.value.length < 6){
        console.log('Not enought character')
        error('red')
    }else{
        error('rgb(47, 209, 134);');
        return true
    };
};


function validateEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)){
        return true
    }else{
        error('red')
    }
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
};

function error(color){
    document.body.style.backgroundColor = color;
};

animatedForm();