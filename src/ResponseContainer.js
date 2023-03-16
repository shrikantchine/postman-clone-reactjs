const ResponseContainer = props => {
    return (
        <div className="mt-5">
            <h3>Response</h3>
            <div className="d-flex my-2">
                <div className="me-3">
                    Status: <span>{props.status}</span>
                </div>
                <div className="me-3">
                    Time: <span>{props.time}</span>
                </div>
                <div className="me-3">
                    Size: <span>{props.size}</span>
                </div>
            </div>
        </div>
    )
}

export default ResponseContainer;