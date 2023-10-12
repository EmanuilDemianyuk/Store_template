import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import styles from './style.module.scss';
   
export function DefaultTimeline():JSX.Element {
  return (
    <div className={styles.DefaultTimeline}>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className={styles.DefaultTimeline__TimelineHeader}>
            <TimelineIcon className={styles.DefaultTimeline__TimelineIcon} />
            <Typography 
            variant="h6" 
            className={styles.DefaultTimeline__Title}>
              Premium Ingredients:
            </Typography>
          </TimelineHeader>
          <TimelineBody className={styles.DefaultTimeline__TimelineBody}>
            <Typography 
            variant="small" 
            className={styles.DefaultTimeline__Text}>
              We start with the finest, carefully selected ingredients, ensuring top-notch quality and flavor.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className={styles.DefaultTimeline__TimelineHeader}>
            <TimelineIcon className={styles.DefaultTimeline__TimelineIcon} />
            <Typography 
            variant="h6" 
            className={styles.DefaultTimeline__Title}>
              Meticulous Preparation:
            </Typography>
          </TimelineHeader>
          <TimelineBody className={styles.DefaultTimeline__TimelineBody}>
            <Typography 
            variant="small" 
            className={styles.DefaultTimeline__Text}>
              Our chefs follow precise techniques and procedures to create each dish, guaranteeing consistency and excellence in taste.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader className={styles.DefaultTimeline__TimelineHeader}>
            <TimelineIcon className={styles.DefaultTimeline__TimelineIcon} />
            <Typography 
            variant="h6" 
            className={styles.DefaultTimeline__Title}>
              Crafted Perfection:
            </Typography>
          </TimelineHeader>
          <TimelineBody className={styles.DefaultTimeline__TimelineBody} >
            <Typography 
            variant="small" 
            className={styles.DefaultTimeline__Text}>
              Every plate undergoes rigorous quality checks and finishing touches before it reaches your table, delivering a culinary experience that's second to none.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}