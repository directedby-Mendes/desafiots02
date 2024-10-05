import {login} from '../services/login/login'
interface ICard {
  id: number,
  paragraph: string,
  details: string,
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return(
     <div>
       <h1>{id}</h1>
       <p>{paragraph}</p>
       <p>{details}</p>
     </div>
    
  )
}
