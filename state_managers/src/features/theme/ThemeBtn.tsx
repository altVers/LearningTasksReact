import Switch from '@mui/material/Switch';
import type { FC } from 'react';

interface IThemeRtn {
    handleThemeChange: (e: boolean) => void
}

export const ThemeBtn: FC<IThemeRtn> = ({handleThemeChange}) => {


    return (
        <>
            <span>Theme change →<Switch onChange={(e) => handleThemeChange(e.target.checked)} color="primary" /></span>
        </>
    )
}