import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import "./average-session.css";

const AverageSession = ({ data }) => {
  const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return <div className="average-session-container">
    <ResponsiveContainer
      width="100%"
      height="100%"  
    >
      <LineChart
        width={400}
        height={263}
        data={data.sessions}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#FFFFFF67" />
            <stop offset="80%" stopColor="#FFF" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey={(e) => days[e.day]}
          axisLine={false}
          tickLine={false}
          className={"days"}
          tick={{ fill: "#FFF", opacity: 0.5 }}
        />
        <YAxis domain={["dataMin - 10", "dataMax + 30"]} hide />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="url(#colorUv)"
          activeDot={{ r: 3 }}
          dot={false}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>

  return (
    {/*<div className="average-session-content">
      <h3 className="title">Durée moyenne des sessions</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="average-session-container"
      >
        <LineChart
          width={400}
          height={263}
          data={data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#FFFFFF67" />
              <stop offset="80%" stopColor="#FFF" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={(e) => days[e.day]}
            axisLine={false}
            tickLine={false}
            className={"days"}
            tick={{ fill: "#FFF", opacity: 0.5 }}
          />
          <YAxis domain={["dataMin - 10", "dataMax + 30"]} hide />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            activeDot={{ r: 3 }}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>*/}
  );
};

export default AverageSession;