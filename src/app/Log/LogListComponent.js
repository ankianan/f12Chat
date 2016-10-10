let { Virtual } = window.interfaces;
class LogList extends Virtual.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.logs != this.props.logs;
    }
    render() {
        let { logs, connId } = this.props;

        let logList = logs.map(({ method, message }, index) => {
            let style;
            let className = "message " + method;
            return <span key={index} className={className}>{message}</span>
        });
        return <div className="messageList">{logList}</div>;
    }
}
export default LogList;
