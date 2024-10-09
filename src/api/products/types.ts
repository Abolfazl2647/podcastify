interface IDimensions {
    width: number;
    height: number;
    depth: number;
}

interface IReviewItem {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
}

interface IMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

type ImagesType = string[];
type TagsType = string[];

export interface ProductFilterBody {
    limit: number;
    skip: number;
    select: string[];
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: TagsType;
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviewItem[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    thumbnail: string;
    images: ImagesType;
}

export interface IProductResponse {
    products: IProduct[];
}

export interface IProductsSearchResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}

export type FilterProductPick = Pick<
    IProduct,
    'id' | 'title' | 'category' | 'warrantyInformation' | 'description' | 'thumbnail'
>;

// TODO: check if we can make it using generics for picking dynamic items
export interface IProductFilteredResponse {
    products: FilterProductPick[];
    total: number;
    skip: number;
    limit: number;
}
