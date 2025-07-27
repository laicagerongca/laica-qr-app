import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';

export default (_, inject) => {
  inject('Html5Qrcode', Html5Qrcode);
  inject('Html5QrcodeScanner', Html5QrcodeScanner);
};
