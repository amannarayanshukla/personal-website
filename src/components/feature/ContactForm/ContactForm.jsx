import { useState } from 'react';
import { X } from 'lucide-react';
import Button from '@components/common/Button/Button.js';

export const ContactForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would handle the form submission here,
        // likely by sending the data to a backend API.
        console.log("Form submitted:", { name, email, message });
        alert("Message sent! (Check the console)");
        onClose(); // Close modal on submission
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg relative m-4"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-dark transition-colors"
                >
                    <X size={24} />
                </button>
                <h2 className="text-2xl font-bold uppercase text-dark mb-2">Contact Me</h2>
                <p className="text-light-foreground font-mono text-sm mb-6">
                    Your message will be sent directly to my inbox.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase font-bold text-light-foreground mb-1">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 border border-light-border rounded-md bg-light focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase font-bold text-light-foreground mb-1">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-2 border border-light-border rounded-md bg-light focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xs font-mono uppercase font-bold text-light-foreground mb-1">Message</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" required className="w-full px-4 py-2 border border-light-border rounded-md bg-light focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    </div>
                    <div className="flex justify-end gap-4 pt-4">
                        <Button type="button" variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
