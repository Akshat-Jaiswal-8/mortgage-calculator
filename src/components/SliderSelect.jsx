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
        label={"Home Value"}
        value={data.homeValue}
      ></SliderComponent>
    </div>
  );
}

export default SliderSelect;
