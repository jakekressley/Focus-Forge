export interface PomodoroTypes {
    focusTime: number;
    shortBreak: number;
    longBreak: number;
    longBreakFrequency: number;
}

//Red -> Pink -> Green -> Blue -> Silver -> Gold
export interface UserDataTypes {
    _id: string;
    email: string;
    balance: number;
    isRed: boolean;
    isPink: boolean;
    isGreen: boolean;
    isBlue: boolean;
    isSilver: boolean;
    isGold: boolean;
    password?: string;
}

export interface TimerButtonTypes {
    label: string;
    onClick?: () => void;
    className?: string;
    size?: string;
}

export interface RankTypes {
    //color: string;
    bgColor: string;
}