import styles from './Loading.module.scss';
import { Grid } from '../shared/Grid';
import { Skeleton } from '../shared/Skeleton';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <Grid>
        <Grid.Col sm={12} md={12} lg={7}>
          <Skeleton />
        </Grid.Col>
        <Grid.Col sm={12} md={12} lg={5}>
          {Array(4)
            .fill(1)
            .map((_, index) => (
              <Grid.Col key={index} sm={12} md={6} lg={4}>
                <Skeleton
                  style={{
                    paddingTop: 'calc(1 / 10 * 100%)',
                    marginBottom: '20px',
                  }}
                />
              </Grid.Col>
            ))}
        </Grid.Col>
      </Grid>
      {Array(2)
        .fill(1)
        .map((_, index) => (
          <Grid.Col key={index} sm={12} md={6} lg={4}>
            <Skeleton
              style={{
                paddingTop: 'calc(1 / 10 * 100%)',
                marginBlock: '20px',
                maxWidth: '768px',
              }}
            />
          </Grid.Col>
        ))}
    </div>
  );
};
