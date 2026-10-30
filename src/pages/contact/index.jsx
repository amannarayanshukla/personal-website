import { useState } from 'react';
import { ContactForm } from '@components/feature/ContactForm/ContactForm.jsx';
import {Button} from "@components/common/Button/Button.js";
import {Mail, Linkedin} from "lucide-react";
import { personalData } from '@data/personal';

export const ContactPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openLinkedIn = () => {
        window.open(personalData.linkedin, '_blank', 'noopener,noreferrer');
    };

    return(
        <>
            <div className="pt-40 pb-20 max-w-2xl mx-auto text-center px-6">
                <h1 className="text-4xl font-black text-zinc-900 uppercase mb-6">Initiate Contact</h1>
                <p className="text-zinc-600 text-lg mb-12 font-mono">
                    Open to backend & systems engineering roles.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Button className="w-full sm:w-auto h-12 text-base"
                            onClick={() => setIsModalOpen(true)}
                    >
                        <Mail className="mr-2 w-5 h-5"/> EMAIL ME
                    </Button>
                    <Button variant="outline"
                            className="w-full sm:w-auto h-12 text-base"
                            onClick={openLinkedIn}
                    >
                        <Linkedin className="mr-2 w-5 h-5"/> LINKEDIN
                    </Button>
                </div>
            </div>
            {isModalOpen && <ContactForm onClose={() => setIsModalOpen(false)} />}
        </>
    );
}

export default ContactPage;
