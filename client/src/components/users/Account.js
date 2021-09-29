import { UserConsumer } from '../../providers/UserProvider';
import Moment from 'react-moment';

const Account = () => (
  <UserConsumer>
    { value => (
      <>  
        <h1>{value.username}</h1>
        <p>
          Membership Level {value.membership}
        </p>
        <p>
          Date Joined: <Moment format="MM/DD/YYYY">{value.created_at}</Moment>
        </p>
      </>
    )}
  </UserConsumer>
)

export default Account;