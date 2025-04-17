import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Take a picture using the button below and then view all pictures taken in the gallery tab</p>
    </div>
  );
};

export default ExploreContainer;
