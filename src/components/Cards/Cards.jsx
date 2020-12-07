import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// import CountUp from 'react-countup';
// import cx from 'classnames';

// import styles from './Cards.module.css';

// const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
//     if(!confirmed){
//         return 'Loading...';
//     }

    
//     return (
//         <div className={styles.container}>
//         <Grid container spacing={3} justify="center">

//             <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.infected)}>
//                 <CardContent>
//                     <Typography color="textSecondary" gutterBottom>Infected</Typography>
//                     <Typography variant="h5">
//                         <CountUp
//                             start={0}
//                             end={confirmed.value}
//                             duration={2.75}
//                             separator=","
//                         />
//                     </Typography>
//                     <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                     <Typography variant="body2">Number of active cases of COVID-19</Typography>
//                 </CardContent>
//             </Grid>

//             <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.recovered)}>
//                 <CardContent>
//                     <Typography color="textSecondary" gutterBottom>Recovered</Typography>
//                     <Typography variant="h5">
//                         <CountUp
//                             start={0}
//                             end={recovered.value}
//                             duration={2.75}
//                             separator=","
//                         />
//                     </Typography>
//                     <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
//                     <Typography variant="body2">Number of Recoveries from COVID-19</Typography>
//                 </CardContent>
//             </Grid>

//             <Grid item component={Card} xs={12} md={3} className={cx(styles.Card, styles.deaths)}>
//                 <CardContent>
//                     <Typography color="textSecondary" gutterBottom>Deaths</Typography>
//                     <Typography variant="h5">
//                         <CountUp
//                             start={0}
//                             end={deaths.value}
//                             duration={2.75}
//                             separator=","
//                         />
//                     </Typography>
//                     <Typography colr="textSecondary">REAL DATA</Typography>
//                     <Typography variant="body2">Number of Deaths caused by COVID-19</Typography>
//                 </CardContent>
//             </Grid>
//         </Grid>
            
//         </div>
//     )
// }

// export default Cards;