export type Recipe = {
    id: number
    name: string
    description: string
};

export type Ingredient = {
    id: number
    rId: number
    name: string
}

export type RecipeIngredient = {
    iId: number
    rId: number
    quantity: string
    unit: string
}
export type Direction = {
    id: number
    rId: number
    stepNum: number
    instruction: string
}

