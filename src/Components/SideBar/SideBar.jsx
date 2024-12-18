import { useContext, useEffect, useState } from "react";
import logo from "../../assets/freshcart-logo.svg";
import { FilterContext } from "../../Context/Filter.context";
export default function SideBar({ isOpen, setIsOpen }) {
  const {
    expensiveToCheaper,
    lowToExpensive,
    fromHundredToFive,
    fromFiveToTwoThousand,
    overTwoThousand,
  } = useContext(FilterContext);

  useEffect(() => {}, []);
  return (
    <>
      <section
        className={`${
          isOpen
            ? "left-0 transition-all duration-500"
            : "-left-full transition-all duration-1000 "
        } side-bar bg-slate-100 fixed bottom-0 top-0  z-50  p-6`}
      >
        <div className="mb-4">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="">
          <h4 className="font-semibold py-2">price :</h4>
          <div className="flex flex-col justify-center items-start gap-4">
            <label className=" label-filter">
              <input
                onClick={() => {
                  expensiveToCheaper();
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 1500);
                }}
                className="mr-2"
                type="radio"
                name="price"
              />
              higher to lower price
            </label>
            <label className=" label-filter">
              <input
                onClick={() => {
                  lowToExpensive();
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 1500);
                }}
                className="mr-2"
                type="radio"
                name="price"
              />
              low to expensive
            </label>
            <label className=" label-filter">
              <input
                onClick={() => {
                  fromHundredToFive("500");
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 1500);
                }}
                className="mr-2"
                type="radio"
                name="price"
              />
              150 L.E - 500 L.E
            </label>
            <label className=" label-filter">
              <input
                onClick={() => {
                  fromFiveToTwoThousand("2000");
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 1500);
                }}
                className="mr-2"
                type="radio"
                name="price"
              />
              500 L.E - 2000 L.E
            </label>
            <label className=" label-filter">
              <input
                onClick={() => {
                  overTwoThousand("2000");
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 1500);
                }}
                className="mr-2"
                type="radio"
                name="price"
              />
              Over 2000 L.E
            </label>
          </div>
        </div>
      </section>
    </>
  );
}
