'use client'

import { $catalogMenuIsOpen } from "@/context/modals";
import { useLang } from "@/hooks/useLang";
import { useStore } from "effector-react";
import { useState } from "react";

const CatalogMenu = () => {
    const catalogMenuIsOpen = useStore($catalogMenuIsOpen)
    const [showClothList, setShowClothList] = useState(false)
    const [showAccesoriesList, setShowAccesoriesList] = useState(false)
    const [showSouveirsList, setShowSouveirsList] = useState(false)
    const [showOfficeList, setShowOfficeList] = useState(false)
    const { lang, translations } = useLang()

    const handleShowClothList = () => {
        setShowClothList(true)
        setShowAccesoriesList(false)
        setShowSouveirsList(false)
        setShowOfficeList(false)
    }
    const handleShowAccesoriesList = () => {
        setShowClothList(false)
        setShowAccesoriesList(true)
        setShowSouveirsList(false)
        setShowOfficeList(false)
    }
    const handleShowSouveirsList = () => {
        setShowClothList(false)
        setShowAccesoriesList(false)
        setShowSouveirsList(true)
        setShowOfficeList(false)
    }
    const handleShowOfficeList = () => {
        setShowClothList(false)
        setShowAccesoriesList(false)
        setShowSouveirsList(false)
        setShowOfficeList(true)
    }


    return (
        <div>
            
        </div>
    );
};

export default CatalogMenu;