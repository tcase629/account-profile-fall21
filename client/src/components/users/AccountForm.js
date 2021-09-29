import { useState, useEffect } from 'react';
import { Select } from 'react-materialize';
import M from 'materialize-css';
import { UserConsumer } from '../../providers/UserProvider';

const AccountForm = ({ id, username, membership, updateUser }) => {
  const [user, setUser] = useState({ username: "", membership: "" })

  useEffect( () => {
    if (id) {
      setUser({ username, membership })
    }
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    // update user 
    updateUser(id, user)
    setUser({ username: "", membership: "" })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value })}
          placeholder="Username"
        />
        <Select
          id="Select-31"
          name="membership"
          multiple={false}
          onChange={(e) => setUser({...user, membership: e.target.value})}
          options={{
            classes: '',
            dropdownOptions: {
              alignment: 'left',
              autoTrigger: true,
              closeOnClick: true,
              constrainWidth: true,
              coverTrigger: true,
              hover: false,
              inDuration: 150,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 250
            }
          }}
          value="Bronze"
        >
          { membershipOpts.map( m => 
            <option 
              value={m.value}
              onChange={(e) => setUser({...user, membership: e.target.value})}
            >
              {m.text}
            </option>
          )}
        </Select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze"},
  { key: "s", text: "Silver", value: "Silver"},
  { key: "g", text: "Gold", value: "Gold"},
  { key: "p", text: "Platinum", value: "Platinum"},
]

const ConnectedAccountForm = (props) => (
  <UserConsumer>
    { value => (
      <AccountForm {...props} {...value} />
    )}
  </UserConsumer>
)

export default ConnectedAccountForm;