import axios from "axios";
import { useFormik } from "formik";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

export default function SignIn() {
  let navigate = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  let schema = object({
    email: string().required("Email is required").email("Invalid Email"),

    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
  });

  async function handleSubmit(values) {
    const loadingId = toast.loading("Waiting");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/auth/signin",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("User Logged in successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(loadingId);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <h2 className="my-5">Sign In Now :</h2>
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div className="email">
          <input
            className="w-full form-control"
            type="email"
            placeholder="Enter Your email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-red-400 mt-1 text-sm">*{formik.errors.email}</p>
          )}
        </div>

        <div className="password">
          <input
            className="w-full form-control"
            type="password"
            placeholder="Enter Your Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-red-400 mt-1 text-sm">
              *{formik.errors.password}
            </p>
          )}
        </div>

        <button
          className="flex ml-auto py-2 px-3 bg-blue-400 text-white rounded-md"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </>
  );
}
