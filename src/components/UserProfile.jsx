import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './UserProfile.css';


const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setUser(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return(
    <Container className='container'>
    { user && (
        <Row className='row'>
            <Col>
                <img className="image" src={user.picture.large} alt="User" />
            </Col>
            <Col>
            <p className='full_name'>Full Name: {`${user.name.first} ${user.name.last}`}</p>
            <p className="gender">Gender: {user.gender}</p>
            <p className="phone">Phone Number: {user.phone}</p>
            </Col>
        </Row>
    )}
    </Container>
  );
}

export default UserProfile;