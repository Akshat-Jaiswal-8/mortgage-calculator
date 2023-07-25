/* eslint-disable react/prop-types */
import SliderComponent from "./common/SliderComponent";

// eslint-disable-next-line react/prop-types
function SliderSelect({ data, setData }) {
  const bankLimit = 10000;
  return (
    <div>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            homeValue: value.toFixed(0),
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bankLimit}
        steps={100}
        unit={"₹"}
        amount={data.homeValue}
        label={"Principle Value"}
        value={data.homeValue}
      ></SliderComponent>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: value.toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={0}
        max={7000}
        steps={100}
        unit={"₹"}
        amount={data.downPayment}
        label={"Down Payment"}
        value={data.downPayment}
      ></SliderComponent>
      <SliderComponent
        onChange={(e, value) => {
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          });
        }}
        defaultValue={data.loanAmount}
        min={1000}
        max={7000}
        steps={100}
        unit={"₹"}
        amount={data.loanAmount}
        label={"Loan Amount"}
        value={data.loanAmount}
      ></SliderComponent>
      <SliderComponent
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        unit="%"
        amount={data.interestRate}
        label="Interest Rate"
        value={data.interestRate}
      />
    </div>
  );
}

export default SliderSelect;
