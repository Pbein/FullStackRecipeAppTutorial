const RecipeModal = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>RECIPE TITLE</h2>
            <span className="close-button">&times;</span>
          </div>
        </div>
        <p>RECIPE SUMMARY</p>
      </div>
    </>
  );
};

export default RecipeModal;