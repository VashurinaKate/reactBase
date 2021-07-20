export const Message = (props) => {
    console.log(props.msg)
    return (
        <div className="Message">
            <p>Message: {props.msg} </p>
        </div>
    );
}

