import { useCallback, useState } from "react";

function useTimer(audio) {

    const [currentTime, setCurrentTime] = useState(audio.currentTime);

    const timer = useCallback(() => {
        setTimeout(() => {
            if (!audio.paused) {
                setCurrentTime((prev) => {
                    if (prev >= Math.floor(audio.duration)) return 0;
                    return Number(prev) + 1;
                });
                return timer();
            }
        }, 1000);
    }, []);

    return { currentTime, setCurrentTime, timer };
}

export default useTimer;