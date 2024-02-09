import { useRouter } from "next/router";

function LogoutButton() {
    const router = useRouter();

    const navigateToLogout = () => {
        router.push("/logout");
    }

    return (
        <>
            <button onClick={navigateToLogout}>Log out?</button>
        </>
    )
}

export default LogoutButton;