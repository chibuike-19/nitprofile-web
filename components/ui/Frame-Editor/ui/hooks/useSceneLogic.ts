import { useCallback, useEffect, useRef } from "react"
import { useSceneContext } from "./useSceneContext"
import { makeToast } from "@/libs/react-toast"
import { useEditorActions } from "@/state_management"
import { ICreateNodeOptions, Scene, convert_fabric_objects_to_nodes } from "@frame-editor/logic"

export const useSceneLogic = () => {
    // Ref Object used to manage the state of the scene object
    const sceneRef = useRef<Scene | null>(null)

    const { dispatch, state } = useSceneContext()

    const { saveEditorCustomizations } = useEditorActions()

    const imageRef = useRef<HTMLImageElement>(null)

    // const [type, setType] = useState<"landscape" | "portrait">("portrait")

    /**
     * Initializes the scene by creating a new canvas and configuring its options.
     * This function sets up the canvas for rendering and interaction.
     */
    const initializeScene = useCallback(() => {
        // Create a new scene with the specified canvas ID and options
        const scene = new Scene({
            canvas_id: "frame_editor", // ID of the HTML canvas element
            options: {
                selection: false,
                renderOnAddRemove: true, // Render canvas when objects are added or removed
            },
        })

        // Get the canvas element from the scene
        const canvas = scene.get_canvas()

        // If canvas creation fails, display an error toast and return
        if (!canvas) {
            return makeToast({
                id: "error_creating_canvas",
                message: "Error Creating Canvas, Please Contact Administrator",
                type: "error",
            })
        }

        // Dispatch an action to initialize the canvas in the Frame Editor Context
        dispatch({
            type: "initialize_canvas",
            payload: {
                canvas,
            },
        })

        // Set the scene reference to the initialized scene
        sceneRef.current = scene
    }, [])

    /**
     * Rescales the canvas and its objects based on the current dimensions of the canvas container.
     * This function adjusts the size and position of all objects in the canvas to fit the container.
     * It also updates the canvas dimensions to match the container's dimensions.
     */
    const rescaleCanvas = (containerWidth: number, containerHeight: number) => {
        // Check if the image reference or canvas is not available
        if (!imageRef.current || !state.scene.canvas) return

        // Get the current width of the canvas
        const canvasWidth = state.scene.canvas.getWidth()

        // Calculate the scaling factor based on the container's width and the canvas width
        const scaleFactor = containerWidth / canvasWidth

        // Get all rendered objects on the canvas
        const renderedObjects = state.scene.canvas.getObjects()

        // Iterate over each object on the canvas
        renderedObjects.forEach((obj: fabric.Object) => {
            // Check if the object has necessary properties for scaling and positioning
            if (!obj.scaleX || !obj.scaleY || !obj.top || !obj.left) return

            // Store the original left and top positions of the object
            const originalLeft = obj.left
            const originalTop = obj.top

            // Scale the object's dimensions
            obj.scaleX *= scaleFactor
            obj.scaleY *= scaleFactor

            // Update the left and top positions of the object after scaling
            obj.left = originalLeft * scaleFactor
            obj.top = originalTop * scaleFactor

            // Update the coordinates of the object for proper rendering
            obj.setCoords()
        })

        // Update the canvas dimensions to match the container's dimensions
        state.scene.canvas.setWidth(containerWidth)
        state.scene.canvas.setHeight(containerHeight)

        // Render all objects on the canvas
        state.scene.canvas.renderAll()
    }

    /**
     * Handles the creation of a new Fabric Object within the scene.
     * This function delegates the creation process to the scene reference.
     * If the scene reference is not available, this function does nothing.
     *
     * @param options - Options for creating the node, including type, position, and other properties.
     */
    const handleCreateNode = (options: ICreateNodeOptions): void => {
        // Delegate the creation process to the scene reference if available
        sceneRef.current?.create_node(options)
    }

    useEffect(() => {
        if (sceneRef.current) return

        initializeScene()
    })

    // Setting the Screen Size State whenever the screen is resized
    /**
     * Adds a resize event listener to handle canvas resizing when the window size changes.
     * This useEffect hook ensures that the canvas is properly resized to fit its container.
     * It also removes the event listener when the component is unmounted.
     */
    useEffect(() => {
        /**
         * Handles the resize event by recalculating the canvas dimensions based on the container's size.
         * If the image reference is not available, this function does nothing.
         */
        const handleResize = (): void => {
            // Check if the image reference is not available
            if (!imageRef.current) return

            // Get the width and height of the container
            const containerWidth = imageRef.current.offsetWidth
            const containerHeight = imageRef.current.offsetHeight

            // Rescale the canvas to fit the container
            rescaleCanvas(containerWidth, containerHeight)
        }

        // Add resize event listener when the component mounts
        window.addEventListener("resize", handleResize)

        // Call handleResize function immediately to ensure proper canvas sizing
        handleResize()

        // Remove resize event listener when the component unmounts
        return () => window.removeEventListener("resize", handleResize)
    }, [imageRef.current]) // Dependency array includes imageRef.current to trigger useEffect when it changes

    const saves = () => {
        const objects = state.scene.canvas?.getObjects()

        if (!objects || !state.scene.canvas || !imageRef.current) return

        const canvasWidth = state.scene.canvas.getWidth()

        const clientWidth = imageRef.current?.offsetWidth

        const scaleFactor = clientWidth / canvasWidth

        convert_fabric_objects_to_nodes({
            canvasHeight: state.scene.canvas.getHeight(),
            canvasWidth: state.scene.canvas.getWidth(),
            objects,
            scaleFactor,
        })
        // Get all objects on the page
        // Get the properties needed from them
        // Send it to the api
        // Clear the scene, canvas, etc
        // Take them back to home page
    }

    return {
        handleCreateNode,
        saves,
        canvas: state.scene.canvas,
        imageRef,
    }
}
