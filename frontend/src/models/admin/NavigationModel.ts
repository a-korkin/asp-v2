export interface NavigationModel {
    id: string;
    title: string;
    parent_id: string;
    slug: string;
    order: number;
    childs: NavigationModel[]; 
}
