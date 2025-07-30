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
    Time = 'Time',
    PromptEnd = 'PromptEnd',
}

type ComputedMap = { [key in ComputedValue]: string };

const computedPreviews: ComputedMap = {
    [ComputedValue.User]: 'andy',
    [ComputedValue.Host]: 'supercomputer',
    [ComputedValue.Directory]: '~/workspace/super-task',
    [ComputedValue.Time]: '4:23 PM',
    [ComputedValue.PromptEnd]: '$',
};

const computedPS1: ComputedMap = {
    [ComputedValue.User]: '\\u',
    [ComputedValue.Host]: '\\h',
    [ComputedValue.Directory]: '\\w',
    [ComputedValue.Time]: '\\@',
    [ComputedValue.PromptEnd]: '\\$',
};

export enum FormatColor {
    Black = 'Black',
    Red = 'Red',
    Green = 'Green',
    Yellow = 'Yellow',
    Blue = 'Blue',
    Magenta = 'Magenta',
    Cyan = 'Cyan',
    White = 'White',
}

type FormatColorValueMap = { [key in FormatColor]: number };
const formatColorValue: FormatColorValueMap = {
    [FormatColor.Black]: 0,
    [FormatColor.Red]: 1,
    [FormatColor.Green]: 2,
    [FormatColor.Yellow]: 3,
    [FormatColor.Blue]: 4,
    [FormatColor.Magenta]: 5,
    [FormatColor.Cyan]: 6,
    [FormatColor.White]: 7,
};

export enum FormatIntensity {
    Dim = 'Dim',
    Bright = 'Bright',
}

type FormatIntensityMap = { [key in FormatIntensity]: number };

const formatFGIntensity: FormatIntensityMap = {
    [FormatIntensity.Dim]: 30,
    [FormatIntensity.Bright]: 90,
};

export interface FormatData {
    foreground: {
        color: FormatColor;
        intensity: FormatIntensity;
    };
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
            return {
                type,
                format: {
                    foreground: {
                        intensity: FormatIntensity.Dim,
                        color: FormatColor.White,
                    },
                },
            };
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

interface PreviewElement {
    text: string;
    format?: FormatData;
}

export function generatePreviewElementText(element: PromptElement): string {
    if (isText(element)) {
        return element.text;
    } else if (isComputed(element)) {
        return computedPreviews[element.value];
    } else {
        return '';
    }
}

export function generatePreviewElements(
    elements: PromptElement[],
): PreviewElement[] {
    let lastFormat = undefined;
    let previewElements: PreviewElement[] = [];
    for (const element of elements) {
        if (isFormat(element)) {
            lastFormat = element.format;
        } else if (isReset(element)) {
            lastFormat = undefined;
        } else {
            let newElem: PreviewElement = {
                text: generatePreviewElementText(element),
            };
            if (lastFormat !== undefined) {
                // Make sure we get a copy so nothing get's corrupted on the way
                newElem.format = JSON.parse(JSON.stringify(lastFormat));
            }
            previewElements.push(newElem);
        }
    }
    return previewElements;
}

export function generatePS1(elements: PromptElement[]): string {
    return elements
        .map((elem) => {
            if (isText(elem)) {
                return elem.text;
            } else if (isComputed(elem)) {
                return computedPS1[elem.value];
            } else if (isReset(elem)) {
                return '\\e[0m';
            } else if (isFormat(elem)) {
                let { intensity, color } = elem.format.foreground;
                let fgIntensity = formatFGIntensity[intensity];
                let fgColor = formatColorValue[color];
                let fgCode = fgIntensity + fgColor;
                return `\\e[${fgCode}m`;
            } else {
                return '';
            }
        })
        .join('');
}
