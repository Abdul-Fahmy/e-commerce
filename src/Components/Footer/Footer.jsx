import amazonPay from "../../assets/amazon-pay.png";
import americanExpress from "../../assets/American-Express-Color.png";
import masterCard from "../../assets/mastercard.webp";
import payPal from "../../assets/paypal.png";
import googlePlay from "../../assets/get-google-play.png";
import appStore from "../../assets/get-apple-store.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-100 py-8 px-3">
        <div className="container space-y-4">
          <header>
            <h2 className="text-xl font-semibold text-slate-900">
              Get the FreshCart app
            </h2>
            <p className="text-slate-500">
              we will send you a link, open it to on your phone to download the
              app
            </p>
          </header>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <input
              className="form-control w-auto grow "
              type="email"
              placeholder="Email Address"
            />
            <button className="btn uppercase font-semibold bg-yellow-500 hover:bg-yellow-600 ">
              Share App link
            </button>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center py-4 border-y-2 border-slate-300 border-opacity-50 border-solid">
            <div className="payment-parteners flex flex-col lg:flex-row items-center gap-3">
              <h3 className="font-semibold">Payment Parteners</h3>
              <img className="w-20" src={amazonPay} alt="" />
              <img className="w-20" src={americanExpress} alt="" />
              <img className="w-20" src={masterCard} alt="" />
              <img className="w-20" src={payPal} alt="" />
            </div>
            <div className="download flex flex-col lg:flex-row gap-3 items-center">
              <h3 className="font-semibold">Get deliveries with FreshCart</h3>
              <img className="w-28" src={googlePlay} alt="" />
              <img className="w-[110px]" src={appStore} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
