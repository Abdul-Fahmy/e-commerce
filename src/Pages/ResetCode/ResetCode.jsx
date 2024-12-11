import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ResetCode() {
  let navigate = useNavigate();
  async function handleSubmit(values) {
    let toastId = toast.loading("Waiting....");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.status === "Success") {
        setTimeout(() => {
          navigate("/resetPassword");
        }, 2000);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-[60vh]">
        <div className="flex flex-col justify-center items-center border-solid rounded-md shadow-md bg-gray-200 w-1/2">
          <h2 className="font-semibold my-4">Forgot Your Password</h2>
          <form
            className="w-3/4 flex justify-center flex-col"
            onSubmit={formik.handleSubmit}
          >
            <div className="email mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your email"
                name="resetCode"
                onChange={formik.handleChange}
                value={formik.values.resetCode}
              />
            </div>
            <button className="btn bg-green-600  mb-4 " type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
