import { useState } from "react"

export const useHamburguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return {
        isOpen,
        handleMenu
    }
}