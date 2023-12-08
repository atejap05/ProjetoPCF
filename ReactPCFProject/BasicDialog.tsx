import * as React from "react";
import { Label } from "@fluentui/react";

export interface IBasicDialogProps {
  name?: string;
}

export function BasicDialog(props: IBasicDialogProps) {
  return <Label>{props.name}</Label>;
}
