import * as React from "react";
import { makeStyles } from "@fluentui/react/lib/Theme";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { useBoolean } from "@fluentui/react-hooks";

// TODO: See Doc to build the component:https://learn.microsoft.com/en-us/power-apps/developer/component-framework/create-custom-controls-using-pcf

const useStyles = makeStyles({
  header: {
    flex: 1,
    fontSize: "0.4rem",
    backgroundColor: "#00b7c3",
    color: "#fff",

    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
  },
  main: {
    flex: 8,
    color: "blue",
    paddingBottom: "2rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
  },

  footer: {
    flex: 1,
    color: "green",
    display: "flex",
    justifyContent: "center",
    gap: 10,
    paddingBottom: "1.2rem",
    paddingLeft: "1.2rem",
    paddingRight: "1.2rem",
  },

  btn: {
    border: "none",
    borderRadius: "2px",
    paddingBottom: ".6rem",
    paddingTop: ".6rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    letterSpacing: "1px",
    cursor: "pointer",
    fontSize: ".8rem",
    minWidth: "8rem",
  },

  btn_cancel: {
    color: "#00b7c3",
    backgroundColor: "#fff",
    border: "1px solid #00b7c3",
    "&:hover": {
      backgroundColor: "#fefbf4",
    },
  },

  btn_confirm: {
    color: "#fff",
    backgroundColor: "#00b7c3",
    "&:hover": {
      backgroundColor: "#9bd9db",
    },
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },

  modal_content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    minWidth: "50%",
  },
});

export interface IBasicDialogProps {
  titulo?: string;
  mensagem?: string;
}

export const BasicDialog = (props: IBasicDialogProps) => {
  const { titulo, mensagem } = props;
  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);

  const classes = useStyles();

  return (
    <>
      <DefaultButton
        secondaryText="Opens the Sample Dialog"
        onClick={toggleHideDialog}
        text="Show Popup"
      />

      <div className={classes.modal} hidden={hideDialog}>
        <div className={classes.modal_content}>
          <header className={classes.header}>
            <h1>{titulo}</h1>
          </header>
          <main className={classes.main}>
            <div>
              <p>
                <strong>Mensagem:</strong> {mensagem}
              </p>
            </div>
          </main>
          <footer className={classes.footer}>
            <button
              className={`${classes.btn} ${classes.btn_cancel}`}
              onClick={toggleHideDialog}
            >
              Cancelar
            </button>
            <button
              className={`${classes.btn} ${classes.btn_confirm}`}
              onClick={toggleHideDialog}
            >
              OK
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
