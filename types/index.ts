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