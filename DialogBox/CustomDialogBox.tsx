import * as React from 'react';
import { FluentProvider, webLightTheme, } from "@fluentui/react-components"
import './css/CustomDialogBox.css';

export interface ICustomDialogBox {
  title: string;
  message: string;
  headerBackgroundColor: string;
  headerTextColor: string;
  onBtnClicked: (btnText:string) => void;
}

export const CustomDialogBox = (props: ICustomDialogBox) => {

  const { title, message, headerBackgroundColor, headerTextColor, onBtnClicked } = props;

  const handleClick = (btnText:string) => {
    onBtnClicked(btnText)
  }

  const headerStyle = {
    backgroundColor: headerBackgroundColor,
    color: headerTextColor
  };

  console.log(headerStyle)

  return (
    <FluentProvider theme={webLightTheme}>
      <div className="customDialogBox-modal">
        <div className="customDialogBox-modal_content">
          <header className="customDialogBox-header" style={headerStyle}>
            <h1>{title}</h1>
          </header>
          <main className="customDialogBox-main">
            <div>
              <p>
                {message}
              </p>
            </div>
          </main>
          <footer className="customDialogBox-footer">
            <button className="customDialogBox-btn customDialogBox-btn_cancel"
               onClick={() => handleClick("Cancelar")}>
              Cancelar
            </button>
            <button className="customDialogBox-btn customDialogBox-btn_confirm"
              onClick={() => handleClick("Confirmar")}>
              Confirmar
            </button>
          </footer>
        </div>
      </div>
    </FluentProvider>
  )
};