/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    title: ComponentFramework.PropertyTypes.StringProperty;
    message: ComponentFramework.PropertyTypes.StringProperty;
    headerBackgroundColor: ComponentFramework.PropertyTypes.StringProperty;
    headerTextColor: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    buttonClicked?: string;
}
