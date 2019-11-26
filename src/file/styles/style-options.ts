import { AlignmentType, IIndentAttributesProperties, ISpacingProperties, UnderlineType } from "../paragraph";
import { ShadingType } from "../table";

export interface IRunStyleOptions {
    readonly size?: number;
    readonly bold?: boolean;
    readonly italics?: boolean;
    readonly smallCaps?: boolean;
    readonly allCaps?: boolean;
    readonly strike?: boolean;
    readonly doubleStrike?: boolean;
    readonly subScript?: boolean;
    readonly superScript?: boolean;
    readonly underline?: {
        readonly type?: UnderlineType;
        readonly color?: string;
    };
    readonly color?: string;
    readonly font?: string;
    readonly characterSpacing?: number;
    readonly highlight?: string;
    readonly shadow?: {
        readonly type: ShadingType;
        readonly fill: string;
        readonly color: string;
    };
}

export interface IParagraphStyleOptions2 {
    readonly alignment?: AlignmentType;
    readonly thematicBreak?: boolean;
    readonly rightTabStop?: number;
    readonly leftTabStop?: number;
    readonly indent?: IIndentAttributesProperties;
    readonly spacing?: ISpacingProperties;
    readonly keepNext?: boolean;
    readonly keepLines?: boolean;
    readonly outlineLevel?: number;
}

// FIXME: revert my commit when this is fixed from the upstream
// to add this file to the build require an empty class from it
export class QuickFixHack {}
