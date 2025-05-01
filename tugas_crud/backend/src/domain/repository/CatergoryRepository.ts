import { CategoryWithProductDomain } from "../model/CategoryWithProductDomain";
import { DomainWrapper } from "../model/DomainWrapper";

export interface CategoryRepository {
    getCategoriesWithProduct(): Promise<DomainWrapper<CategoryWithProductDomain[]>>
    getCategories(): Promise<DomainWrapper<string[]>>
}
