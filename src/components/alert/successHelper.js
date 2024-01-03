import Swal from 'sweetalert2'

const SuccessHelper = (open, msg) => {
    if (open) {
        if (msg) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: msg,
                confirmButtonColor: '#ff3600',
            })
        }
    }
}

export default SuccessHelper;