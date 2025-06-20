import { footer } from "../components/footer.js";
import { header } from "../components/header.js";

export function notFound() {
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
                <h1>404</h1>
                <h2>Page not found</h2>
                <a href="/">Back home</a>
            </main>
        ${footer()}
    </body>
    </html>
    `
}