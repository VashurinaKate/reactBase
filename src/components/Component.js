import React, { useState, useCallback, useMemo, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'
import Badge from 'react-bootstrap/Badge'

export const Component = () => {
    const [messageList, setMessageList] = useState([]);
    const [nameValue, setNameValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
            const robotMess = { message: 'hello', author: 'Robot' };
            setTimeout(() => setMessageList([...messageList, robotMess]), 1500)
        }
    }, [messageList]);

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessageValue(e.target.value);
    }
    
    const handleClick = () => {
        const newUserMessage = { message: messageValue, author: nameValue };
        setMessageList([...messageList, newUserMessage]);
    }
    
    return (
    <>
    <h1>Send us something!</h1>
        { messageList.map((item) => (
            <Alert variant='primary' style={{ width: '700px', margin: '30px auto', position: 'relative' }}>
                <Badge bg='primary' style={{ position: "absolute", left: '10px' }}>{item.author}</Badge>
                {item.message}
            </Alert>
        ))}
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    name="userName"
                    onChange={handleNameChange}
                    value={nameValue}
                    style={{ width: '700px', margin: '0 auto' }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message:</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Your message here"
                    rows={3}
                    name="userMessage"
                    onChange={handleMessageChange}
                    value={messageValue}
                    style={{ height: '100px', width: '700px', margin: '0 auto' }}/>
            </Form.Group>
        </Form>
        <Button
        variant="dark"
        type="submit"
        onClick={handleClick}
        >Send message</Button>{' '}
    </>
    );
};
