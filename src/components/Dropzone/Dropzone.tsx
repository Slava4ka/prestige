import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import styles from './dropzone.module.scss';
import GoogleIcon from '../Icons/GoogleIcon';
import DropboxIcon from '../Icons/DropboxIcon';

const baseStyle: {[key: string]: any} = {
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '30px',
	borderWidth: 2,
	borderRadius: 2,
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: 'rgb(245, 80, 46)',
	color: 'white',
	outline: 'none',
	transition: 'border .24s ease-in-out',
};

const activeStyle = {
	borderColor: '#2196f3',
};

const acceptStyle = {
	borderColor: '#00e676',
};

const rejectStyle = {
	borderColor: '#ff1744',
};

const Dropzone = () => {
	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({accept: 'image/*'});

	const style = useMemo(() => ({
		...baseStyle,
		...(isDragActive ? activeStyle : {}),
		...(isDragAccept ? acceptStyle : {}),
		...(isDragReject ? rejectStyle : {}),
	}), [
		isDragActive,
		isDragReject,
		isDragAccept,
	]);
	return (
		<div className="container" style={{display: 'flex'}}>
			<div {...getRootProps({style})} className={styles.zone}>
				<input {...getInputProps()} />
				<h2>Выберете IFC файл или перетащите его сюда </h2>
			</div>
			<div className={styles.buttons_group}>
				<div className={styles.round_buttons}>
					<DropboxIcon />
				</div>
				<div className={styles.round_buttons}>
					<GoogleIcon />
				</div>
			</div>
		</div>
	);
};

export default Dropzone;
