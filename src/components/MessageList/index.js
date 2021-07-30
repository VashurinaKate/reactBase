import { Message } from "../Message";

export const MessageList = ({ messageList }) => {
    return messageList.map((item) => (
        <Message message={item.message} author={item.author} key={item.id}/>
    ))
}
