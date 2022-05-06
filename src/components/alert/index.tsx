import Swal from 'sweetalert2';

export type AlertProps = {
  title?: 'Oops...' | 'Sucesso' | string;
  text: string;
  icon?:
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'question';
  position?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'center'
    | 'center-start'
    | 'center-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end';
  footer?: string;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  showDenyButton?: boolean;
  showCloseButton?: boolean;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonText?: string;
  cancelButtonColor?: string;
  denyButtonText?: string;
  denyButtonColor?: string;
  timer?: number;
  timerProgressBar?: boolean;
  background?: string;
  width?: number;
  padding?: string;
  html?: string;
  iconHtml?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  reverseButtons?: boolean;
};

export const Alert = ({
  title,
  text,
  icon,
  position = 'center',
  footer,
  showConfirmButton = true,
  showCancelButton,
  showDenyButton,
  showCloseButton,
  confirmButtonText = 'OK',
  confirmButtonColor,
  cancelButtonText = 'Cancelar',
  cancelButtonColor,
  denyButtonText = 'Não',
  denyButtonColor,
  timer,
  timerProgressBar,
  background,
  width,
  padding,
  html,
  iconHtml,
  imageUrl,
  imageWidth,
  imageHeight,
  imageAlt,
  reverseButtons,
}: AlertProps) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    position: position,
    footer: footer,
    showConfirmButton: showConfirmButton,
    showCancelButton: showCancelButton,
    showDenyButton: showDenyButton,
    showCloseButton: showCloseButton,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: confirmButtonColor,
    cancelButtonText: cancelButtonText,
    cancelButtonColor: cancelButtonColor,
    denyButtonText: denyButtonText,
    denyButtonColor: denyButtonColor,
    timer: timer,
    timerProgressBar: timerProgressBar,
    background: background,
    width: width,
    padding: padding,
    html: html,
    iconHtml: iconHtml,
    imageUrl: imageUrl,
    imageWidth: imageWidth,
    imageHeight: imageHeight,
    imageAlt: imageAlt,
    reverseButtons: reverseButtons,
  });
};
