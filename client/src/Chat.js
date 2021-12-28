import React from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import { useChatMessages } from './hooks'

const Chat = ({ user }) => {
  // Method 1
  // const [ messages, setMessages ] = useState([])
  // useQuery(messagesQuery, {
  //   onCompleted: (data) => setMessages(data.messages)
  // })
  // useSubscription(messageAddedSubscription, {
  //   onSubscriptionData: ({ subscriptionData}) => {
  //     setMessages(messages.concat(subscriptionData.data.messageAdded))
  //   }
  // })
  // const [addMessage] = useMutation(addMessageMutation)
  const { messages, addMessage } = useChatMessages()

  // const handleSend = async(text) => {
  //   await addMessage(text)
  // }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Chatting as {user}</h1>
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={addMessage} />
      </div>
    </section>
  );
}

export default Chat;
