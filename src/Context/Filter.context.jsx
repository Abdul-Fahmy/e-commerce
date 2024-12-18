import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const FilterContext = createContext(null);

export default function FilterProvider({ children }) {
  const [expensive, setExpensive] = useState(null);
  const [low, setLow] = useState(null);
  const [rangeHundredFive, setRangeHundredFive] = useState(null);
  const [rangeHundredFiveToTwo, setRangeHundredFiveToTwo] = useState(null);
  const [twoThousand, setOverTwoThousand] = useState(null);
  //from expensive to cheap
  async function expensiveToCheaper() {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?sort=-price`,
        method: "Get",
      };
      let { data } = await axios.request(options);
      if (data) {
        setExpensive(data);
        setLow(null);
        setRangeHundredFive(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  //cheap to expensive
  async function lowToExpensive() {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?sort=price`,
        method: "Get",
      };
      let { data } = await axios.request(options);
      if (data) {
        setLow(data);
        setExpensive(null);
        setRangeHundredFive(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  //Between 150-500
  async function fromHundredToFive(range) {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?price[lte]=${range}`,
        method: "Get",
      };
      let { data } = await axios.request(options);

      if (data) {
        setRangeHundredFive(data);
        setExpensive(null);
        setLow(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  //Between 500-2000
  async function fromFiveToTwoThousand(range) {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?price[lte]=${range}`,
        method: "Get",
      };
      let { data } = await axios.request(options);

      if (data) {
        setRangeHundredFiveToTwo(data);
        setRangeHundredFive(null);
        setExpensive(null);
        setLow(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }
  //Over 2000
  async function overTwoThousand(range) {
    let toastId = toast.loading("Waiting...");
    try {
      const options = {
        url: `https://ecommerce.routemisr.com/api/v1/products?price[gte]=${range}`,
        method: "Get",
      };
      let { data } = await axios.request(options);

      if (data) {
        setOverTwoThousand(data);
        setRangeHundredFiveToTwo(null);
        setRangeHundredFive(null);
        setExpensive(null);
        setLow(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss(toastId);
    }
  }

  return (
    <FilterContext.Provider
      value={{
        expensiveToCheaper,
        lowToExpensive,
        fromHundredToFive,
        fromFiveToTwoThousand,
        overTwoThousand,
        expensive,
        low,
        rangeHundredFive,
        rangeHundredFiveToTwo,
        twoThousand,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
