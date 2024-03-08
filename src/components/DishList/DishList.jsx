import { useEffect, useState } from 'react'
import DishCard from '../DishCard/DishCard'
import dishServices from '../../services/dish.services'
import { Col, Row } from 'react-bootstrap'

function DishList() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dishServices
        .getAllDishes([])
        .then(response => {
        setDishes(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching dishes:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className='DishList'>
      <h2>Dishes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='dish-cards'>
          <Row>
          {dishes.map(dish => (
            <Col md={{span: 4}}>
              <DishCard
                key={dish._id}
                name={dish.name}
                description={dish.description}
                image={dish.image}
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
