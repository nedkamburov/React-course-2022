import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState();

  const retrieveData = async () => {
    const response = await fetch('https://http-react-demo-f38ee-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
    setIsLoading(true);

    if (!response.ok) {
      throw new Error('Something went wrong.');
    }

    const data = await response.json();
    setMealsList(Object.entries(data).map((meal) => (
      < MealItem
        key={meal[0]}
        id={meal[0]}
        name={meal[1].name}
        description={meal[1].description}
        price={meal[1].price}
      />
    )));

    setHasError();
    setIsLoading(false);
  }

  useEffect(() => {
    retrieveData().catch(error => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p>Loading meals...</p>}
        {!isLoading && hasError && <p>{hasError}</p>}
        {!isLoading && !hasError && mealsList.length === 0 && <p>No meals retrieved.</p>}
        {!isLoading && !hasError && mealsList.length > 0 && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
