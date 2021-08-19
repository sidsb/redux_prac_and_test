import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])

    const [show, setShow] = useState(false);
    console.log(show);
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <>
            <button onClick={(e) => { setShow(!show) }}>Click to show/hide</button>

            {show ?
                <div>
                    <h2>User List</h2>
                    <div>
                        {
                            userData &&
                            userData.users &&
                            userData.users.map(user => <p>{user.name}</p>)
                        }
                    </div>
                </div>
                : null}
        </>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (UserContainer);

