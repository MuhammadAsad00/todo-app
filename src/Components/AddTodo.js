function AddToodo() {
  return (
    <div className="container">
      <div className="row custum-row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2 abtn">
          <button type="button" className="btn btn-success custum-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToodo;
