import { useState } from "react";
import { setAddressInfo } from "./lib/contractmethods";

const InputChainDetails = ({ connectedAccount }) => {
  const [inputs, setInputs] = useState({
    input3: "",
    input4: "",
    input1: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleStartButtonClick = async () => {
    console.log(inputs);
    await setAddressInfo(
      connectedAccount,
      inputs.input3,
      inputs.input4,
      inputs.input1,
      "fromevm"
    );
    setInputs({ input1: "", input3: "", input4: "" });
  };

  return (
    <div className="w-1/2 mx-auto p-4">
      <div className="mb-2">
        <label htmlFor="input4" className="block mb-1 font-semibold">
          Unique Name
        </label>
        <input
          type="text"
          id="input4"
          name="input4"
          value={inputs.input4}
          onChange={handleInputChange}
          placeholder="Enter unique name of your choice"
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="input1" className="block mb-1 font-semibold">
          Chain Name
        </label>
        <input
          type="text"
          id="input1"
          name="input1"
          value={inputs.input1}
          onChange={handleInputChange}
          placeholder="Enter Your Chain Name eg XRPL"
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="input4" className="block mb-1 font-semibold">
          XRPL Address
        </label>
        <input
          type="text"
          id="input3"
          name="input3"
          value={inputs.input3}
          onChange={handleInputChange}
          placeholder="Enter Your Address eg xrpl address"
          className="border border-gray-300 px-4 py-2 rounded-md w-full"
        />
      </div>
      <button
        onClick={handleStartButtonClick}
        className="bg-black text-white px-4 py-2 rounded-md w-full"
      >
        Register
      </button>
    </div>
  );
};

export default InputChainDetails;
