const $form = document.querySelector('.formcontato__form');
const $buttonMailto = document.querySelector('.correo');

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  console.log(form.get('nombre'));
  $buttonMailto.setAttribute('href',`mailto:domezapata45@gmail.com?subject=${form.get('nombre')}${form.get('email')}${form.get('asunto')}&body=${form.get('mensaje')}`)
  $buttonMailto.click()

}
