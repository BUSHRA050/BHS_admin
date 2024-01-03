import Swal from 'sweetalert2'

const ErrorHelper = (err, doAlert) => {
  if (doAlert) {
    if (err) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err,
        confirmButtonColor: '#ff3600',
      })
    }
  }
}

export default ErrorHelper;