
export async function authorization (username: string, password: string): Promise<boolean> {
        if (username === "wichy" && password === "123456"){
            return true
        }
    return false
}