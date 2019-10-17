import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './app.css';
import {getUserInitials} from '../utils/string'

const UsersList = ({users, onDeleteUser}) => {
    return (
        <ListGroup>
            {users.sort((a,b) => {
                if(a.firstName > b.firstName) {
                    return 1;
                } else if(a.firstName < b.firstName) {
                    return -1;
                } else if (a.lastName > b.lastName) {
                    return 1;
                } else if (a.lastName < b.lastName) {
                    return -1;
                } else {
                    return 0;
                }
            }).map((user) => {
                return (
                    <ListGroupItem key={user.id}>
                        <section style={{display:'flex'}}>
                            <div className={'avatar'}>{getUserInitials(user.firstName,user.lastName)}</div>
                            <div style={{flexGrow: 1, margin: 'auto 0'}} >
                                {user.firstName} {user.lastName}
                            </div>
                            <div>
                                <Button outline color='danger' onClick={()=>onDeleteUser(user.id)}>
                                    Delete
                                </Button>
                            </div>
                        </section>
                    </ListGroupItem>

                )
            })}
        </ListGroup>
    )
}

export default UsersList