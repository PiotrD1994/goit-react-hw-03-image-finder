import{Oval} from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
    return (
        <div>
        <Oval
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="loading-indicator"
        strokeWidth="3"
        secondaryColor="#98a3e0"
      /> 
        </div>
    )
}
export default Loader;