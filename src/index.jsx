import { useState, useEffect } from 'react';

const Countdown = () => {
    const HedefZaman = new Date('2025-01-05T14:30:30');
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const suan = new Date();
            const difference = HedefZaman - suan;

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const yil = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
                const ay = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
                const gun = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
                const saat = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const dakika = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const saniye = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ yil, ay, gun, saat, dakika, saniye });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-white">GİTMEYE NE KADAR KALDI?</h1>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-2xl font-semibold">
                    <span className="block text-gray-400">Yıl</span>
                    <span className="text-green-600">{timeLeft.yil || 0}</span>
                </div>
                <div className="text-xl font-semibold">
                    <span className="block text-gray-400">Ay</span>
                    <span className="text-green-600">{timeLeft.ay || 0}</span>
                </div>
                <div className="text-xl font-semibold">
                    <span className="block text-gray-400">Gün</span>
                    <span className={` ${
                        timeLeft.gun === 0 ? "text-green-600" : "text-red-600"
                    }`}>{timeLeft.gun || 0}</span>
                </div>
                <div className="text-xl font-semibold">
                    <span className="block text-gray-400">Saat</span>
                    <span className={` ${
                        timeLeft.saat === 0 ? "text-green-600" : "text-red-600"
                    }`}>{timeLeft.saat || 0}</span>
                </div>
                <div className="text-xl font-semibold">
                    <span className="block text-gray-400">Dakika</span>
                    <span className={` ${
                        timeLeft.dakika === 0 ? "text-green-600" : "text-red-600"
                    }`}>{timeLeft.dakika || 0}</span>
                </div>
                <div className="text-xl font-semibold">
                    <span className="block text-gray-400">Saniye</span>
                    <span className={` ${
                        timeLeft.saniye === 0 ? "text-green-600" : "text-red-600"
                    }`}>{timeLeft.saniye || 0}</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
