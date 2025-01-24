import {Link} from 'react-router-dom'
import styles from '../style/CoffeePage.module.css';

const ErrorPage =()=>{
return (
 <div className={styles.container}>
<h1 className={styles.heading}>404 - Page Not Found</h1>
<p className={styles.message}>The page you're looking for doesn't exist</p>
<Link to='/' className={styles.link}>Go Back to Home</Link>
</div>
)

}
export default ErrorPage