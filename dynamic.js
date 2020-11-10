window.addEventListener('load', (ev) => {
  const form = document.forms.item(0)
  const submitted = document.getElementById('submitted')

  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const email = document.getElementById('email')

    console.log('submitted!', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    })

    form.style.display = 'none'

    submitted.style.display = 'block'
  })
})
