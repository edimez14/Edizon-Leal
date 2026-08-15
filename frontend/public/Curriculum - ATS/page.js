document.addEventListener("DOMContentLoaded", function () {

    // QR Ligeramente más pequeños para asegurar ajuste
    const commonConfig = {
        width: 60,
        height: 60,
        colorDark: "#0f172a",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    };

    const webContainer = document.getElementById("qr-web");
    if (webContainer) {
        webContainer.innerHTML = "";
        new QRCode(webContainer, {
            text: "https://aurea-web.com/Index",
            ...commonConfig
        });
    }

    const shopContainer = document.getElementById("qr-shop");
    if (shopContainer) {
        shopContainer.innerHTML = "";
        new QRCode(shopContainer, {
            text: "https://template-aurea-shop.vercel.app/",
            ...commonConfig
        });
    }
    // 3. QR para Portafolio (Barra Lateral)
    const portfolioContainer = document.getElementById("qr-portfolio");
    if (portfolioContainer) {
        // Limpiamos previo
        portfolioContainer.innerHTML = "";
        new QRCode(portfolioContainer, {
            text: "https://aurea-web.com/Index", // Tu enlace al portafolio
            width: 85, // Un poco más grande que los otros
            height: 85,
            colorDark: "#0f172a",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});