export interface NavigationModel {
    id: string;
    title: string;
    parent_id: string;
    childs: NavigationModel[]; 
}
