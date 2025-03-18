"use client"
import React, { useState, FormEvent } from 'react';

export default function ChatForm({ onSendMessage }: {
    onSendMessage: (message: string) => void
}) {

    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (message.trim() !== '') {
            onSendMessage(message);
            setMessage("")
        };
        console.log("Submitted");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex gap-2 mt-4 ">
                <input type="text"
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 px-4 border-2 py-2 rounded-lg focus:outline-none"
                    placeholder="Type your massage here..." />
                <button
                    type="submit"
                    className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                    <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                    </svg>
                    <span className="sr-only">Send message</span>
                </button>

            </form>
        </>
    )
}
