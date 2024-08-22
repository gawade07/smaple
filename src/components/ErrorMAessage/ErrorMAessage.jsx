import { TbMarquee } from "react-icons/tb";

const ErrorMAessage = ({ itemArry }) => {
  return itemArry.length === 0 && <marquee direction="right"  className="errorMassage">Create ToDo List...</marquee>;
};

export default ErrorMAessage;
