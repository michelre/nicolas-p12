import { useParams } from 'react-router-dom'
import './dashboard.css'
import { useEffect, useState } from 'react'
import API from '../../Api'
import Activity from '../../components/activity/Activity'
import AverageSession from '../../components/average-session/AverageSession'
import Performance from '../../components/performance/Performance'
import Score from '../../components/score/Score'
import Calories from '../../components/calories/Calories'


const Dashboard = () => {
    const params = useParams()
    const [userData, setUserData] = useState()
    const [activity, setActivity] = useState()
    const [averageSession, setAverageSession] = useState()
    const [performance, setPerformance] = useState()

    useEffect(() => {

        (async () => {
            const api = new API()
            setUserData(await api.getUser(parseInt(params.id)))
            setActivity(await api.getActivity(parseInt(params.id)))
            setAverageSession(await api.getAverageSessions(parseInt(params.id)))
            setPerformance(await api.getPerformance(parseInt(params.id)))
        })()                
    }, [])


    return userData && activity && averageSession && performance && <div>
        Bonjour {userData.data.userInfos.firstName}
        <Activity data={activity.data}/>
        <AverageSession data={averageSession.data}/>
        <Performance data={performance.data} />
        <Score data={userData.data}/>
        <Calories data={userData.data} />
    </div>
}

export default Dashboard