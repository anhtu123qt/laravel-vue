export default {
    showSuccess(title, message) {
        Swal.fire(
            title,
            message,
            'success'
        )
    },
    showError(title, message) {
        Swal.fire({
            icon: 'error',
            type: '',
            title: title,
            text: message,
            footer: '',
        }
        )
    },
    timerMessage(title, message, timer) {
        let timerInterval
        Swal.fire({
            title: title,
            html: message,
            timer: timer,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }
}
