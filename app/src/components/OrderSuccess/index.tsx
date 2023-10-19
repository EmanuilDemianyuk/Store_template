import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import styles from './style.module.scss';
 
function OrderSuccess():JSX.Element {
  const [message, setMessage] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(false);
      window.location.replace('http://localhost:3000/');
    }, 3000);
  
    return () => clearTimeout(timer);
  }, [])
  
  return (
    <>
    {message && (
      <div className={styles.OrderSuccess}>
         <Card 
         className={styles.OrderSuccess__Card}>
          <CardBody className={styles.OrderSuccess__CardBody}>
            <div className={styles.OrderSuccess__iconCon}>
              <i className="fa-solid fa-circle-check fa-beat fa-2xl" style={{color: "#068c52"}}></i>
            </div>
            <p>order successfully sent</p>
          </CardBody>
        </Card>
      </div>
    )}
    </>
  );
}

export default OrderSuccess;