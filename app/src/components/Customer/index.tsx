import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import ReadonlyRating from '../ReadonlyRating';
import styles from './style.module.scss';

interface CustomerProps {
  fullName: string;
  rate: number;
  date: string;
  imageSrc: string;
}

function Customer({fullName, rate, date, imageSrc}: CustomerProps):JSX.Element {
    return (
      <Card color="white" shadow={true} className={styles.cardContainer}>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className={styles.cardContainer__CardHeader}
        >
          <Avatar
            size="lg"
            variant="circular"
            src={imageSrc}
            alt="avatar"
          />
          <div className={styles.containerUserStat}>
            <div>
              <Typography variant="h5" color="blue-gray" className={styles.Typography}>
                {fullName}
              </Typography>
              <ReadonlyRating rate={rate} />
            </div>
            <Typography color="blue-gray" className={styles.Typography}>{date}</Typography>
          </div>
        </CardHeader>
        <CardBody className={styles.cardContainer__CardBody}>
          <Typography className={styles.Typography}>
            &quot;I'm incredibly impressed with the food delivery service. The food arrived promptly, was delicious, and the delivery person was friendly and professional. Highly recommended!&quot;
          </Typography>
        </CardBody>
      </Card>
    );
}

export default Customer;