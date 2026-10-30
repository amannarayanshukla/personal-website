import { personalData } from '@data/personal.js';

export const Navbar = ({ activePage, setPage }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'resume', label: 'Resume' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
    ];

    const nameParts = personalData.name.split(' ');
    const initials = `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`.toUpperCase();

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b-2 border-zinc-900">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Monogram */}
                <button onClick={() => setPage('home')} className="flex items-center group">
                    <div className="w-8 h-8 bg-zinc-900 flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                        <span className="font-mono font-bold text-white">{initials}</span>
                    </div>
                </button>

                {/* Nav Links */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => setPage(item.id)}
                            className={`
                text-sm font-mono font-bold uppercase tracking-wide transition-colors
                ${activePage === item.id ? 'text-orange-600 underline underline-offset-4 decoration-2' : 'text-zinc-500 hover:text-zinc-900'}
              `}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-4">
                    <div className="hidden sm:flex items-center space-x-2 text-xs font-mono font-bold px-3 py-1 bg-green-100 text-green-700 border border-green-700">
                        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                        <span>OPEN TO WORK</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};
