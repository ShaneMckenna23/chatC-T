import { useState } from "react";
import axios from "axios"; // Make sure to install axios if not already done

interface Message {
    id: number;
    role: "User" | "Chip" | "Terra";
    content: string;
}

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let id = 0;

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { id: id++, role: "User", content: input };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await axios.post("/chat", { message: input });
            console.log("response", response);
            const botMessage: Message = { id: id++, role: "Chip", content: response.data.message.content };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (error) {
            const errorMessage: Message = { id: id++, role: "Chip", content: "Sorry, can't talk right now, I'm dancing" };
            setMessages(prevMessages => [...prevMessages, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };
        
    return { messages, isLoading, input, setInput, handleSubmit };
}