import { Title } from '../shared/Title';

import styles from './Details.module.scss';
import { Grid } from '../shared/Grid';
import { Eyebrow } from '../shared/Eyebrow';

interface Ingredient {
  original: string;
}

export interface RecipeDetailsProps {
  title: string;
  image: string;
  sourceName: string;
  dishTypes: string[];
  spoonacularSourceUrl: string;
  readyInMinutes: number;
  servings: number;
  extendedIngredients: Ingredient[];
  creditsText: string;
  spoonacularScore: number;
  pricePerServing: number;
  summary: string;
}

export const RecipeDetails = ({
  title,
  image,
  sourceName,
  dishTypes,
  spoonacularSourceUrl,
  readyInMinutes,
  servings,
  extendedIngredients,
  creditsText,
  spoonacularScore,
  pricePerServing,
  summary,
}: RecipeDetailsProps) => {
  if (!title) {
    return <h2>Not Found Sorry, there is nothing at this URL.</h2>;
  }

  return (
    <div className={styles.details}>
      <Title className={styles.title}>{title}</Title>
      <Grid>
        <Grid.Col sm={12} md={12} lg={7}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={image} alt={title} />
          </div>
          <span className={styles.imageCredit}>{creditsText}</span>
        </Grid.Col>
        <Grid.Col sm={12} md={12} lg={5}>
          <div className={styles.info}>
            <div className={styles.name}>Name: {sourceName}</div>
            <div className={styles.tags}>
              Tags:{' '}
              {dishTypes?.map((dishType: string) => (
                <Eyebrow label={dishType} variant="outlined" />
              ))}
            </div>
            <div className={styles.meta}>
              <p>Cook Time: {readyInMinutes} min</p>
              <p>Serving: {servings} servings</p>
              <a href={spoonacularSourceUrl} rel="noopener noreferrer" target="_black">
                Spoonacular Score: {(spoonacularScore || 0).toFixed(2)}%
              </a>
              <p>Price Per Serving: {(pricePerServing || 0).toFixed(2)}%</p>
            </div>
          </div>
        </Grid.Col>
      </Grid>
      <div className={styles.summary}>
        <Title as="h3" variant="secondary" className={styles.summaryTitle}>
          Summary:
        </Title>
        <div className={styles.summaryText} dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div className={styles.ingredients}>
        <Title as="h3" variant="secondary" className={styles.ingredientTitle}>
          Ingredients:
        </Title>
        <ul className={styles.ingredientsLists}>
          {extendedIngredients?.map((ingredient: Ingredient) => (
            <li className={styles.ingredientsList}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
