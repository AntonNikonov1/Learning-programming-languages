const firstName = document.querySelector('#firstName'),
      lastName = document.querySelector('#lastName'),
      password = document.querySelector('#password'),
      email= document.querySelector('#email'),
      phone= document.querySelector('#phone'),
      submit = document.querySelector('#submit')

submit.addEventListener('click', (event) => {
  event.preventDefault()

  const data = {}

  errorCheck(firstName, 'Enter first name')
  errorCheck(lastName, 'Enter last name')
  errorCheck(password, 'Enter password')

  if (
    firstName.value.trim() !== ''
    && lastName.value.trim() !== ''
    && password.value.trim() !== ''
  ) {
    data.firstName = firstName.value
    data.lastName = lastName.value
    data.password = password.value

    email.value.trim() === '' ? data.email = null : data.email = email.value
    phone.value.trim() === '' ? data.phone = null : phone.phone = phone.value
  }

  console.log(data)
})

function errorCheck(valueСheck, message) {
  if (valueСheck.value.trim() === '') alert(message)
}