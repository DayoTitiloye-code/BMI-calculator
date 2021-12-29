let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
  let weight = document.getElementById('weight').value
  let height = document.getElementById('height').value

  let bmi = (weight / (height * height)) * 10000

  document.getElementById('bmi-output').value = bmi.toFixed(2)
})
