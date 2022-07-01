document.getElementById('myButton').onclick = function () {
  const myCheckBox = document.getElementById('myCheckBox')
  const visaBtn = document.getElementById('visaBtn')
  const mastercardBtn = document.getElementById('mastercardBtn')
  const paypalBtn = document.getElementById('paypalBtn')

  if (myCheckBox.checked) {
    document.getElementById('notice').innerHTML = 'You are subscribed'
  } else {
    document.getElementById('notice').innerHTML = 'you are not subscribed.'
  }

  if (visaBtn.checked) {
    console.log('You are paying with visa!')
  } else if (mastercardBtn.checked) {
    console.log('you are paying with a mastercard!')
  } else if (paypalBtn.checked) {
    console.log('You are paying with paypal!')
  } else {
    console.log('you must select a payment type!')
  }
}
