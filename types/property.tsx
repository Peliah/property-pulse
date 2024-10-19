import mongoose, { Document, Model } from "mongoose";

export interface Property extends Document {
    _id: mongoose.Types.ObjectId,
    owner: string; // MongoDB ObjectId
    name: string;
    type: string;
    description?: string;
    location: {
        street?: string;
        city?: string;
        state?: string;
        zipcode?: string;
    };
    beds: number;
    baths: number;
    square_feet: number;
    amenities: string[];
    rates: {
        nightly?: number;
        weekly?: number;
        monthly?: number;
    };
    seller_info?: {
        name?: string;
        email?: string;
        phone?: string;
    };
    images: string[];
    is_featured?: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type PropertyModel = Model<Property>;
