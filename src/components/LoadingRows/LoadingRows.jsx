import LoadingRow from '../LoadingRow/LoadingRow';

const LoadingRows = ({ rowsToDisplay }) => {

    let loadingRows = [];

    for (let i = 0; i < rowsToDisplay; i++) {
        loadingRows.push(<LoadingRow key={i} />);
    }
    
    return (
        <div className="list-items" data-testid="loading">
            {loadingRows}
        </div>
  );
};

export default LoadingRows;