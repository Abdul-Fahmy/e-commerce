import { useFormik } from "formik";
import { useContext } from "react";
import { UserContext } from "../../Context/User.context";
import { object, ref, string } from "yup";
import axios from "axios";
import toast from "react-hot-toast";

export default function ChangePassword() {
  const { token, setToken, logOut } = useContext(UserContext);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  let schema = object({
    currentPassword: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    password: string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
      ),
    rePassword: string()
      .required("Confirm password is required")
      .oneOf(
        [ref("password")],
        "Password & Confirm password should be the same"
      ),
  });

  async function handleSubmit(values) {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
        method: "PUT",
        headers: {
          token,
        },
        data: values,
      };

      let { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success(
          "Your Password has been changed successfully, Try to signIn "
        );
        setToken(data.token);
        logOut();
      }
    } catch (error) {
      toast.error(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  let formik = useFormik({
    initialValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <section className="flex flex-col justify-center items-center min-h-[60vh]">
        <div className="flex flex-col justify-center items-center border-solid rounded-md shadow-md bg-gray-200 w-1/2">
          <h2 className="font-semibold text-gray-600 my-4">
            Change Your Password
          </h2>
          <form
            className="w-3/4 flex justify-center flex-col space-y-4 mb-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="current-password">
              <input
                className="form-control"
                name="currentPassword"
                type="password"
                placeholder="Current password"
                onChange={formik.handleChange}
                value={formik.values.currentPassword}
              />
            </div>
            <div className="new-password">
              <input
                className="form-control"
                name="password"
                type="password"
                placeholder="new password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            <div className="re-password ">
              <input
                className="form-control"
                name="rePassword"
                type="password"
                placeholder="re-password"
                onChange={formik.handleChange}
                value={formik.values.rePassword}
              />
            </div>
            <button type="submit" className="btn bg-green-600  mb-4">
              submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
