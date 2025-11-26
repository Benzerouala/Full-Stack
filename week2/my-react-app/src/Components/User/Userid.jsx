import { userss } from './userss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Userid = () => {
  const {id}=useParams()
  const user =  userss.find((item) =>item.id === parseInt(id))
  const navigate = useNavigate()
  return (
    <div className='card' style={{width:"18rem"}}>
    <div className='card-body'>
        <h5 className='card-title'>{user.nom}</h5>
        <p className='card-text'>{user.message}</p>
    </div>
      <button onClick={()=>navigate('/users')} className='btn btn-primary'>Reour</button>
    </div>
  )
}

export default Userid
