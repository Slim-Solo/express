import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {
    constructor() {
        super();
        this.pageType = 'auth';
    }
    main() {
        return `
            <h1>Register page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facilis omnis fugit iusto sapiente rem, laboriosam officiis eaque, ipsam qui libero ullam vero rerum adipisci delectus voluptatem, perspiciatis quasi ab!</p>
            <form>
                <label>Username</label>
                <input type="text">
                <label>Password</label>
                <input type="password">
                <button type="submit">Register</button>
            </form>
            `;
        }
}