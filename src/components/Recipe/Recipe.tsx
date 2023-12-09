import { Link, useParams } from 'react-router-dom';
import { Container } from '../shared/Container';
import styles from './Recipe.module.scss';
import { useEffect, useState } from 'react';
import { fetchRequest } from '../../utils';
import { API_KEY, FOOD_API } from '../../constants';
import { RecipeDetails, RecipeDetailsProps } from './Details';
import { Loading } from './Loading';

export const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetailsProps | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const searchRecipesHandler = async () => {
      setIsLoading(true);

      const response = await fetchRequest<RecipeDetailsProps | { error: true }>(
        `${FOOD_API}/recipes/${id}/information?apiKey=${API_KEY}`
      );

      if (!('error' in response)) {
        setRecipeDetails(response);
      }

      setIsLoading(false);
    };

    searchRecipesHandler();
  }, [id]);

  return (
    <div className={styles.recipe}>
      <div className={styles.wrapper}>
        <Container>
          <Link to={{ pathname: '/' }} className={styles.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              version="1.1"
              viewBox="0 0 26.676 26.676"
              xmlSpace="preserve"
            >
              <path d="M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59   c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815   C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029   c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562   C26.18,21.891,26.141,21.891,26.105,21.891z" />
            </svg>
            Back to search
          </Link>
          {!isLoading && <RecipeDetails {...recipeDetails!} />}

          {isLoading && <Loading />}
        </Container>
      </div>
    </div>
  );
};
