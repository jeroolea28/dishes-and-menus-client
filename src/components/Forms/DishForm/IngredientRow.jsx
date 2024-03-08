import React from 'react'
import Button from 'react-bootstrap/Button'

function IngredientRow({ ingredient, index, handleIngredientRemove }) {
    return (
        <div key={index} className="mb-2">
            <span>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</span>
            <Button
                variant="danger"
                size="sm"
                className="ms-2"
                onClick={() => handleIngredientRemove(index)}
            >
                Remove
            </Button>
        </div>
    )
}

export default IngredientRow
