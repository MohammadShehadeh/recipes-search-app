import { Card } from '../shared/Card';
import { Grid } from '../shared/Grid';
import { Loading } from './';
import { RecipeData } from './Search';

export const Results = ({
  recipes,
  isLoading,
}: {
  recipes?: RecipeData[];
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return <Loading />;
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
