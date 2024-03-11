import { useContext, useEffect, useState } from 'react'
import DishCard from '../DishCard/DishCard'
import dishServices from '../../services/dish.services'
import { Col, Row } from 'react-bootstrap'
import { AuthContext } from '../../context/auth.context'

function DishList() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)
  const {user} = useContext(AuthContext)

  useEffect(() => {
    if (user) {
      dishServices
          .getAllDishes(user._id)
          .then(response => {
              setDishes(response.data);
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching dishes:', error);
              setLoading(false);
          });
    }
  }, [user])

  return (
    <div className='DishList'>
      <h2>Dishes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='dish-cards'>
          <Row>
          {dishes.map(dish => (
            <Col md={{span: 4}} key={dish._id}>
              <DishCard
                name={dish.name}
                description={dish.description}
                imageData={dish.imageData}
                price={dish.price}
              />
            </Col>
          ))}
          </Row>
        </div>
      )}
    </div>
  )
}

export default DishList
