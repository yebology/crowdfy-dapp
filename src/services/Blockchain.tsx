export async function handleClickWallet() {
    if (sessionStorage.getItem("connectedAccount")) {
        disconnectWallet()
    }
    else {
        await connectWallet()
    }
}

export async function connectWallet() {
    
}

export function disconnectWallet() {
    sessionStorage.removeItem("connectedAccount")
}