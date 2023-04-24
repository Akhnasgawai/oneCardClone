const applyBtn = document.querySelector('#apply');
const applyBtn2 = document.querySelector('#applies');

checkBox = document.querySelector('#agree').addEventListener('click', event => {
	if(event.target.checked) {
		applyBtn.classList.remove('disabled');
	}
    else{
        applyBtn.classList.add('disabled');
    }
});

checkBox = document.querySelector('#agrees').addEventListener('click', event => {
	if(event.target.checked) {
		applyBtn2.classList.remove('disabled');
	}
    else{
        applyBtn2.classList.add('disabled');
    }
});