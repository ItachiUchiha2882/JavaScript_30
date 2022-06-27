const inputs = document.querySelectorAll('.item input');
// console.log(inputs);

function valueUpdate() {
    // console.log(this.value);
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || "";
    // here nothing is added for colr tag as it doesn't have data-sizing.
    // console.log(suffix);
    // console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', valueUpdate));
inputs.forEach(input => input.addEventListener('mousemove', valueUpdate));

