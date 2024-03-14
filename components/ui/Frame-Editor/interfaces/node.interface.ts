const placeholderTextNodeEntity = ["program", "date", "user"] as const

type IPlaceholderTextNodeEntity = (typeof placeholderTextNodeEntity)[number]

interface INode {
    id: string
    x: number
    y: number
}

interface ImageNode extends INode {
    type: "image"
    overlay: string
    width: number
    height: number
    gravity: string
    radius: number
    crop: string
}

interface INonPlaceholderTextNode extends INode {
    type: "text"
    text: string
    font_family: string
    font_size?: number
    font_weight?: string
    color?: string
    placeholder?: false
}

interface IPlaceholderTextNode extends INode {
    type: "text"
    text: string
    font_family: string
    font_size?: number
    font_weight?: string
    color?: string
    placeholder?: true
    entity: IPlaceholderTextNodeEntity
    entity_key: string
}

type TextNode = INonPlaceholderTextNode | IPlaceholderTextNode

type Node = ImageNode | TextNode

type ICreateNodeOptions =
    | {
          nodeType: "image" | "text"
      }
    | {
          nodeType: "placeholder"
          entity: IPlaceholderTextNodeEntity
          entityKey: string
      }

export type { TextNode, ImageNode, Node, ICreateNodeOptions, IPlaceholderTextNodeEntity }
