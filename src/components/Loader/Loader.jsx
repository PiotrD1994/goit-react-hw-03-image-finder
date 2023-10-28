import{Oval} from 'react-loader-spinner'


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