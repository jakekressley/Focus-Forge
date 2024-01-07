import { getServerSession } from "next-auth";

import WhoAmIButton from "./WhoAmIButton";

export default async function ServerActionPage() {
    const profileInfo = async () => {
        "use server";
        const session = await getServerSession();
        return session?.user?.name || "Not logged in";
    };

    return (
        <div>
            <h1>Server Action</h1>
            <WhoAmIButton whoAmIAction={profileInfo} />
        </div>
    )
}