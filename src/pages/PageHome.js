import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {
    main() {
        const services = ['UX', 'Designe', 'Development'];
        let servicesHTML = '';

        for (const service of services) {
        servicesHTML += `<li>${service}</li>`
}
        return `
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis omnis fugit iusto sapiente rem, laboriosam officiis eaque, ipsam qui libero ullam vero rerum adipisci delectus voluptatem, perspiciatis quasi ab!</p>
            <h1>Services</h1>
            <ul>${servicesHTML}</ul>`;
    }
}