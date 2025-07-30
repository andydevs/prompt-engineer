export enum ElementType {
    Text = 'Text',
    Computed = 'Computed',
    Format = 'Format',
    Reset = 'Reset',
}

export enum ComputedValue {
    User = 'User',
    Host = 'Host',
    Directory = 'Directory',
}

const computedPreviews: { [key in ComputedValue]: string } = {
    [ComputedValue.User]: 'andy',
    [ComputedValue.Host]: 'supercomputer',
    [ComputedValue.Directory]: '~/workspace/super-task',
};

export interface FormatData {
    param: boolean;
}

export interface BaseElement {
    type: ElementType;
}

export interface TextElement extends BaseElement {
    type: ElementType.Text;
    text: string;
}

export interface ComputedElement extends BaseElement {
    type: ElementType.Computed;
    value: ComputedValue;
}

export interface FormatElement extends BaseElement {
    type: ElementType.Format;
    format: FormatData;
}

export interface ResetElement extends BaseElement {
    type: ElementType.Reset;
}

export type PromptElement =
    | TextElement
    | ComputedElement
    | FormatElement
    | ResetElement;

export function create(type: ElementType): PromptElement {
    switch (type) {
        case ElementType.Text:
            return { type, text: '' };
        case ElementType.Computed:
            return { type, value: ComputedValue.User };
        case ElementType.Format:
            return { type, format: { param: false } };
        case ElementType.Reset:
        default:
            return { type };
    }
}

function isElemByType<T extends PromptElement>(
    typ: ElementType,
): (elem: PromptElement) => elem is T {
    return (elem: PromptElement): elem is T => elem.type === typ;
}

export const isText = isElemByType<TextElement>(ElementType.Text);
export const isComputed = isElemByType<ComputedElement>(ElementType.Computed);
export const isFormat = isElemByType<FormatElement>(ElementType.Format);
export const isReset = isElemByType<ResetElement>(ElementType.Reset);

export function generatePreview(elements: PromptElement[]): string {
    return elements
        .map((element) => {
            if (isText(element)) {
                return element.text;
            } else if (isComputed(element)) {
                return computedPreviews[element.value];
            } else {
                return '';
            }
        })
        .join('');
}
