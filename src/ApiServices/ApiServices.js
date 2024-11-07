import axios from "axios"
import Swal from 'sweetalert2'


export const bookingApi = (data) => {
    axios.post(`https://express-api-structure.vercel.app/booking`, data)
        .then(result => {
            console.log(result.data.status);
            if (result.data.status == 'successful') {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your information has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        })
        .catch(err => {
            console.log(err)
        })
}