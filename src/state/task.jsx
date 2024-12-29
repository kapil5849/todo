import { atom } from "recoil";

export const todoState = atom({
    key: "todoState",
    default:["Hello, Add your first task!"]
})

export const inputState = atom({
    key: "inputState",
    default: ""
})
