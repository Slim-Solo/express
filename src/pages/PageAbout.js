import { PageTemplate } from "../template/PageTemplate.js";

export class PageAbout extends PageTemplate {
    main() {
        return `
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis omnis fugit iusto sapiente rem, laboriosam officiis eaque, ipsam qui libero ullam vero rerum adipisci delectus voluptatem, perspiciatis quasi ab!</p>
            `;
        }
}