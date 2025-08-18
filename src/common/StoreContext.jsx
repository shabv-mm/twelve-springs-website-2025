import React, { useState, createContext } from "react"
import Toast from "./Toast"
const StoreContext = createContext()
export default StoreContext
export function StoreContextProvider(props) {
    const isAuth = localStorage.getItem("shortLivedToken") ? true : false
    const [auth, setAuth] = useState({
        shortLivedToken: isAuth ? localStorage.getItem("shortLivedToken") : null,
        data: isAuth ? JSON.parse(localStorage.getItem("data") || "null") : null,
    })
    const [logoutDialog, setLogoutDialog] = useState({ open: false })
    const [loading, setLoading] = useState(false)
    const [toast, setToast] = useState({ open: false, message: "", type: "error" })
    const openToast = (typ, msg) => setToast({ open: true, type: typ, message: msg })
    const handleSetAuth = (data) => {
        localStorage.setItem("shortLivedToken", `Bearer ${data.shortLivedToken}`)
        localStorage.setItem("data", JSON.stringify(data.data))
        setAuth({ shortLivedToken: `Bearer ${data.shortLivedToken}`, data: data.data })
    }
    const handleLogout = () => {
        localStorage.clear()
        setAuth({ shortLivedToken: null, data: null })
    }
    return (
        <StoreContext.Provider
            value={{
                auth: auth,
                handleSetAuth: handleSetAuth,
                openToast: openToast,
                handleLogout: handleLogout,
            }}>
            {props.children}
            <Toast {...toast} onClose={() => setToast((prev) => ({ ...prev, open: false }))} />
        </StoreContext.Provider>
    )
}