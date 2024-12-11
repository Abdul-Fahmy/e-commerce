import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

export default function ForgotPassword() {
  let navigate = useNavigate();
  let schema = object({
    email: string().required("Email is required").email("Invalid Email"),
  });

  async function handleSubmit(values) {
    let toastId = toast.loading("Waiting ....");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.statusMsg === "success") {
        toast.success("reset code sent successfully");
        setTimeout(() => {
          navigate("/resetCode");
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
      email: "",
    },
    validationSchema: schema,
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
                type="email"
                placeholder="Enter Your email"
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
              />
            </div>
            <button className="btn bg-green-600  mb-4 " type="submit">
              Send code
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
