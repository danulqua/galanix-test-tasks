import './errorMessage.scss';

type Props = {
  text: string;
};

const ErrorMessage: React.FC<Props> = ({ text }) => {
  return <h2 className='error'>{text}</h2>;
};

export default ErrorMessage;
