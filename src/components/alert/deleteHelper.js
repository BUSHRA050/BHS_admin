import Swal from "sweetalert2";

const DeleteHelper = (open, id, handleApi, getApi) => {
  if (open) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleApi(id)
          .then((res) => {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: res.data.message,
              confirmButtonColor: "#ff3600",
            });
            getApi();
          })
          .catch((err) => {
            console.log(err, "ererererere");
          });
      }
    });
  }
};

export default DeleteHelper;
