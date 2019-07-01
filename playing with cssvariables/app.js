const inputs = document.querySelectorAll(".controls input");
function HandleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change',HandleUpdate));
inputs.forEach(input => input.addEventListener('mouseover',HandleUpdate));
