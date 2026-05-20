import { Rnd } from "react-rnd";

type AppWindowProps = {
    width?: number;
    height?: number;
    zIndex?: number;
    onClick?: () => void;
    children?: React.ReactNode;
    onClose?: () => void;
};

function AppWindow({
    children,
    onClick,
    onClose,
    zIndex = 0,
    width = 500,
    height = 300,
}: AppWindowProps) {

    return (
        <Rnd
            default={{
                x: 100,
                y: 100,
                width,
                height,
            }}
            minWidth={250}
            minHeight={150}
            bounds="window"
            dragHandleClassName="app-header"
            style={{
                zIndex,
            }}
        >
            <div
                className="app-window h-full flex flex-col"
                onMouseDown={(e) => {
                    e.stopPropagation();
                    onClick?.();
                }}
            >

                <div className="app-header">

                    <button
                        onClick={onClose}
                        className="app-window-button close-button three-button"
                    />

                    <button className="app-window-button min-button three-button" />

                    <button className="app-window-button max-button three-button" />
                </div>

                <div className="flex-1 overflow-auto">
                    {children}
                </div>

            </div>
        </Rnd>
    );
}

export default AppWindow;