import {FC, PropsWithChildren} from "react";

const DarkLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div style={{
            backgroundColor: '#31087B',
            borderRadius: '5px',
            padding: '10px'
        }}>
            <h3>Dark-Layout</h3>
            <div>
                {children}
            </div>
        </div>
    );
};

export default DarkLayout;