import { useCallback, useState } from 'react';

import { Container } from '../shared/Container';
import { Grid } from '../shared/Grid';
import { Title } from '../shared/Title';

import { Form, Results } from '.';

import { safeFetch, getSearchUrl } from '../../utils';

import styles from './Search.module.scss';

export type RecipeData = {
  image: string;
  id: number;
  title: string;
};

type RecipesData = {
  results: RecipeData[];
};

export const Search = () => {
  const [searchRecipes, setSearchRecipes] = useState<RecipeData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchRecipesHandler = useCallback(async (query: string) => {
    if (!query) {
      setSearchRecipes(null);
      return;
    }

    setIsLoading(true);

    const response = await safeFetch<RecipesData | { error: true }>(getSearchUrl(query));

    if (!('error' in response)) {
      setSearchRecipes(response.results);
    }

    setIsLoading(false);
  }, []);

  return (
    <section className={styles.search}>
      <Container>
        <Grid>
          <Grid.Col mdOrder={2} lg={8} md={12}>
            <span className={styles.results}>{searchRecipes?.length || 0} Results</span>
            <Title>Search Results</Title>
            <Results isLoading={isLoading} recipes={searchRecipes} />
          </Grid.Col>
          <Grid.Col mdOrder={1} lg={4} md={12}>
            <Form submitHandler={searchRecipesHandler} />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};
