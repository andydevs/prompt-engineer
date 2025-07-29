export enum ElementType {
    Text = 'Text',
    Computed = 'Computed',
    Format = 'Format',
    Reset = 'Reset'
}

export enum ComputedValue {
    User = 'User',
    Host = 'Host',
    Directory = 'Directory'
}

export interface BaseElement {
    type: ElementType
}

export interface TextElement {
    type: ElementType.Text,
    text: string
}

export interface ComputedElement {
    type: ElementType.Computed,
    value: ComputedValue
}

export interface FormatElement {
    type: ElementType.Format
    param: boolean
}

export interface ResetElement {
    type: ElementType.Reset
}

export type PromptElement = TextElement 
    | ComputedElement | FormatElement 
    | ResetElement


export function create(type:ElementType): PromptElement {
    switch (type) {
        case ElementType.Text:
            return { type, text: "" };
        case ElementType.Computed:
            return { type, value: ComputedValue.User };
        case ElementType.Format:
            return { type, param: false };
        case ElementType.Reset:
        default:
            return { type }
    }
}

function isElemByType<T extends PromptElement>(typ: ElementType): ((elem: PromptElement) => elem is T) {
    return (elem: PromptElement): elem is T => elem.type === typ
}

export const isText = isElemByType<TextElement>(ElementType.Text)
export const isComputed = isElemByType<ComputedElement>(ElementType.Text)
export const isFormat = isElemByType<FormatElement>(ElementType.Text)
export const isReset = isElemByType<ResetElement>(ElementType.Reset)