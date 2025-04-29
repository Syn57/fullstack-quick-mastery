export type DomainWrapper<T> = 
| { type: "success"; value: T }
| { type: "error"; message?: string }