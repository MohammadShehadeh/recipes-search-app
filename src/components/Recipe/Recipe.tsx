import { Link, useParams } from 'react-router-dom';
import { Container } from '../shared/Container';
import { useEffect, useState } from 'react';
import { safeFetch, getRecipeInfoUrl } from '../../utils';
import { RecipeDetails, RecipeDetailsProps } from './Details';
import { Loading } from './Loading';
import { BackIcon } from '../shared/Icons';

import styles from './Recipe.module.scss';

export const Recipe = () => {
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetailsProps | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const searchRecipesHandler = async () => {
      setIsLoading(true);

      const response = await safeFetch<RecipeDetailsProps | { error: true }>(
        getRecipeInfoUrl(id!)
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
            <BackIcon />
            Back to search
          </Link>
          {!isLoading && <RecipeDetails {...recipeDetails!} />}

          {isLoading && <Loading />}
        </Container>
      </div>
    </div>
  );
};
