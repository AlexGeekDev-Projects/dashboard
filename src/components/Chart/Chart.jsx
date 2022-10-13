import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { data } from "./data";
import { colors } from "../../sass/Colors";

export const Chart = () => {
  return (
    <AreaChart
      width={720}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="CheckIn" stackId="1" stroke="#8884d8" fill={colors.primary} />
      <Area type="monotone" dataKey="CheckOut" stackId="1" stroke="#82ca9d" fill={colors.secondary} />
      <Area type="monotone" dataKey="Reservaciones" stackId="1" stroke="#ffc658" fill={colors.dark} />
    </AreaChart>
  );
};
