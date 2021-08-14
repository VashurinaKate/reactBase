import React, { useCallback } from "react";
import { Message } from "../Message";

export const MessageList = ({ messages, abbreviatedName }) => {
    const renderMessage = useCallback(
        (mess) => (
            <Message
                text={mess.text}
                author={mess.author}
                abbreviatedName = {abbreviatedName}
                key={mess.id}
            />
        ), []
    );
    return messages.map(renderMessage);
}
