"use client"

import ChatForm from '@/components/ChatForm';
import Friends from '@/components/friends';
import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import ChatMessages from './ChatMessages';

const messagesArr = [
    {
        name: 'Jester', message: 'meow'
    },
    {
        name: 'Phoenix', message: 'meow'
    },
    {
        name: 'Iceman', message: 'meow meow meow meow meow meow'
    },
    {
        name: 'Stinger', message: 'meow meow meow meow meow meow meow meow meow'
    }, {
        name: 'Viper', message: 'meow'
    }, {
        name: 'Rooster', message: 'meow'
    }, {
        name: 'Hangman', message: 'meow'
    }
]

export default function Chat() {
    const [room, setRoom] = useState('');
    const [joined, setJoined] = useState(true);
    const [messages, setMessages] = useState<{ sender: string, message: string }[]>([]);
    const [UserName, setUserName] = useState<string>('');

    const handleSendMessage = (message: string) => {
        console.log(message);
    }

    return (
        <>
            <li className="p-3 h-3/12">
                <h2 className="custom-header custom-center">Friends Online <FaChevronDown /></h2>
                <Friends />
            </li>

            {!joined ? (<div className="flex flex-col items-center justify-center">sdlfkj</div>) :

                <li className="p-3 h-3/12">
                    <h2 className="custom-header custom-center">Online Chat<FaChevronDown /></h2>
                    <div className="h-[200px] overflow-y-auto p-4 mb-4 bg-gray-200 border2 rounded-lg">
                        {messages.map((msg, index) => <ChatMessages key={index}
                            sender={msg.sender}
                            message={msg.message}
                            isOwnMessage={msg.sender === UserName}
                        />)}
                    </div>
                    <ChatForm onSendMessage={handleSendMessage} />
                </li>}
        </>
    )
}
