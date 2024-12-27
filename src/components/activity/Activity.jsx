import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts"

import './activity.css'

const renderLegend = (props) => {
  const { payload } = props;
  console.log(payload)

  const entries = {
    kilogram: 'Poids (kg)',
    calories: 'Calories brûlées (kCal)'
  }

  return (
    <ul className="legend">
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`} className={`${entry.dataKey}`}>
             <div className="legend-icon"></div> {entries[entry.dataKey]}
          </li>
        ))
      }
    </ul>
  );
}

const Activity = ({data, id}) => {
    const sessions = data.sessions.map((d, idx) => ({...d, idx: idx + 1}))
    return <div className="activity-container">
      <h3>Activité quotidienne</h3>
      <ResponsiveContainer
            width="100%"
            height="100%"  
          >
            <BarChart width={730} height={250} data={sessions}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="idx" />
              <YAxis dataKey="calories" orientation="left" yAxisId='left' hide/>
              <YAxis dataKey="kilogram" orientation="right" yAxisId='right'/>
              
              <Tooltip />
              <Legend  verticalAlign="top" align="right"  content={renderLegend}/>
              <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} yAxisId="right"/>
              <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} yAxisId="left"/>
            </BarChart>
          </ResponsiveContainer>
    </div>
    
}

export default Activity