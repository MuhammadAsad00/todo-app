const ButtonsContainer = () => {
    const buttonsList = [
        'c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.', 
    ]
  return (
    <>
        <div className="button-container">
            {buttonsList.map(buttonsList => <button className="button">{buttonsList}</button>)}
        </div>
    </>
 
  );
};

export default ButtonsContainer;
