import { PageTemplate } from "../template/PageTemplate.js";

export class Page404 extends PageTemplate {
    main() {
        return `
            <h1>404</h1>
            <h2>Page not found</h2>
            <a href="/">Back home</a>
        `
    }
}