import { footer } from "../components/footer.js";
import {header} from "../components/header.js";

export function home() {
    const services = ['UX', 'Designe', 'Development'];
    let servicesHTML = '';

    for (const service of services) {
        servicesHTML += `<li>${service}</li>`
}

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${header()}
        <main>
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis omnis fugit iusto sapiente rem, laboriosam officiis eaque, ipsam qui libero ullam vero rerum adipisci delectus voluptatem, perspiciatis quasi ab!</p>
            <h1>Services</h1>
            <ul>${servicesHTML}</ul>
        </main>
        ${footer()}
    </body>
    </html>
    `;
}