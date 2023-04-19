const Empty = () => {
    return (
        <div className="list-items" data-testid="empty">
            <div className="wrapper-message">
                <span className="icon-check" />
                <p className="title-message">You have no tasks</p>
                <p className="subtitle-message">Sit back and relax</p>
            </div>
        </div>
    );
};

export default Empty;