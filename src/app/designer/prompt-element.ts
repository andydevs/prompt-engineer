export enum ElementType {
    Text = 'Text',
    Computed = 'Computed',
    Format = 'Format',
    Reset = 'Reset'
}

type TextContent = string
enum ComputedContent {
    User = 'User',
    Host = 'Host',
    Directory = 'Directory'
}
interface FormatContent {
    param: boolean;
}

export type PromptElementContent = TextContent | ComputedContent | FormatContent

function initContent(type: ElementType): PromptElementContent | undefined {
    switch (type) {
        case ElementType.Text:
            return "";
        case ElementType.Computed:
            return ComputedContent.User;
        case ElementType.Format:
            return { param: true };
        case ElementType.Reset:
            return undefined;
    }
}

export interface PromptElement {
    type: ElementType,
    content?: PromptElementContent
}

export function create(type: ElementType): PromptElement {
    let content = initContent(type);
    if (content !== undefined) {
        return { type, content }
    } else {
        return { type }
    }
}