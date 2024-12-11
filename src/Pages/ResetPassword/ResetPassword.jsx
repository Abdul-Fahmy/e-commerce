import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { UserContext } from "../../Context/User.context";

export default function ResetPassword() {
  let navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  let schema = object({
    email: string().required("Email is required").email("Invalid Email"),

    newPassword: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleSubmit(values) {
    let toastId = toast.loading("Waiting....");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
        method: "PUT",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.token) {
        setToken(data.token);
        toast.success("User Password Update successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
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
      newPassword: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-[60vh]">
        <div className="flex flex-col justify-center items-center border-solid rounded-md shadow-md bg-gray-200 w-1/2">
          <h2 className="font-semibold my-4">Reset Password</h2>
          <form
            className="w-3/4 flex justify-center flex-col"
            onSubmit={formik.handleSubmit}
          >
            <div className="email mb-4">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Your email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="newPassword mb-4">
              <input
                className="form-control"
                type="password"
                placeholder="Enter Your new Password"
                name="newPassword"
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
            </div>
            {formik.errors.newPassword && (
              <p className="text-red-400 mt-1 text-sm">
                *{formik.errors.password}
              </p>
            )}
            <button className="btn bg-green-600  mb-4 " type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
