import { Card } from '../shared/Card';
import { Grid } from '../shared/Grid';
import { Loading } from './';
import { RecipeData } from './Search';

export const Results = ({
  recipes,
  isLoading,
}: {
  recipes?: RecipeData[] | null | undefined;
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return <Loading />;
  }

  if (recipes === undefined) {
    return <p>Not Found Sorry, something went wrong</p>;
  }

  if (recipes?.length === 0) {
    return <p>No Results Found</p>;
  }

  return (
    <Grid>
      {recipes?.map((recipe: RecipeData) => (
        <Grid.Col key={recipe.id} sm={12} md={6} lg={4}>
          <Card id={recipe.id} image={recipe.image} title={recipe.title} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
