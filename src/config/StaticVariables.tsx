export interface Slide {
    discount: string;
    desp: string;
};

export const slides: Slide[] = [
    { discount: "35%", desp: "Diet Special Smoothie & Fruit Discount" },
    { discount: "45%", desp: "Diet Special Oats & Biscuits Discount" },
    { discount: "25%", desp: "Diet Special Vegies & Salads Discount" },
];

export interface TaskToday {
    is_complete: boolean;
    desp: string;
};

export const tasks: TaskToday[] = [
    {is_complete: true, desp: "Eat Nutritious Food"},
    {is_complete: false, desp: "30 Minutes Walking"},
    {is_complete: false, desp: "45 Minutes Pilates"},
];
