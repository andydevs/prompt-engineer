export enum ElementType {
    Text = 'Text',
    Computed = 'Computed',
    Format = 'Format',
    Reset = 'Reset'
}

export interface PromptElement {
    type: ElementType
}