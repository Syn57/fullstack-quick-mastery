import { DomainWrapper } from "../domain/model/DomainWrapper.js";

export function safeErrorMapper<T>(e: any): DomainWrapper<T> {
    if (e instanceof Error) {
        return { type: "error", message: e.message };
    } else {
        return { type: "error", message: String(e) };
    }
}
