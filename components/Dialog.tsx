import { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

interface DialogProps extends JSX.HTMLAttributes<HTMLDivElement> {
  // children: JSX.Element | JSX.Element[];
  open: boolean;
  onDismiss: () => void;
}

export function Dialog(props: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const onClick = () => {
    if (props.onDismiss) props.onDismiss();
  };

  function showModal() {
    ref.current?.showModal();
  }

  useEffect(() => {
    if (props.open) {
      console.log("Showing dialog");
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.open]);

  let style = "";
  if (!props.open) {
    style = "display: none";
  }
  return (
    <>
      <div {...props} style={style}>
        {props.open}
        <dialog
          ref={ref}
          class={"rounded-lg shadow-xl " + props.class}
          onClick={onClick}
        >
          <div
            onClick={(ev) => {
              ev.stopPropagation();
            }}
          >
            {props.children}

            <form
              class="mt-4 flex justify-end"
              method="dialog"
              onSubmit={() => {
                ref.current?.close();
                props.onDismiss?.();
              }}
            >
              <button class="
            btn btn-primary
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
          ">
                Close
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
