import { useState } from "react";

interface Message {
    id: number;
    role: "User" | "Chip" | "Terra";
    content: string;
}

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const id = 0;   

    const handleSubmit = (e: Event) => {
        console.log("submitting", input);
        messages.push({ id, role: "User", content: input });
        setTimeout(() => {
            messages.push({ id, role: "Chip", content: "I'm sorry, I don't understand (WORK IN PROGRESS)" });
            setMessages([...messages]);
        }, 1000);
        setTimeout(() => {
            messages.push({ id, role: "Terra", content: "Chip never understands anything... " });
            setMessages([...messages]);
        }, 3000);
    };
        
    return { messages, isLoading: false, input, setInput, handleSubmit };
}