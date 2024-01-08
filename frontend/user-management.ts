import { ObjectId } from "mongodb";

function generateuserId(provider: string, provideruserId: string) {
    return `${provider}_${provideruserId}`;
}