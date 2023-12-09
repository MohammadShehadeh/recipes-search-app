import { Skeleton } from '../shared/Skeleton';
import { Grid } from '../shared/Grid';

export const Loading = ({
  length = 4,
  ...restProps
}: {
  length?: number;
  style?: React.CSSProperties;
}) => {
  return (
    <Grid>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <Grid.Col key={index} sm={12} md={6} lg={4}>
            <Skeleton {...restProps} />
          </Grid.Col>
        ))}
    </Grid>
  );
};
