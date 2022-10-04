const slider = document.getElementById('range-lider');

if(slider) {
  noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 1000
    }
});

const input0 = document.getElementById('before');
const input1 = document.getElementById('from');
const inputs = [input0, input1]

slider.noUiSlider.on('update', function(values, handle) {
  inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
  let arr = [null, null];
  arr[i] = value;

  slider.noUiSlider.set(arr)
};

inputs.forEach((el, index) => {
  el.addEventListener('change', (e) => {
    setRangeSlider(index, e.currentTarget.value)
  });
});
}


export {slider};
