import "../../assets/styles/buttonStyle.css";

interface IProps {
  children: React.ReactNode;
  scrollToId?: string; // Nova prop opcional para o ID da seção de destino
}

const ButtonStyle = ({ children, scrollToId }: IProps) => {
  const handleClick = () => {
    if (scrollToId) {
      const target = document.getElementById(scrollToId);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className="btn-container" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonStyle;



