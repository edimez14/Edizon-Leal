"use client"; // Asegúrate de que este componente se renderice en el cliente

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

import DynamicIcon from "../components/DynamicIcon";

export default function ThemeToggle() {
    // Estado para guardar el tema actual ("light" o "dark")
    const [theme, setTheme] = useState("light");

    // Al montar el componente, comprobamos si hay un tema guardado en localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        // Agrega o quita la clase "dark" en el elemento <html>
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    // Función para alternar el tema
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <Button isIconOnly onPress={toggleTheme}>
            {theme === "light" ? <DynamicIcon icon={"IoSunny"} /> : <DynamicIcon icon={"FaMoon"} />}
        </Button>
    );
}
