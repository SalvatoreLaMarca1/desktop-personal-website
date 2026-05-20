import Chess from "./Chess";
import Email from "./Email";

export const apps = {
    chess: {
        id: "chess",
        title: "Chess",
        icon: "src/assets/app-icons/chess.jpg",
        width: 900,
        height: 900,
        minWidth:400,
        minHeight: 400,
        component: Chess,
    },

    email: {
        id: "email",
        title: "Email",
        icon: "src/assets/app-icons/email.jpg",
        width: 320,
        height: 500,
        minWidth: 320,
        minHeight: 500,
        component: Email,
    }
}

export type AppKey = keyof typeof apps;

// email: "src/assets/app-icons/email.jpg",
//         discord: "src/assets/app-icons/discord.png",
//         chess: "src/assets/app-icons/chess.jpg"