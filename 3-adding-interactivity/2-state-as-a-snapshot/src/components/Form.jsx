import React, { useState } from "react";

const Form = () => {
    const [sendingTo, setSendingTo] = useState("Alice");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            alert(`Sent to: ${sendingTo}`);
            alert(`Message: ${message}`);
        }, 5000);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label>
                To:
                <select
                    value={sendingTo}
                    onChange={(e) => setSendingTo(e.target.value)}
                    className="ml-2 py-2 px-6 bg-slate-400 text-white font-semibold text-md rounded-md"
                >
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="30"
                rows="10"
                className="border-2 border-black py-2 px-4"
            />

            <button
                type="submit"
                className="py-2 px-12 bg-slate-500 text-white font-semibold text-xl rounded-md hover:bg-slate-400"
            >
                Send
            </button>
        </form>
    );
};

export default Form;
