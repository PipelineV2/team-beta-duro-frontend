import { QRCodeCanvas } from 'qrcode.react';
import { FC } from 'react';

const QrCode: FC<{ url: string }> = ({ url }) => {
	return <QRCodeCanvas id='qrcode' value={url} size={300} bgColor='#fff' level='H' />;
};

export default QrCode;
