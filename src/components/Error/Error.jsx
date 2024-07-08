import errorImage from "../../images/68968d16f36dadb8a10e52b40e6f98c6.png";
import css from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <img className={css.image} src={errorImage} alt="error" />
    </div>
  );
};

export default Error;
