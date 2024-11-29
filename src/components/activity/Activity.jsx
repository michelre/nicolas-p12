import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"

const Activity = ({data, id}) => {
    const sessions = data.sessions.map((d, idx) => ({...d, idx: idx + 1}))
    return <BarChart width={730} height={250} data={sessions}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="idx"/>
    <YAxis dataKey="calories" orientation="left" yAxisId='left' hide/>
    <YAxis dataKey="kilogram" orientation="right" yAxisId='right'/>
    
    <Tooltip />
    <Legend />
    <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} yAxisId="right"/>
    <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} yAxisId="left"/>
  </BarChart>
}

export default Activity